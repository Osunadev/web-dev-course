import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ inputChange, buttonSubmit }) => {
  return (
    <div>
      <p className="f3 black">
        This Magic Brain will detect faces in your pictures. Give it a try.
      </p>
      <div className="container-form">
        <div className="pa4 br3 shadow-2 form">
          <input
            type="text"
            className="f4 pa2 w-70 bn"
            onChange={inputChange}
          />
          <button
            className="w-30 grow f4 link br2 ph3 pv2 white bg-blue bn"
            onClick={buttonSubmit}
          >
            <strong>Detect</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
