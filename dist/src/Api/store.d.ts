import { ApiResponse } from './ApiResponse';
declare const store: <T>(payload: T | Partial<T>, config: {
    apiPrefix: string;
    resource: string;
}) => Promise<ApiResponse<T>>;
export default store;
