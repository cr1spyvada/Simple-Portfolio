import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ToggleButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className="rounded-full bg-w6 dark:bg-w1 h-8 w-8">
      <FontAwesomeIcon icon={icon} className="dark:text-w2 text-w1 text-[1.25rem] md:text-[1rem]" />
    </button>
  );
};

export default ToggleButton;
