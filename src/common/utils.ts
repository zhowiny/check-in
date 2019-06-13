
export function isObject (value) {
  return Object.prototype.toString.apply(value) === '[object Object]'
}
export function isArray (value) {
  return Object.prototype.toString.apply(value) === '[object Array]'
}
export function isFunction (value) {
  return Object.prototype.toString.apply(value) === '[object Function]'
}
export function isString (value) {
  return Object.prototype.toString.apply(value) === '[object String]'
}
export function isNumber (value) {
  return Object.prototype.toString.apply(value) === '[object Number]'
}
export function isUndefined (value) {
  return Object.prototype.toString.apply(value) === '[object Undefined]'
}
export function isNull (value) {
  return Object.prototype.toString.apply(value) === '[object Null]'
}

export function mergeClassName (...classList: any[]):string {
  let result: any[] = []
  classList.map(item => {
    isString(item) && result.push(item)
    isArray(item) && result.push(...item)
    if (isObject(item)) {
      Object.keys(item).forEach(key => {
        item[key] && result.push(key)
      })
    }
  })
  return result.join(' ')
}

