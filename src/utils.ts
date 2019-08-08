export const isObject = (value: any) => {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

export const cloneDeep = (obj: any) => {
  if (!isObject(obj)) return obj
  let target: any = obj instanceof Array ? [] : new Object()
  Object.keys(obj).forEach(function(key) {
    // 递归遍历
    target[key] = isObject(obj[key]) ? cloneDeep(obj[key]) : obj[key]
  })
  return target
}
