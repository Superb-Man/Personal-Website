import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: UserConfig = {
	plugins: [UnoCSS(), sveltekit()],
	resolve: {
		alias: {
		  '$config': '/src/config.js' // Alias for the configuration file
		}
	  }
};

export default config;