const BottlingSpecificFormFields = (props) => {
  return (
    <>
      <div className="mb-5">
        <label htmlFor="numberOfBottles" className="block font-semibold">
          Number of Bottles:
        </label>
        <input
          type="number"
          id="numberOfBottles"
          name="numberOfBottles"
          value={props.formData.numberOfBottles || ""}
          onChange={props.handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="bottleSize" className="block font-semibold">
          Bottle Size (ml):
        </label>
        <input
          type="number"
          id="bottleSize"
          name="bottleSize"
          value={props.formData.bottleSize || ""}
          onChange={props.handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="primingSugar" className="block font-semibold">
          Priming Sugar (g):
        </label>
        <input
          type="number"
          id="primingSugar"
          name="primingSugar"
          value={props.formData.primingSugar || ""}
          onChange={props.handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>
    </>
  );
};

export default BottlingSpecificFormFields;
