import { useState, useEffect } from "react";
import BottlingSpecificFormFields from "./bottlingSpecificFormFields";
import KeggingSpecificFormFields from "./keggingSpecificFormFields";
import { useNavigate, useParams } from "react-router-dom";
import { BATCH_STEPS } from "../../constants";

const BottlingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    finalGravity: "",
    bottlingType: "bottle",
    notes: "",
    bottlingDate: new Date().toISOString().split("T")[0],
    id,
    currentStep: BATCH_STEPS.BOTTLE,
    initialBrewInfo: {},
  });

  useEffect(() => {
    // Load the initial brew data when the component mounts
    const currentBrewData = JSON.parse(localStorage.getItem("brews")) || [];
    const currentBrew = currentBrewData.find((brew) => brew.id === id);

    if (currentBrew) {
      setFormData((prevData) => ({
        ...prevData,
        initialBrewInfo: currentBrew,
      }));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data with initial brew info for saving
    const updatedFormData = { ...formData, initialBrewInfo: formData.initialBrewInfo };

    // Add info to the "bottledBrews" list
    const currentBottledBrews = JSON.parse(localStorage.getItem("bottledBrews") || "[]");
    const updatedBottledBrews = [...currentBottledBrews, updatedFormData];
    localStorage.setItem("bottledBrews", JSON.stringify(updatedBottledBrews));

    // Delete from "brews" to prevent duplication
    const currentBrews = JSON.parse(localStorage.getItem("brews") || "[]");
    const updatedBrews = currentBrews.filter((brew) => brew.id !== id);
    localStorage.setItem("brews", JSON.stringify(updatedBrews));

    // Navigate to brews page
    navigate("/brews");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

      {formData.bottlingType === "bottle" && (
        <BottlingSpecificFormFields
          handleChange={handleChange}
          formData={formData}
        />
      )}

      {formData.bottlingType === "keg" && (
        <KeggingSpecificFormFields
          handleChange={handleChange}
          formData={formData}
        />
      )}

      <div className="mb-5">
        <label htmlFor="notes" className="block font-semibold">
          Notes:
        </label>
        <textarea
          type="text"
          id="notes"
          name="notes"
          value={formData.notes}
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
