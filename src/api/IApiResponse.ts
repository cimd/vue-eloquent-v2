export interface ApiResponse<T> {
  data: T
  count?: number
  message?: string | string[]
}
