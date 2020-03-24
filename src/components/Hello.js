import React, { useState, Fragment } from 'react';
import Loadable from 'react-loadable';

const LoadableHi = Loadable({
  loader: () => import('./Hi'),
  loading() {
    return <div>Loading...</div>;
  }
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
