// 模版字符串基本用法

const name = 'jack'
const age = 18

const introduce = `我的名字是${name}, 今年${age}岁！`
console.log(introduce) // 我的名字是jack, 今年18岁！

// 偏门用法
function fn(...arg) {
  console.log(arg[0])
  for(item of arg) {
    console.log(item)
  }
}

fn`name is ${name}, age is ${age}`

