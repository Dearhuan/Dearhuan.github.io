export const MIN_YEAR = 1900
export const MAX_YEAR = 9999

export const monthNameList = {
  chineseFullName: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  fullName: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  mmm: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
}

export const dayNameList = [
  {
    chineseFullName: "周日",
    chineseShortName: "日",
    fullName: "Sunday",
    shortName: "Sun",
    dayNumber: 0,
  },
  {
    chineseFullName: "周一",
    chineseShortName: "一",
    fullName: "Monday",
    shortName: "Mon",
    dayNumber: 1,
  },
  {
    chineseFullName: "周二",
    chineseShortName: "二",
    fullName: "Tuesday",
    shortName: "Tue",
    dayNumber: 2,
  },
  {
    chineseFullName: "周三",
    chineseShortName: "三",
    fullName: "Wednesday",
    shortName: "Wed",
    dayNumber: 3,
  },
  {
    chineseFullName: "周四",
    chineseShortName: "四",
    fullName: "Thursday",
    shortName: "Thu",
    dayNumber: 4,
  },
  {
    chineseFullName: "周五",
    chineseShortName: "五",
    fullName: "Friday",
    shortName: "Fri",
    dayNumber: 5,
  },
  {
    chineseFullName: "周六",
    chineseShortName: "六",
    fullName: "Saturday",
    shortName: "Sat",
    dayNumber: 6,
  },
]

export const requestAnimationFrame = typeof window !== 'undefined' ?
  window.requestAnimationFrame : () => {}

export const cancelAnimationFrame = typeof window !== 'undefined' ? 
  window.cancelAnimationFrame : () => {}

export function rafTimeout (fn, delay = 0, interval = false) {
  const requestAnimationFrame = window.requestAnimationFrame
  var start = null
  function timeElapse (timestamp) {
    if (!start) {
      start = timestamp
    }
    const elapsed = timestamp - start
    if (elapsed >= delay) {
      fn()
      if (interval) {
        start = null
        raf.id = requestAnimationFrame(timeElapse)
      }
    } else {
      raf.id = requestAnimationFrame(timeElapse)
    }
  }
  const raf = {
    id: requestAnimationFrame(timeElapse)
  }
}

export function cancelRaf (raf) {
  if (raf && raf.id) {
    cancelAnimationFrame(raf.id)
  }
}