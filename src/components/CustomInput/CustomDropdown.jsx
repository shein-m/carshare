import { useState } from "react";
import PropTypes from "prop-types";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const CustomDropdownInput = ({
  labelName,
  place,
  name,
  data,
  handleSelect,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputClick = (e) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setShowDropdown(false);

    if (handleSelect) {
      handleSelect(option);
    }
  };

  const handleOutsideClick = () => {
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <div className="relative flex items-center">
        <input
          id={labelName}
          type="text"
          name={name}
          value={inputValue}
          onClick={handleInputClick}
          onChange={handleInputChange}
          placeholder={place}
          className="w-[100%] border border-gray-300 rounded-[14px] py-[14px] px-[18px] pr-[35px] focus:outline-none focus:border-blue-500 bg-[#F7F7FB] placeholder:text-text"
        />
        <div className="absolute right-[18px]">
          {showDropdown ? (
            <IoIosArrowUp size={20} />
          ) : (
            <IoIosArrowDown size={20} />
          )}
        </div>
      </div>

      {showDropdown && (
        <div className="absolute w-[100%] h-[200px] overflow-auto z-10 top-full left-0 mt-2 bg-gray-50 border border-gray-300 rounded">
          {data
            .filter((option) =>
              option.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((option) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </div>
            ))}
        </div>
      )}

      {showDropdown && (
        <div
          className="fixed inset-0 bg-transparent"
          onClick={handleOutsideClick}
        />
      )}
    </div>
  );
};

CustomDropdownInput.propTypes = {
  labelName: PropTypes.string,
  name: PropTypes.string,
  place: PropTypes.string,
  data: PropTypes.array,
  handleSelect: PropTypes.any,
};

export default CustomDropdownInput;
