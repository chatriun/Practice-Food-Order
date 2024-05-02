import { useCallback, useEffect, useState } from "react";

const sentHttp = async (url, option) => {
  const response = await fetch(url, option);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(response.message || "something went wrong :(");
  }

  return resData;
};

const useHttp = (url, option, init) => {
  const [data, setData] = useState(init);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const clearData = () => {
    setData(init);
  };
  const fetchData = useCallback(
    async (data) => {
      setIsLoading(true);
      try {
        const resData = await sentHttp(url, { ...option, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "fail");
      }
      setIsLoading(false);
    },
    [url, option]
  );

  useEffect(() => {
    if ((option && (option.method === "GET" || !option.method)) || !option) {
      fetchData();
    }
  }, [fetchData, option]);

  return {
    data,
    isLoading,
    error,
    fetchData,
    clearData,
  };
};

export default useHttp;
