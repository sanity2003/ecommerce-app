
import React from 'react';

const Login = ({ label = "Login", onClick, type = "button" }) => {
  
  return (
    <button
      type={type}
      className=' hover:text-lg '
      onClick={onClick}
    >
      {label} <span style={{marginLeft: '2px'}}></span>
    </button>
  );
};

export default Login;

