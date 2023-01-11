import { useEffect, useState } from 'react';

export default function useProducts({ errorCheck }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${errorCheck ? 'error_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data enter success');
        setProducts(data);
      })
      .catch((e) => setError('Error Occurred!'))
      .finally(() => setLoading(false));
  }, [errorCheck]);

  return [loading, error, products];
}
