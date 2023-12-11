import PropTypes from "prop-types";

const CardModalConditions = ({ rentalConditions, mileage, price }) => {
  const rentals = rentalConditions.split("\n");
  const [req1, req2, req3] = rentals;

  const [r1, age] = req1.split(":");

  const newMileage = `${
    mileage.toString().slice(0, 1) + "," + mileage.toString().slice(1)
  }`;

  const newPrice = `${price}`;

  return (
    <ul className="flex flex-wrap gap-[8px]">
      <li className="h-8 px-3.5 py-[7px] bg-stone-50 rounded-[35px] justify-center items-center gap-2 inline-flex">
        <span className="text-neutral-700 text-xs font-normal leading-[18px]">
          {r1}:
        </span>
        <span className="text-blue-500 text-xs font-semibold">{age}</span>
      </li>

      <li className="h-8 px-3.5 py-[7px] bg-stone-50 rounded-[35px] justify-center items-center gap-2 inline-flex">
        <span className="text-neutral-700 text-xs font-normal leading-[18px]">
          {req2}
        </span>
      </li>

      <li className="h-8 px-3.5 py-[7px] bg-stone-50 rounded-[35px] justify-center items-center gap-2 inline-flex">
        <span className="text-neutral-700 text-xs font-normal leading-[18px]">
          {req3}
        </span>
      </li>

      <li className="h-8 px-3.5 py-[7px] bg-stone-50 rounded-[35px] justify-center items-center gap-2 inline-flex">
        <span className="text-neutral-700 text-xs font-normal leading-[18px]">
          Mileage:
        </span>
        <span className="text-blue-500 text-xs font-semibold">
          {newMileage}
        </span>
      </li>

      <li className="h-8 px-3.5 py-[7px] bg-stone-50 rounded-[35px] justify-center items-center gap-2 inline-flex">
        <span className="text-neutral-700 text-xs font-normal leading-[18px]">
          Price:
        </span>
        <span className="text-blue-500 text-xs font-semibold">{newPrice}</span>
      </li>
    </ul>
  );
};

CardModalConditions.propTypes = {
  rentalConditions: PropTypes.string,
  mileage: PropTypes.number,
  price: PropTypes.string,
};

export default CardModalConditions;
