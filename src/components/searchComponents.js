import React from 'react';

function Search(props) {
  return (
    <div>
      <input
        onChange={props.filterCallback}
        placeholder="Search by name..."
        className="search-input"
      />
    </div>
  );
}
// btnInput.addEventListener('click', () => { });
export default Search;
