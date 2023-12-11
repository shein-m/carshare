import CustomDropdownInput from "../CustomInput/CustomDropdown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterCarsSelector } from "../../redux/cars/cars-selectors";
import { carSlice } from "../../redux/cars/cars-slice";

const Filter = () => {
  const dispatch = useDispatch();
  const filterCars = useSelector(getFilterCarsSelector);
  const [brand, setBrand] = useState(null);

  const make = filterCars && filterCars.map((el) => el.make);

  const filteredMake = make.filter((el, index) => {
    return make.indexOf(el) === index;
  });

  const handleSelect = (data) => {
    setBrand(data);
    return;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const filteredCars = filterCars.filter((el) => el.make === brand);
    dispatch(carSlice.actions.showFilteredData(filteredCars));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-[50px]">
        <div
          className="relative flex flex-row gap-[18px] justify-center"
          data-te-input-wrapper-init
          id="displayValue"
        >
          <div className="w-[224px]">
            <label
              htmlFor="brand"
              className="mb-[8px] block text-[#8A8A89] text-sm font-medium"
            >
              Car brand
            </label>
            <CustomDropdownInput
              labelName={"brand"}
              place={"Enter the text"}
              data={filteredMake}
              name={"brand"}
              handleSelect={handleSelect}
            />
          </div>
          <div className="mt-auto">
            <button
              type="submit"
              className={`px-[44px] py-[14px] bg-blue hover:bg-blueActive focus:bg-blueActive rounded-[12px] text-white ${
                !brand ? "button-disable" : ""
              }`}
              disabled={!brand ? true : false}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filter;
