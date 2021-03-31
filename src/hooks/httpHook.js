//import React from 'react';

import axios from 'axios';
import { useCallback, useState } from 'react';

const useHttpClient = () => {
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrors, setIsErrors] = useState(false);
  const [dataResponse, setDataResponse] = useState(null);
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
  const sendReqestClient = useCallback(
    async (pathUrl = null, body = null, method = 'get') => {
      setIsLoading(true);
      setIsErrors(false);

      const configURL = (method === 'get') ? (
        {
          method: method,
          params: body,
        }
      ) : (
        {
          method: method,
          data: body,
        }
      );
      try {
        let httpClientData = await axios(
          process.env.REACT_APP_URL_HOST_SERVER + pathUrl,
          configURL,
          {
            cancelToken: source.token,
          }
        );

        setDataResponse(httpClientData.data);

      } catch (error) {
        setIsErrors(true);
        if (error.response && error.response.data) {
          setDataResponse(error.response.data);
        } else {
          setDataResponse(error);
        }
      }
      setIsLoading(false);
      return setDataResponse;
    },
    []
  );
  return {
    isLoading,
    isErrors,
    dataResponse,
    sendReqestClient,
    source,
  };
};

export default useHttpClient;
