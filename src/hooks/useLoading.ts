import { useState } from "react";

const useLoading = <T extends Array<any>, R>(
  request: (...params: T) => Promise<R>
) => {
  const [loading, setLoading] = useState(false);

  const callable = (...params: T) => {
    setLoading(true);
    return request(...params).finally(() => setLoading(false));
  };

  return [callable, loading] as [(...params: T) => Promise<R>, boolean];
};

export default useLoading;
