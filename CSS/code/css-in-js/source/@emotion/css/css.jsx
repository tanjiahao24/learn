import serializeStyle from "../serialize"
function css(...arg) {
  const serialized = serializeStyle(arg)
  return `css-${serialized.name}`
}

export default css