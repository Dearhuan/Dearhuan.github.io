export const useDebounce = (fn: Function, delay: number, immdiate: boolean = false, resultCallback: Function) => {
  let timer: null | NodeJS.Timeout = null
  let isInvoke = false
  function _debounce(...arg) {
    if (timer) clearTimeout(timer)
    if (immdiate && !isInvoke) {
      const result = fn.apply(this, arg)
      if (resultCallback && typeof resultCallback === 'function') resultCallback(result)
      isInvoke = true
    } else {
      timer = setTimeout(() => {
        const result = fn.apply(this, arg)
        if (resultCallback && typeof resultCallback === 'function') resultCallback(result)
        isInvoke = false
        timer = null
      }, delay)
    }
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}