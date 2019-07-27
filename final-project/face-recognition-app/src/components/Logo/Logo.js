import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from '../../brain.png';

const Logo = () => {
  return (
    <div className="ma4 mt0 flex justify-center">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 180, width: 180 }}
      >
        <div className="Tilt-inner pa4">
          <img
            alt="logo"
            src={brain}
            style={{ paddingBottom: '20px', width: '100%' }}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
