import type { ApiResponse } from '@/Api/ApiResponse'
import _join from 'lodash/join'
import { http } from '@/http/http'

const store = <T>(
  payload: T | Partial<T>,
  config: { apiPrefix: string, resource: string },
): Promise<ApiResponse<T>> => {
  const url = _join([config.apiPrefix, config.resource], '/')
  return new Promise((resolve, reject) => {
    http
      .post(url, payload)
      .then((response: { data: any }) => {
        resolve(response.data)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export default store