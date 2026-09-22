import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginMdx } from '@rsbuild/plugin-mdx';
import { kenseAppResolve } from '@kense/ui/rsbuild';

/** GitHub project Pages live at /official/ */
const base = process.env.GITHUB_PAGES === '1' ? '/official/' : '/';
const { alias, include, dedupe } = kenseAppResolve(import.meta.url);

export default defineConfig({
  plugins: [pluginReact(), pluginMdx({ extensions: ['.mdx'] })],
  source: {
    alias,
    include,
  },
  resolve: {
    dedupe,
  },
  server: {
    base,
    historyApiFallback: true,
    proxy: {
      // Member /app and Console /api both enter kense-gateway (:8080).
      // Gateway forwards those prefixes to kense-api on host :3000.
      '/app': {
        target: 'http://127.0.0.1:8080',
      },
      '/api': {
        target: 'http://127.0.0.1:8080',
      },
    },
  },
  output: {
    assetPrefix: base,
  },
  html: {
    template: './index.html',
    title: 'Kense — AI-native OS for Agent work',
    favicon: './public/logo/web-icons/favicon-dark.ico',
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      description:
        'Building an AI-native operating system for the Agent era. Turn every personal contribution into crystal intelligence the team can call next time.',
      'theme-color': '#0b0c11',
      'color-scheme': 'dark only',
    },
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          type: 'image/svg+xml',
          href: `${base}logo/svg/kense-icon-dark-transparent.svg`,
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${base}logo/web-icons/kense-icon-dark-32.png`,
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: `${base}logo/web-icons/kense-icon-dark-180.png`,
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
