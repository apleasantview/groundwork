const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './dist/**/*.html',
    './dist/**/*.vue',
    './dist/**/*.jsx',
    './dist/**/*.njk'
    // etc.
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    return broadMatches.concat(innerMatches);
  },
});

const cssnano = require('cssnano')({
  preset: [
    'default',
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    cssnano
  ],
};

// Environment check-in
console.log(process.env.NODE_ENV + ': writing stylesheet.');
