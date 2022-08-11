import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ToggleButton = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-slate-800 dark:bg-blue-100 h-8 w-8 md:h-12 md:w-12">
      <FontAwesomeIcon
        icon={icon}
        className="dark:text-black text-white text-[1.2rem] md:text-[1.5rem]"
      />
    </button>
  );
};

export default ToggleButton;
