import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

// # Even when value of title changes it does not auto render as rendering is not triggered  (therefore there needs to be a way to re render or keep in track of the varaible so that it automatically renders such as react state hooks)