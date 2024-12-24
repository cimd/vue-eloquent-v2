import { ApiResponse } from './ApiResponse';
declare const update: <T>(payload: T, config: {
    apiPrefix: string;
    resource: string;
}) => Promise<ApiResponse<T>>;
export default update;
