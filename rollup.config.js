exports.default = {
  input: 'src/index.ts',
  output: {
    file: 'lib/bundle.js',
    format: 'umd',
    name: 'box-typescript-sdk-gen',
    sourcemap: true,
    exports: 'named',
  },
  plugins: [
    require('@rollup/plugin-node-resolve')({
      browser: true, // Instruct the plugin to use the "browser" field in package.json
      preferBuiltins: false, // Do not prefer built-in modules over npm packages
    }), // Resolves node modules
    require('@rollup/plugin-commonjs')(), // Converts CommonJS modules to ES6, necessary for some npm packages
    require('@rollup/plugin-typescript')({
      tsconfig: './tsconfig.rollup.json',
    }), // Compiles TypeScript
  ],
};
