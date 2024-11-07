import { BATCH_STEPS } from "../../constants";
import BrewsListItem from "./brewsListItem";


const BrewsList = () => {
    const brews = JSON.parse(localStorage.getItem("brews")) || [];
    console.log(brews)

    if(brews.length === 0) {
        return <p className="text-center text-2xl">No Brews Yet</p>
    }

    return ( 
        <ul>
            {
                brews.map((brew, index) => {
                    if (brew.currentStep === BATCH_STEPS.FERMENT) {
                        return <BrewsListItem brew={brew} key={"brewNumber" + (index + 1)} />;
                    }
                    return null; 
                })
            }
        </ul>
    );
}

export default BrewsList;
