import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "src/index.js",
  output: {
    file: "dis/bundel.cjs.js",
    format: "iife",
    name: "bundelName",
    // globals: {
    //   ladash: "_",
    //   jquery: "$",
    // },
  },
  external: ["lodash", "jquery"],
  plugins: [
    babel({
      exclude: /node_modules/,
    }),
    nodeResolve(), // 解析 node_modules 中的模块
    commonjs(), // 支持 commonjs 规范
  ],
};
