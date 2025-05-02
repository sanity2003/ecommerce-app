import React from 'react';

const SignUp = ({ label = "SignUp", onClick, type = "button" }) => {
  
  return (
    <button
      type={type}
      className=' hover:text-lg '
      onClick={onClick}
    >
      {label} <span style={{marginLeft: '2px',marginRight:'4px'}}>|</span>
    </button>
  );
};

export default SignUp;

