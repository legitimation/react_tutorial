import { useState, useEffect, useCallback } from 'react';


// custom hook is using hook-like features made individually (not provided from react)
// can be used in ur own goods (can be altered)
// similar to making a seperate component of a func. that will be used multiple times throughout the project

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};
