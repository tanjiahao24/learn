import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser"; // js 压缩
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
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
    terser(),
    postcss(),
    serve({
      open: true, // 是否自动打开浏览器
      openPage: "/dis/index.html", // 打开的页面
      port: 8080, // 开启的端口
    }),
  ],
};
