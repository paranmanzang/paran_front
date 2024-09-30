import React, { useState } from 'react';

interface HeartCheckboxProps {
  onChange?: (isChecked: boolean) => void;
}

const HeartCheckbox = ({ onChange }: HeartCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <div className="heart-checkbox">
      <input
        type="checkbox"
        id="heart-checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="sr-only" // 화면에서 숨기지만 접근성은 유지
      />
      <label 
        htmlFor="heart-checkbox" 
        className="cursor-pointer"
      >
        {!isChecked? 
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        : 
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="red" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        }
        
      </label>
    </div>
  );
};

export default HeartCheckbox;