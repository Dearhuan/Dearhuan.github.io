# 常用类型检查

```ts
const toString = Object.prototype.toString

const is = (val: unknown, type: string) => {
  return toString.call(val) === `[object ${type}]`
}

const isDef = <T = unknown>(val: T): val is T => {
  return typeof val !== 'undefined'
}

const isUnDef = <T = unknown>(val: T): val is T => {
  return !isDef(val)
}

const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, 'Object')
}

const isDate = (val: unknown): val is Date => {
  return is(val, 'Date')
}

const isNull = (val: unknown): val is null => {
  return val === null
}

const isNullAndUnDef = (val: unknown): val is null | undefined => {
  return isUnDef(val) && isNull(val)
}

const isNullOrUnDef = (val: unknown): val is null | undefined => {
  return isUnDef(val) || isNull(val)
}

const isNumber = (val: unknown): val is number => {
  return is(val, 'Number')
}

const isString = (val: unknown): val is string => {
  return is(val, 'String')
}

const isBoolean = (val: unknown): val is boolean => {
  return is(val, 'Boolean')
}

const isRegExp = (val: unknown): val is RegExp => {
  return is(val, 'RegExp')
}

const isFunction = (val: unknown): val is Function => {
  return typeof val === 'function'
}

const isArray = (val: any): val is Array<any> => {
  return val && Array.isArray(val)
}

const isWindow = (val: any): val is Window => {
  return typeof window !== 'undefined' && is(val, 'Window')
}

const isElement = (val: unknown): val is Element => {
  return isObject(val) && !!val.tagName
}

const isMap = (val: unknown): val is Map<any, any> => {
  return is(val, 'Map')
}

const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

const isEmpty = <T = unknown>(val: T): val is T => {
  if(isArray(val) || isString(val)){
    return val.length === 0
  }
  if(val instanceof Map || val instanceof Set){
    return val.size === 0
  }
  if(isObject(val)){
    return Object.keys(val).length === 0
  }
  return false
}

const isUrl = (url: string): boolean => {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(url)
}
```