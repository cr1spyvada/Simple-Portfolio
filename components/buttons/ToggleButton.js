import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ToggleButton = ({ icon, onClick }) => {
  return (
    <button className="rounded-full bg-blue-100 p-2">
      <FontAwesomeIcon onClick={onClick} icon={icon} style={{ fontSize: '1.5rem' }} />
    </button>
  );
};

export default ToggleButton;
