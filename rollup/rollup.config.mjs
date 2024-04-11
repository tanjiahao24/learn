import babel from "@rollup/plugin-babel";
export default {
  input: "src/index.js",
  output: {
    file: "dis/bundel.cjs.js",
    format: "cjs",
    name: "bundelName",
  },
  plugins: [
    babel({
      exclude: /node_modules/,
    }),
  ],
};
