import PropTypes from "prop-types";
import formatAddress from "../../helpers/formatDate";
import CardOptions from "../CardOptions/CardOptions";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../../redux/favorites/favorites-slice";
import { getFavorites } from "../../redux/favorites/favorites-selector";
import CardModal from "../CardModal/CardModal";
import { useState } from "react";

const Card = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
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

  const handleRemoveFavorite = () => {
    dispatch(removeFromFavorites(id));
  };

  const handleFavorite = () => {
    dispatch(addToFavorites(data));
  };

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const favorites = useSelector(getFavorites);

  const isFavorite = favorites.find((el) => el.id === id);

  return (
    <li className="w-[274px] h-[426px] flex flex-col">
      <div className="relative">
        {isFavorite ? (
          <FaHeart
            onClick={handleRemoveFavorite}
            width="18"
            height="18"
            className="absolute right-[14px] top-[14px] cursor-pointer"
            fill="#000000"
          />
        ) : (
          <FaRegHeart
            onClick={handleFavorite}
            width="18"
            height="18"
            className="absolute right-[14px] top-[14px] cursor-pointer"
            fill="#000000"
          />
        )}

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
        isModal={false}
      />

      <button
        className="w-[274px] h-11 bg-blue-500 rounded-xl justify-center items-center inline-flex text-white text-sm font-semibold leading-tight "
        onClick={handleModal}
      >
        Learn more
      </button>

      {isOpenModal && <CardModal data={data} handleModal={handleModal} />}
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
