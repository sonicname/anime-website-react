import { memo } from 'react';

const Button = ({ className = '', onClick = () => {}, children }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-green-400 rounded-lg p-2 font-semibold hover:opacity-75 ${className}`}
    >
      {children}
    </button>
  );
};

export default memo(Button);
