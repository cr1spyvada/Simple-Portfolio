import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ToggleButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className="rounded-full bg-w6 dark:bg-w1 h-8 w-8 md:h-12 md:w-12">
      <FontAwesomeIcon
        icon={icon}
        className="dark:text-w6 text-w1 text-[1.2rem] md:text-[1.5rem]"
      />
    </button>
  );
};

export default ToggleButton;
