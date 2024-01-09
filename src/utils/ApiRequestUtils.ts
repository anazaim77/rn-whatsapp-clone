import { AxiosClient } from "@/config/services";
import { AxiosRequestConfig } from "axios";

export async function get<T>(
  url: string,
  config?: AxiosRequestConfig<any> | undefined
): Promise<T | null> {
  return AxiosClient.get<T>(url, { ...config }).then((r) => r.data);
}

export async function post<T>(
  url: string,
  data: unknown,
  config?: AxiosRequestConfig<any> | undefined
): Promise<T | null> {
  return AxiosClient.post<T>(url, data, { ...config }).then((r) => r.data);
}
