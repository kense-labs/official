import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

/** GitHub project Pages live at /official/ */
const base = process.env.GITHUB_PAGES === '1' ? '/official/' : '/';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: {
      '@': './src',
    },
  },
  server: {
    base,
    historyApiFallback: true,
  },
  output: {
    assetPrefix: base,
  },
  html: {
    template: './index.html',
    title: 'Kense — AI-native OS for Agent work',
    favicon: './public/logo/web-icons/favicon-light.ico',
    meta: {
      description:
        'Building an AI-native operating system for the Agent era. Turn every personal contribution into crystal intelligence the team can call next time.',
      'theme-color': '#0b0c11',
    },
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          type: 'image/svg+xml',
          href: `${base}logo/svg/kense-icon-light-transparent.svg`,
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${base}logo/web-icons/kense-icon-light-32.png`,
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: `${base}logo/web-icons/kense-icon-light-180.png`,
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'manifest',
          href: `${base}logo/site.webmanifest`,
        },
      },
    ],
  },
});
