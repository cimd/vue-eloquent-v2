import { IApiResponse } from '@/api/IApiResponse'
import { apiPrefix, http } from '../http/http'
import _join from 'lodash/join'
import ApiError from '../api/ApiError'
import ApiQuery from '../api/ApiQuery'
import { IAxiosError } from '@/api/IAxiosError'
import Model from '@/model/Model'

export interface ApiConfig {
  serialize: boolean
  model: Model
}

export default abstract class Api extends ApiQuery {

  protected resource()
  {
    return ''
  }

  protected apiPrefix()
  {
    return apiPrefix
  }

  protected model()
  {
    return Model
  }

  static config(params: ApiConfig): this
  {
    const self = new this()
    return self.config(params)
  }

  config(params?: ApiConfig): ApiConfig
  {
    return params ? params : {
      serialize: true,
      model: this.model()
    }
  }

  static async get<T>(payload?: Partial<T>): Promise<IApiResponse<T[]>>
  {
    const self = new this()
    return await self.get(payload)
  }

  get<T>(): Promise<IApiResponse<T[]>>
  {
    const url = _join([this.apiPrefix(), this.resource()], '/')

    const queryString = this.queryString()
    this.fetching(queryString)

    return new Promise((resolve, reject) => {
      http
        .get(url, {
          params: queryString,
          transformResponse: [(data: any) => this.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          this.fetched(response.data)
          resolve(response.data)
        })
        .catch((err: IAxiosError) => {
          this.fetchingError(err)
          reject(new ApiError('Get', err))
        })
    })
  }

  protected transformResponse(response: string): any
  {
    const resp = JSON.parse(response)
    // resp.data = formatObject(resp.data, this.dates)

    return resp
  }





  /**
   * Fetching runs before get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetching(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingError(err?: any): void { return }
  /**
   * Fetched runs after get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetched(payload?: any): void { return }

  /**
   * Retrieving runs before show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieving(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrievingError(err?: any): void { return }
  /**
   * Retrieved runs after show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieved(payload?: any): void { return }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected storing(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected storingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected stored(payload?: any): void { return }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updating(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updatingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updated(payload?: any): void { return }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroying(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroyingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroyed(payload?: any): void { return }
}
