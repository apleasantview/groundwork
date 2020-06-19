// .11ty.js example

const resources = [
  'https://www.11ty.dev/',
  'https://tailwindcss.com/',
  'https://github.com/alpinejs/alpine/',
  'https://developer.mozilla.org/en-US/',
  'https://caniuse.com/',
  'https://htmlhead.dev/',
  'https://frontendchecklist.io/',
  'https://www.kirupa.com/html5/emoji.htm',
];

const spanLinks = resources
  .map((link) => `- <span class="link-chain">${link}</span>\n`)
  .join('');

// Emojis
const crane = String.fromCodePoint(0x1f3d7);
const amazeballs = String.fromCodePoint(0x1f929);

// Class template example
class Page {
  data() {
    return {
      title: `${crane} Resources`,
      permalink: '/resources/',
      content: [
        'Behold! An unordered list of handy links!',
        '_PS: This is content is generated from a .11ty.js file. AMAZEBALLS!_',
        '[Back to the home page](/)',
      ],
      templateEngineOverride: '11ty.js, md',
    };
  }

  render(data) {
    return `${data.content[0]}
${spanLinks}
<small>${data.content[1]}</small>&nbsp;&nbsp;<span>${amazeballs}</span><br>
<span class="link-chain">${data.content[2]}</span>`;
  }
}

module.exports = Page;
