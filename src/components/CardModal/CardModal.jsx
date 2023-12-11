import { createPortal } from "react-dom";
import formatAddress from "../../helpers/formatDate";
import CardModalOptions from "./CardModalOptions";
import CardModalFunAndAcc from "./CardModalFunAndAcc";
import CardModalConditions from "./CardModalConditions";
import { RxCross2 } from "react-icons/rx";
import { useEffect } from "react";

const CardModal = ({ data, handleModal }) => {
  const {
    accessories,
    address,
    description,
    engineSize,
    fuelConsumption,
    functionalities,
    id,
    img,
    make,
    mileage,
    model,
    rentalConditions,
    rentalPrice,
    type,
    year,
  } = data;

  const { city = "", country = "" } = formatAddress(address);

  const handleEscape = (event) => {
    if (event.code === "Escape") {
      handleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });

  const closeModal = (e) => {
    if (e.currentTarget === e.target) {
      handleModal();
      return;
    }
  };

  return createPortal(
    <div
      id="backdrop"
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-neutral-900 bg-opacity-50 z-50 cursor-pointer"
      onClick={closeModal}
    >
      <div className="w-[541px] p-[40px] relative bg-white overflow-hidden rounded-[24px]">
        <RxCross2
          size={24}
          className="absolute right-[16px] top-[16px] cursor-pointer"
          onClick={handleModal}
        />
        <div className=" w-[100%]">
          <img
            className="block h-[248px] w-[100%] rounded-[14px] mb-[14px]"
            alt={make}
            src={img}
          />
        </div>

        <div className="mb-[8px]">
          <p className="text-text">
            {make}
            <span className="text-blue"> {model}</span>, {year}
          </p>
        </div>

        <div className="mb-[24px]">
          <div className="mb-[14px]">
            <CardModalOptions
              city={city}
              country={country}
              id={id}
              year={year}
              type={type}
              engineSize={engineSize}
              fuelConsumption={fuelConsumption}
            />
          </div>

          <p className=" text-text text-sm font-normal">{description}</p>
        </div>

        <div className="mb-[24px]">
          <h2 className="text-text text-sm font-medium mb-[8px]">
            Accessories and functionalities:
          </h2>
          <div>
            <CardModalFunAndAcc
              accessories={accessories}
              functionalities={functionalities}
            />
          </div>
        </div>

        <div className="mb-[24px]">
          <h2 className="text-neutral-900 text-sm font-medium mb-[8px]">
            Rental Conditions:
          </h2>
          <div>
            <CardModalConditions
              rentalConditions={rentalConditions}
              mileage={mileage}
              price={rentalPrice}
            />
          </div>
        </div>

        <div className="px-[50px] py-3 bg-blue rounded-xl justify-center items-center inline-flex">
          <button className="text-white text-sm font-semibold leading-tight">
            Rental car
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-modal")
  );
};

export default CardModal;
