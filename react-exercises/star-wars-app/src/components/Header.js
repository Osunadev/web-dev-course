import React from 'react';
import './Header.css';

const Header = ({ optSelection }) => {
  return (
    <div className="cont-header">
      <ul className="cont-selection">
        {/* The only li that starts as a selection */}
        <li className="selection" onClick={optSelection}>
          People
        </li>
        <li onClick={optSelection}>Planets</li>
        <li onClick={optSelection}>Films</li>
        <li onClick={optSelection}>Species</li>
        <li onClick={optSelection}>Vehicles</li>
        <li onClick={optSelection}>Starships</li>
      </ul>
    </div>
  );
};

export default Header;
