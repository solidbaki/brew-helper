import { BATCH_STEPS } from "../../constants";
import BottledBrewsListItem from "./bottledBrewsListItem";
import BrewsListItem from "./brewsListItem";

const BrewsList = () => {
  const fermentingBrews = JSON.parse(localStorage.getItem("brews")) || [];
  const bottledBrews = JSON.parse(localStorage.getItem("bottledBrews")) || [];

  if (fermentingBrews.length + bottledBrews.length === 0) {
    return <p className="text-center text-2xl">No Brews Yet</p>;
  }

  return (
    <ul>
      {fermentingBrews.map((brew, index) => {
        if (brew.currentStep === BATCH_STEPS.FERMENT) {
          return <BrewsListItem brew={brew} key={"brewNumber" + (index + 1)} />;
        }
        return null;
      })}
      {
        bottledBrews.map((brew, index) => {
          if (brew.currentStep === BATCH_STEPS.BOTTLE) {
            return <BottledBrewsListItem brew={brew} key={"bottledBrewNumber" + (index + 1)} />;
          }
          return null;
        })
      }
      
    </ul>
  );
};

export default BrewsList;
