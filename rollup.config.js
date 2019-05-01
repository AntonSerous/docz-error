import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'StyledComponents',
}

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'esm',
    globals,
    sourcemap: true,
  },
  external: Object.keys(globals),
  plugins: [
    resolve({
      extensions,
    }),
    commonjs({
      include: '**/node_modules/**',
      namedExports: {},
    }),
    babel({
      extensions,
      include: ['./src/**/*'],
      exclude: 'node_modules/**',
    }),
    filesize(),
  ]
}
