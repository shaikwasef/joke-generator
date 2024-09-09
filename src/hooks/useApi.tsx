import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

const useApi = <T,>(options: AxiosRequestConfig): { data: T | null; isLoading: boolean; error: AxiosError | null } => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    apiCall()
      .then((res) => setData(res as T))
      .catch((e) => setError(e as AxiosError))
      .finally(() => setIsLoading(false));
  }, []);

  const apiCall = async (): Promise<T | AxiosError> => {
    setIsLoading(true);
    try {
      const { data } = await axios(options);
      return data;
    } catch (e) {
      return e as AxiosError;
    }
  };

  return { data, isLoading, error };
};

export default useApi;
