import { useState } from "react";

const BottlingForm = () => {
  const [formData, setFormData] = useState({
    finalGravity: "",
    bottlingType: "bottle",
    bottlingNotes: "",
    bottlingDate: new Date().toISOString().split("T")[0],
    // Add more fields as needed for each type
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderBottlingFields = () => (
    <>
      <div className="mb-5">
        <label htmlFor="numberOfBottles" className="block font-semibold">
          Number of Bottles:
        </label>
        <input
          type="number"
          id="numberOfBottles"
          name="numberOfBottles"
          value={formData.numberOfBottles || ""}
          onChange={handleChange}
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
          value={formData.bottleSize || ""}
          onChange={handleChange}
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
          value={formData.primingSugar || ""}
          onChange={handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>
    </>
  );

  const renderKeggingFields = () => (
    <>
      <div className="mb-5">
        <label htmlFor="kegSize" className="block font-semibold">
          Keg Size (L):
        </label>
        <input
          type="number"
          id="kegSize"
          name="kegSize"
          value={formData.kegSize || ""}
          onChange={handleChange}
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
          value={formData.co2Pressure || ""}
          onChange={handleChange}
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
          value={formData.servingTemp || ""}
          onChange={handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>
    </>
  );

  return (
    <form
      className="border-solid border-2 border-amber-800 p-5 m-5 bg-yellow-400 rounded-lg mx-auto md:mx-6 lg:mx-32 xl:mx-64"
      onSubmit={handleSubmit}
    >
      <div className="mb-5">
        <label htmlFor="finalGravity" className="block font-semibold">
          Final Gravity:
        </label>
        <input
          type="number"
          id="finalGravity"
          name="finalGravity"
          value={formData.finalGravity}
          onChange={handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="bottlingDate" className="block font-semibold">
          Bottling Date:
        </label>
        <input
          type="date"
          id="bottlingDate"
          name="bottlingDate"
          value={formData.bottlingDate}
          onChange={handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>

      <div className="mb-5">
        <p className="font-semibold">Bottling Type:</p>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              name="bottlingType"
              value="bottle"
              checked={formData.bottlingType === "bottle"}
              onChange={handleChange}
              className="mr-1"
            />
            Bottle
          </label>
          <label>
            <input
              type="radio"
              name="bottlingType"
              value="keg"
              checked={formData.bottlingType === "keg"}
              onChange={handleChange}
              className="mr-1"
            />
            Keg
          </label>
        </div>
      </div>

      {formData.bottlingType === "bottle" ? renderBottlingFields() : renderKeggingFields()}

      <div className="mb-5">
        <label htmlFor="bottlingNotes" className="block font-semibold">
          Bottling Notes:
        </label>
        <textarea
          type="text"
          id="bottlingNotes"
          name="bottlingNotes"
          value={formData.bottlingNotes}
          onChange={handleChange}
          className="block w-full rounded-md mt-1 placeholder-amber-950 pl-3"
        />
      </div>

      <button
        type="submit"
        className="bg-amber-800 text-white px-4 py-2 rounded-md font-semibold mt-5 w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default BottlingForm;
