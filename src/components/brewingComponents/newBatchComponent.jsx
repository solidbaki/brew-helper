import BrewingForm from "./newFermentation";

const NewBatchComponent = () => {
  return (
    <>
       <h1 className="mt-3 md:mt-4 text-3xl md:text-5xl text-center font-bold ">
        Brew a New Batch
      </h1>
      <BrewingForm />
    </>
  );
};

export default NewBatchComponent;
