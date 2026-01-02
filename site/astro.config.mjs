import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://www.comprayrepuestostv.cl',
    output: 'static',
    build: {
        format: 'file'
    },
    compressHTML: true
});
