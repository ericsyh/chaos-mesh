module.exports = {
  title: 'Chaos Mesh®',
  tagline: 'A Powerful Chaos Engineering Platform for Kubernetes',
  url: 'https://chaos-mesh.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'chaos-mesh', // Usually your GitHub org/user name.
  projectName: 'chaos-mesh.github.io', // Usually your repo name.
  themeConfig: {
    defaultDarkMode: false,
    algolia: {
      apiKey: '49739571d4f89670b12f39d5ad135f5a',
      indexName: 'chaos-mesh',
    },
    googleAnalytics: {
      trackingID: 'UA-90760217-2',
    },
    navbar: {
      logo: {
        alt: 'Chaos Mesh Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg'
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/chaos-mesh/chaos-mesh',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/installation/installation',
            },
            {
              label: 'User Guide',
              to: 'docs/user_guides/run_chaos_experiment',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/chaos_mesh',
            },
            {
              label: 'Slack',
              href: 'https://chaos-mesh.org/tidbslack',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/chaos-mesh',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/chaos-mesh/chaos-mesh',
            },
          ],
        },
      ],
      copyright: `<strong>© Chaos Mesh® Authors ${new Date().getFullYear()} | Documentation Distributed under CC-BY-4.0 </strong> <br> <br> © ${new Date().getFullYear()} The Linux Foundation. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage/"> Trademark Usage page</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'overview',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/chaos-mesh/chaos-mesh/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/chaos-mesh/chaos-mesh/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
