import PropTypes from "prop-types";
import formatAddress from "../../helpers/formatDate";
import CardOptions from "../CardOptions/CardOptions";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { favoritesSlice } from "../../redux/favorites/favorites-slice";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

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

  const handleFavorite = () => {
    dispatch(addToFavorites(data));
  };

  return (
    <li className="w-[274px] h-[426px] flex flex-col">
      <div className="relative">
        <FaRegHeart
          onClick={handleFavorite}
          width="18"
          height="18"
          className="absolute right-[14px] top-[14px] cursor-pointer"
          fill="#000000"
        />

        <img
          src={img}
          alt={make}
          className="w-[274px] h-[268px] block rounded-[14px] mb-[14px]"
        />
      </div>

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
