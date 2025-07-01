import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'; 

export default defineConfig({
	plugins: [
		tsconfigPaths(),
	],
	optimizeDeps: {
		exclude: ['nago-react'],
	},
});
