import resolve from '@rollup/plugin-node-resolve';
import { rollupImportMapPlugin } from "rollup-plugin-import-map";

export default {
  input: '.built/THREE.js',
  output: {
    name: "THREE",
    file: '.built/THREE.bundle.js',
    format: 'iife'
  },
  plugins: [ resolve() ]
};
