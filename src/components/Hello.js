import React, { useState, Fragment } from 'react';
import loadable from '@loadable/component';

const LoadableHi = loadable(() => import('./Hi'), {
  fallback: <div>Loading...</div>
});

const Hello = () => {
  const [status, setStatus] = useState(false);

  const clickHandler = e => {
    setStatus(!status);
    e.preventDefault();
  };

  return (
    <div>
      <button onClick={clickHandler}>
        {status ? 'Click to Inactivate' : 'Click to Activate'}
      </button>
      {status ? <LoadableHi /> : null}
    </div>
  );
};

export default Hello;
