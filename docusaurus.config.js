// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('./writeDocsJson')

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const githubUrl = (/** @type {string[]} */ ...segments) => `https://github.com/gbenm/${segments.join("/")}`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pintos Utils',
  tagline: 'Un flujo desarrollo fácil y cómodo :)',
  url: 'https://gbenm.github.io/pintos-utils/',
  baseUrl: '/pintos-utils/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gbenm', // Usually your GitHub org/user name.
  projectName: 'pintos-utils', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: githubUrl("tree", "main")
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Pintos Utils',
        logo: {
          alt: '<Logo>',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Benyamin Galeano. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark"
      }
    }),
};

module.exports = config;
