import PropTypes from "prop-types";
import OptionTemplate from "../OptionTemplate/OptionTemplate";

const CardModalOptions = ({
  city,
  country,
  id,
  year,
  type,
  fuelConsumption,
  engineSize,
}) => {
  return (
    <ul className="flex flex-wrap mb-auto">
      <OptionTemplate text="" value={city} />
      <OptionTemplate text="" value={country} />
      <OptionTemplate text="Id" value={id} />
      <OptionTemplate text="Year" value={year} />
      <OptionTemplate text="Type" value={type} />
      <OptionTemplate text="Fuel Consumption" value={fuelConsumption} />
      <OptionTemplate text="Engine Size" value={engineSize} />
    </ul>
  );
};

CardModalOptions.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  id: PropTypes.number,
  year: PropTypes.number,
  type: PropTypes.string,
  fuelConsumption: PropTypes.string,
  engineSize: PropTypes.string,
};

export default CardModalOptions;
