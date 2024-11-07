import FeatureCard from "./featureCard";

const KeyFeatures = (props) => {
  return (
    <div>
      <h4 className="text-3xl md:text-4xl text-center mb-5">Key Features</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 align-center mx-4">
        {props.keyFeatures &&
          props.keyFeatures.map((feature, index) => (
            <FeatureCard key={index} props={feature} id={index} />
          ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
