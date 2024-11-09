const KeggingSpecificFormFields = (props) => {
  return (
    <>
      <div className="mb-5">
        <label htmlFor="kegSize" className="block font-semibold">
          Keg Size (L):
        </label>
        <input
          type="number"
          id="kegSize"
          name="kegSize"
          value={props.formData.kegSize || ""}
          onChange={props.handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="co2Pressure" className="block font-semibold">
          CO₂ Pressure (PSI):
        </label>
        <input
          type="number"
          id="co2Pressure"
          name="co2Pressure"
          value={props.formData.co2Pressure || ""}
          onChange={props.handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="servingTemp" className="block font-semibold">
          Serving Temperature (°C):
        </label>
        <input
          type="number"
          id="servingTemp"
          name="servingTemp"
          value={props.formData.servingTemp || ""}
          onChange={props.handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>
    </>
  );
};

export default KeggingSpecificFormFields;
