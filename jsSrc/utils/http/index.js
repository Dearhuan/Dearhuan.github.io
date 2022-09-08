import { VAxios } from './axios'
const createAxios = (opt) => {
  return new VAxios(opt || {})
}
export const defHttp = createAxios()
