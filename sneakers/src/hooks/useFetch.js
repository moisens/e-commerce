import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setStatus("pending");
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Sorry unable to fetch data from ${url}`);
        const products = await res.json();
        setStatus("resolved");
        setDatas(products);
      } catch (error) {
        setError(error);
        setStatus("rejected");
      }
    };
    fetchProduct();
  }, [url]);

  return {
    datas,
    error,
    status,
  };
};

export default useFetch;
