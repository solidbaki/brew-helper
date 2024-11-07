import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BATCH_STEPS } from "../../constants";
import { v4 as uuidv4 } from "uuid";

const BrewingForm = () => {
  const today = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const uniqueId = uuidv4();  

  const [formData, setFormData] = useState({
    id: uniqueId,
    batchName: "",
    brewDate: today,
    startingGravity: "",
    targetGravity: "",
    startingTemp: "",
    fermentationTemp: "",
    yeastType: "",
    batchSize: "",
    notes: "",
    currentStep: BATCH_STEPS.FERMENT
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingBrews = JSON.parse(localStorage.getItem("brews")) || [];
    const updatedBrews = [...existingBrews, formData];
    localStorage.setItem("brews", JSON.stringify(updatedBrews));
    navigate("/brews");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-solid border-2 border-amber-800 p-5 m-5 bg-yellow-400 rounded-lg mx-auto mx-3 md:mx-6 lg:mx-32 xl:mx-64"
    >
      <div className="mb-5">
        <label htmlFor="batchName" className="block font-semibold">
          Batch Name:
        </label>
        <input
          className="block w-full rounded-md mt-1 md:mt-2 placeholder-amber-950 pl-3"
          type="text"
          id="batchName"
          name="batchName"
          value={formData.batchName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="brewDate" className="block font-semibold">
          Brew Date:
        </label>
        <input
          className="block w-full rounded-md mt-1 md:mt-2 placeholder-amber-950 pl-3"
          type="date"
          id="brewDate"
          name="brewDate"
          value={formData.brewDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-5 flex gap-4">
        <div className="flex-1">
          <label htmlFor="startingGravity" className="block font-semibold">
            Starting Gravity:
          </label>
          <input
            className="block w-full rounded-md mt-1 md:mt-2 placeholder-amber-950 pl-3"
            type="number"
            id="startingGravity"
            name="startingGravity"
            value={formData.startingGravity}
            onChange={handleChange}
            step="1.050"          />
        </div>
        <div className="flex-1">
          <label htmlFor="targetGravity" className="block font-semibold">
            Target Gravity:
          </label>
          <input
            className="block w-full rounded-md mt-1 md:mt-2 placeholder-amber-950 pl-3"
            type="number"
            id="targetGravity"
            name="targetGravity"
            value={formData.targetGravity}
            onChange={handleChange}
            step="1.001"          />
        </div>
      </div>

      <div className="mb-5 flex gap-4">
        <div className="flex-1">
          <label htmlFor="startingTemp" className="block font-semibold">
            Starting Temperature (°C):
          </label>
          <input
            className="block w-full rounded-md mt-1 md:mt-2 placeholder-amber-950 pl-3"
            type="number"
            id="startingTemp"
            name="startingTemp"
            value={formData.startingTemp}
            onChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="fermentationTemp" className="block font-semibold">
            Fermentation Temperature (°C):
          </label>
          <input
            className="block w-full rounded-md mt-1 md:mt-2 placeholder-amber-950 pl-3"
            type="number"
            id="fermentationTemp"
            name="fermentationTemp"
            value={formData.fermentationTemp}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-5 flex gap-4">
        <div className="flex-1">
          <label htmlFor="yeastType" className="block font-semibold">
            Yeast Type:
          </label>
          <input
            className="block w-full rounded-md mt-1 md:mt-2 placeholder-amber-950 pl-3"
            placeholder="Ale, Lager etc."
            type="text"
            id="yeastType"
            name="yeastType"
            value={formData.yeastType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="batchSize" className="block font-semibold">
            Batch Size (L):
          </label>
          <input
            className="block w-full rounded-md mt-1 md:mt-2 placeholder-amber-950 pl-3"
            type="number"
            id="batchSize"
            name="batchSize"
            value={formData.batchSize}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="notes" className="block font-semibold">
          Notes:
        </label>
        <textarea
          className="block w-full rounded-md mt-1 md:mt-2"
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-amber-900 hover:bg-amber-950 px-3 py-2 rounded-md text-white w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default BrewingForm;
