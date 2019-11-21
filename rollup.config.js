import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer';
import analyze from 'rollup-plugin-analyzer'

export default {
  input: 'src/index.js',
  output: {
      file: './bundles/rollup-basic.js',
      format: 'umd',
    },
  plugins: [
    url(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    analyze(),
    visualizer()
  ],
}