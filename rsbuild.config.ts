// rsbuild.config.js
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],

  html: {
    title: 'Mi Aplicación',
    favicon: './public/favicon.svg',
  },
});
