import React, { useState, Fragment } from 'react';

const Hi = () => {
  return (
    <Fragment>
      <h2>Hi Activated!</h2>
    </Fragment>
  );
};

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
      {status ? <Hi /> : null}
    </div>
  );
};

export default Hello;
