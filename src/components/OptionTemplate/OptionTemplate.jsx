import PropTypes from "prop-types";

const OptionTemplate = ({ text = "", value = "" }) => {
  return (
    <li className="flex items-center">
      <span className="text-neutral-900 text-opacity-50 text-xs leading-[18px]">
        {text && `${text}:`} {value}
      </span>
      <span className="border-l h-full mx-[6px]"></span>
    </li>
  );
};

OptionTemplate.propTypes = {
  text: PropTypes.string,
  value: PropTypes.any,
};

export default OptionTemplate;
