import { createHttp } from '@/http/http'

const token = ''

const http = createHttp({
  baseURL: 'http://localhost:8089',
  apiPrefix: 'api/v1',
  bearerToken: token,
})

export default http
