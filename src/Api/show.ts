import type { ApiResponse } from '@/Api/ApiResponse'
import _join from 'lodash/join'
import { http } from '@/http/http'

const show = <T>(
  id: number,
  config: { apiPrefix: string, resource: string },
): Promise<ApiResponse<T>> => {
  const url = _join([config.apiPrefix, config.resource, id], '/')
  return new Promise((resolve, reject) => {
    http
      .get(url)
      .then((response: { data: any }) => {
        resolve(response.data)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export default show
