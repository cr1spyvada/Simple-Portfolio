import React from 'react';

const ToggleButton = ({ Icon, onClick }) => {
  return (
    <button onClick={onClick} className="rounded-full bg-w6 dark:bg-w1 h-8 w-8">
      <Icon className="dark:text-w2 text-w1 text-[1.25rem] md:text-[1rem] m-auto" />
    </button>
  );
};

export default ToggleButton;
