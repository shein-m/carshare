import PropTypes from "prop-types";
import formatAddress from "../../helpers/formatDate";
import CardOptions from "../CardOptions/CardOptions";

const Card = ({ data }) => {
  const {
    id,
    make,
    img = "./car.jpg",
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,
    functionalities,
  } = data;

  const { city = "", country = "" } = formatAddress(address);

  const handleClick = () => {};

  return (
    <li className="w-[274px] h-[426px] flex flex-col">
      <img
        src={img}
        alt={make}
        className="w-[274px] h-[268px] block rounded-[14px] mb-[14px]"
      />

      <div className="flex justify-between mb-[8px]">
        <div>
          <p className="text-neutral-900">
            {make}
            <span className="text-blue-500 "> {model}</span>, {year}
          </p>
        </div>
        <div className="text-neutral-900">{rentalPrice}</div>
      </div>

      <CardOptions
        city={city}
        country={country}
        rentalCompany={rentalCompany}
        type={type}
        make={make}
        id={id}
        accessories={accessories}
        functionalities={functionalities}
      />

      <button
        className="w-[274px] h-11 bg-blue-500 rounded-xl justify-center items-center inline-flex text-white text-sm font-semibold leading-tight "
        onClick={handleClick}
      >
        Learn more
      </button>
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    make: PropTypes.string,
    img: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    rentalPrice: PropTypes.string,
    address: PropTypes.string,
    rentalCompany: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.number,
    accessories: PropTypes.array,
    functionalities: PropTypes.array,
  }),
};

export default Card;
