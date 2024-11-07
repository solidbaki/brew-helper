import PropTypes from "prop-types";

const FeatureCard = ({ props }) => {
  return (
    <div className="w-full p-6 mb-3 bg-amber-600 border border-amber-950 border-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>

      <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
        {props.description}
      </p>

    </div>
  );
};

// eslint-disable-next-line react/no-typos
FeatureCard.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  svg: PropTypes.node,
};

export default FeatureCard;
