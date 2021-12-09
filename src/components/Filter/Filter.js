import React from "react";

const Filter = ({ filter }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" onChange={filter} />
      </label>
    </>
  );
};

export default Filter;
