import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { backendBaseUrl, defaultListRequestItemsLimit } from '@/shared/config';
import { toast } from 'react-toastify';

interface ListResponseData<Results extends any[]> {
  count: number;
  next: string;
  previous: string;
  results: Results;
}

interface TransformedListResponseData<Results extends any[]>
  extends ListResponseData<Results> {
  pagesCount: number;
}

class ApiInstance implements Pick<AxiosInstance, 'get'> {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: backendBaseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axios.interceptors.response.use(null, (error) => {
      toast.error('Something went wrong!');
      return Promise.reject(error);
    });
  }

  delete<T = never, R = AxiosResponse<T>, D = never>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axios.delete(url, config);
  }

  get<T = never, R = AxiosResponse<T>, D = never>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axios.get(url, config);
  }

  getList<
    T extends any[] = [],
    R = AxiosResponse<TransformedListResponseData<T>>,
    D = never,
  >(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.get(url, {
      ...config,
      transformResponse: [
        (data) => JSON.parse(data),
        (data: ListResponseData<T>): TransformedListResponseData<T> => ({
          ...data,
          pagesCount: Math.ceil((data?.count || 0) / defaultListRequestItemsLimit),
        }),
      ],
    });
  }

  patch<T = never, R = AxiosResponse<T>, D = never>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axios.patch(url, data, config);
  }

  post<T = never, R = AxiosResponse<T>, D = never>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axios.post(url, data, config);
  }

  put<T = never, R = AxiosResponse<T>, D = never>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axios.put(url, data, config);
  }
}

export const apiInstance = new ApiInstance();
