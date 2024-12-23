import { createHttp } from '@/http/http'

const createExampleHttp = () => {
  const token = '34801|K73S4xxkD4iQuvDxlnBnk8kAp3zJ7hKISgaFTkQG698d4787'

  createHttp({
    baseURL: 'http://localhost:8089',
    apiPrefix: 'api/v1',
    bearerToken: token,
  })
}

export default createExampleHttp
