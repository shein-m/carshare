import PropTypes from "prop-types";
import formatAccessories from "../../helpers/formatAccessories";
const CardOptions = ({
  city,
  country,
  rentalCompany,
  type,
  make,
  id,
  accessories,
  functionalities,
}) => {
  const shortedAccess = formatAccessories(accessories, functionalities);

  return (
    <ul className="flex flex-wrap mb-auto">
      <li className="flex items-center">
        <span className="text-neutral-900 text-opacity-50 text-xs leading-[18px]">
          {city}
        </span>
        <span className="border-l h-full mx-[6px]"></span>
      </li>
      <li className="flex items-center">
        <span className="text-neutral-900 text-opacity-50 text-xs leading-[18px]">
          {country}
        </span>
        <span className="border-l h-full mx-[6px]"></span>
      </li>
      <li className="flex items-center">
        <span className="text-neutral-900 text-opacity-50 text-xs leading-[18px]">
          {rentalCompany}
        </span>
        <span className="border-l h-full mx-[6px]"></span>
      </li>
      <li className="flex items-center">
        <span className="text-neutral-900 text-opacity-50 text-xs leading-[18px]">
          {type}
        </span>
        <span className="border-l h-full mx-[6px]"></span>
      </li>
      <li className="flex items-center">
        <span className="text-neutral-900 text-opacity-50 text-xs leading-[18px]">
          {make}
        </span>
        <span className="border-l h-full mx-[6px]"></span>
      </li>
      <li className="flex items-center">
        <span className="text-neutral-900 text-opacity-50 text-xs leading-[18px]">
          {id}
        </span>
        <span className="border-l h-full mx-[6px]"></span>
      </li>
      <li className="flex items-center">
        <span className="text-neutral-900 text-opacity-50 text-xs leading-[18px]">
          {shortedAccess}
        </span>
      </li>
    </ul>
  );
};

CardOptions.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  rentalCompany: PropTypes.string,
  type: PropTypes.string,
  make: PropTypes.string,
  id: PropTypes.number,
  accessories: PropTypes.array,
  functionalities: PropTypes.array,
  isModal: PropTypes.bool,
};

export default CardOptions;
