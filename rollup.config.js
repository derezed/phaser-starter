import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import builtins from 'rollup-plugin-node-builtins';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/assets/main.js',
    output: {
        format: 'iife',
        name: 'index',
        file: 'src/compiled/main.bundle.js'
    },
    plugins: [
        nodeResolve(),
        serve('src'),
        livereload(),
        builtins(),
        commonjs()
    ]
};