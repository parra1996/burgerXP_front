import { AxiosRequestConfig } from 'axios';

export default interface Methods {
    method: string,
    url: string
    params: unknown
}

export default interface DataResponse {
    data: unknown,
    loading: boolean,
    error: unknown
}

export interface AxiosResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: AxiosRequestConfig<T>;
    request?: string;
}
