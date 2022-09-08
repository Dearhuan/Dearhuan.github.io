import { VAxios } from './axios'
import type { CreateAxiosOptions } from './axiosTransform'

const createAxios = (opt?: Partial<CreateAxiosOptions>) => {
  return new VAxios(opt || {})
}

export const defHttp = createAxios()
