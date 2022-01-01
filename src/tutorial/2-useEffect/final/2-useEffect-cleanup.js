import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      // window.removeEventListener('resize', checkSize);
    };
  });
  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
// if event listener is added on user effect, the listener will be added whenver it re-renders thus having multiple event listners creating data leak --> therefore, must make the useeffect render once or at a clean up function such as removing the added eventlistner to always maintain a single listener