import { useState } from "react";

const BottlingForm = () => {
  const [formData, setFormData] = useState({
    finalGravity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("asd");
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
          className="block w-full rounded-md mt-1 md:mt-2 placeholder-amber-950 pl-3"
          type="number"
          id="finalGravity"
          name="finalGravity"
          value={formData.finalGravity}
          onChange={handleChange}
          step="1.050"
        />
      </div>
    </form>
  );
};

export default BottlingForm;
