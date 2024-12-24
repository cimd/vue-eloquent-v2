import { ApiResponse } from './ApiResponse';
declare const show: <T>(id: number, config: {
    apiPrefix: string;
    resource: string;
}) => Promise<ApiResponse<T>>;
export default show;
