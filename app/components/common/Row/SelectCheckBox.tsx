import React from 'react';

const SelectCheckbox= () => {
  return (
    <div id="selectBtn">
      <input
        id="select"
        type="checkbox"
        className="size-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
      />
      <label htmlFor="select" hidden>
        Select Group
      </label>
    </div>
  );
};

export default SelectCheckbox;