import ts from '@wessberg/rollup-plugin-ts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.module,
            format: 'es'
        }
    ],
    plugins: [resolve({ browser: true }), commonjs(), json(), ts()]
};
