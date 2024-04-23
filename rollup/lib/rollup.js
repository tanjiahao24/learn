/**
 * rollup函数用于将多个js文件打包成单个文件
 *
 * @param entry 打包入口文件的路径
 * @param output 打包后文件的输出路径
 */
function rollup(entry, output) {
  const bundle = new Bundle({ entry });
  bundle.build(output);
}

module.exports = rollup;
