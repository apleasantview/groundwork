const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');
require('dotenv').config();

module.exports = function (eleventyConfig) {
  // BrowserSync configuration
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (_err, bs) {
        const content_404 = fs.readFileSync('dist/404.html');
        bs.addMiddleware('*', (_req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      },
    },
  });

  // Markdown configuration
  eleventyConfig.setLibrary(
    'md',
    require('markdown-it')({
      html: true,
      breaks: true,
      linkify: true,
    })
  );

  // Don't use .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');

  // Passthrough copies
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/stylesheet.css');

  // Plugins
  eleventyConfig.addPlugin(pluginRss);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
  };
};

// Environment check-in
console.log(process.env.NODE_env + ': writing site.');
