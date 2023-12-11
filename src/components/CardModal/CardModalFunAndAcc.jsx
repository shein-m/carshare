import PropTypes from "prop-types";
import OptionTemplate from "../OptionTemplate/OptionTemplate";

const CardModalFunAndAcc = ({ accessories, functionalities }) => {
  const combineFunAndAcc = [...accessories, ...functionalities];

  return (
    <ul className="flex flex-wrap mb-auto">
      {combineFunAndAcc.map((el, index) => (
        <OptionTemplate key={index} text="" value={el} />
      ))}
    </ul>
  );
};

CardModalFunAndAcc.propTypes = {
  accessories: PropTypes.array,
  functionalities: PropTypes.array,
};

export default CardModalFunAndAcc;
