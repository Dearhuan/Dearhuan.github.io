# 文件下载代码片段

```ts
type TargetContext = '_self' | '_blank'
type Nullable<T> = T | null

const dataURLtoBlob = (base64Buf: string): Blob => {
  const arr = base64Buf.split(',')
  const typeItem = arr[0]
  const mime = typeItem.match(/:(.*?);/)![1]
  const bstr = window.atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

const urlToBase64 = (url: string, mineType?: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('CANVAS') as Nullable<HTMLCanvasElement>
    const ctx = canvas!.getContext('2d')

    const img = new Image()
    img.crossOrigin = ''
    img.onload = () => {
      if (!canvas || !ctx) {
        return reject()
      }
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const dataURL = canvas.toDataURL(mineType || 'image/png')
      canvas = null
      resolve(dataURL)
    }
    img.src = url
  })
}

const openWindow = (
  url: string,
  opt?: {
    target?: TargetContext | string,
    noopener?: boolean,
    noreferrer?: boolean
  }
) => {
  const {
    target = '_blank',
    noopener = true,
    noreferrer = true
  } = opt || {}
  const feature: string[] = []

  noopener && feature.push('noopener=yes')
  noreferrer && feature.push('noreferrer=yes')

  window.open(url, target, feature.join(','))
}

/**
* @func downloadByData
* @param {BlobPart} data
* @param {string} filename
* @param {string} mine
* @param {BlobPart} bom
* @returns {void}
* @desc Download according to the background interface file stream
*/
const downloadByData = (data: BlobPart, filename: string, mine?: string, bom?: BlobPart): void => {
  const blobData = typeof bom !== 'undefined' ? [bom, data] : [data]
  const blob = new Blob(blobData, { type: mine || 'application/octet-stream' })

  const blobURL = window.URL.createObjectURL(blob)
  const tempLink = document.createElement('a')
  tempLink.style.display = 'none'
  tempLink.href = blobURL
  tempLink.setAttribute('download', filename)
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank')
  }
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  window.URL.revokeObjectURL(blobURL)
}

/**
* @func downloadByBase64
* @param {string} buf
* @param {string} filename
* @param {string} mime
* @param {BlobPart} bom
* @returns {void}
* @desc Download pictures based on base64
*/
const downloadByBase64 = (buf: string, filename: string, mime?: string, bom?: BlobPart): void => {
  const base64Buf = dataURLtoBlob(buf)
  downloadByData(base64Buf, filename, mime, bom)
}

/**
* @func downloadByOnlineUrl
* @param {string} buf
* @param {string} filename
* @param {string} mime
* @param {BlobPart} bom
* @returns {Promise}
* @desc Download online pictures
*/
const downloadByOnlineUrl = async (url: string, filename: string, mime?: string, bom?: BlobPart): Promise<void> => {
  let base64 = await urlToBase64(url)
  downloadByBase64(base64, filename, mime, bom)
}

/**
* @func downloadByUrl
* @param {string} url
* @param {TargetContext | string} target
* @param {string} fileName
* @returns {boolean}
* @desc Download file according to file address
*/
const downloadByUrl = ({
  url,
  target,
  fileName,
}: {
  url: string;
  target: TargetContext | string;
  fileName: string;
}): boolean => {
  const userAgent = window.navigator.userAgent
  const isChrome = userAgent.indexOf('chrome') > -1
  const isSafari = userAgent.indexOf('safari') > -1

  if (/(iP)/g.test(window.navigator.userAgent)) {
    console.error('Your browser does not support download!')
    return false
  }
  if (isChrome || isSafari) {
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.target = target

    if (link.download !== undefined) {
      link.download = fileName || url.substring(url.lastIndexOf('/') + 1, url.length)
    }
    if (document.createEvent) {
      const e = document.createEvent('MouseEvents')
      e.initEvent('click', true, true)
      link.dispatchEvent(e)
      return true
    }
  }
  if (url.indexOf('?') === -1) {
    url += '?download'
  }
  openWindow(url, { target })
  return true
}
```