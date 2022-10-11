import React from 'react';
import Style from './style';

function Login() {
  const classes = Style();

  return (
    <div>
        <h1 className={classes.h1}>Login</h1>
    </div>
  );
}

export default Login;