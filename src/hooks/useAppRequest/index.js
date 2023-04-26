import useSWR from 'swr';
import client from '~/api/client';

const useAppRequest = (request, config) => {
  const {
    error,
    mutate,
    data: response,
    isValidating,
  } = useSWR(JSON.stringify(request), () => client(request), {
    ...config,
  });

  return {
    error,
    mutate,
    response,
    isValidating,
    data: response && response.data,
  };
};

export default useAppRequest;
