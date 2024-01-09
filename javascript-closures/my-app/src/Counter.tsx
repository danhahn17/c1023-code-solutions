import { useEffect, useState, useCallback } from 'react';

export function Counter() {
  const getData = useCallback(() => {
    return { foo: 'bar' };
  }, []);

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    getData();
    setCounter((prev) => prev + 1);
  }, [getData]);

  return <div>Fetching {counter} times</div>;
}
