import ts from '@wessberg/rollup-plugin-ts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.module,
            format: 'es'
        }
    ],
    plugins: [resolve({ browser: true }), commonjs(), ts()]
};
