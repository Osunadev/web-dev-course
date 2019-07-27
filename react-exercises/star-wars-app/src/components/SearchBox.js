import React from 'react';

const SearchBox = ({ option, searchChange }) => {
  return (
    <div className="tc mt4 mb2">
      <input
        type="search"
        placeholder={`Search for ${option}...`}
        className="pa3 pr4 br-pill bw0 mr3"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
