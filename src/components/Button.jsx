import React from 'react';

function Button({ children, onClick, width = 'w-full' }) {
  const className = `btn ${width}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
