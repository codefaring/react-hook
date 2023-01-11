import React, { useState } from 'react';
import ShowUp from './components/ShowUp';
import './App.css';
import useProducts from './hooks/useProducts';

export default function App() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ errorCheck: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p className='loading'>Loading.. please, wait!</p>;
  if (error) return <p className='loading'>{error}</p>;

  return (
    <div className='main'>
      <p style={{ width: '100%', textAlign: 'center' }}>
        <input
          id='checkbox'
          type='checkbox'
          value={checked}
          onChange={handleChange}
        />
        No data, Error
      </p>
      {products.map((product) => (
        <ShowUp
          image={product.img}
          isNew={product.isNew}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}
