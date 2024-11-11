import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DownArrowIcon from "../../assets/icons/downArrowIcon";
import StarIcon from "../../assets/icons/starIcon";

const BottledBrewsListItem = (props) => {
  const [itemClicked, setItemClicked] = useState(false);
  const brew = props.brew;
  //const navigate = useNavigate();

  const handleClick = (e) => {
    setItemClicked(!itemClicked);
  };

  return (
    <div className="flex items-center gap-2 w-full mt-2">
      <li
        className="flex-grow cursor-pointer hover:bg-gray-300 rounded-xl bg-white p-3 px-4 flex justify-between"
        onClick={handleClick}
      >
        <div className="flex flex-col">
          <p className="font-bold">{brew?.initialBrewInfo?.batchName ? brew?.initialBrewInfo?.batchName : "Batch Name Undefined"}</p>

          {itemClicked && (
            <>
              {brew?.brewDate && (
                <p>
                  <span className="font-semibold">Brew Date: </span>
                  {brew?.brewDate}
                </p>
              )}
              {brew?.batchSize && (
                <p>
                  <span className="font-semibold">Batch Size: </span>
                  {brew?.batchSize}
                </p>
              )}
              {brew?.startingGravity && (
                <p>
                  <span className="font-semibold">Starting Gravity: </span>
                  {brew?.startingGravity}
                </p>
              )}
              {brew?.targetGravity && (
                <p>
                  <span className="font-semibold">Target Gravity: </span>
                  {brew?.targetGravity}
                </p>
              )}
              {brew?.startingTemp && (
                <p>
                  <span className="font-semibold">Starting Temperature: </span>
                  {brew?.startingTemp}&#8451;
                </p>
              )}
              {brew?.fermentationTemp && (
                <p>
                  <span className="font-semibold">
                    Fermentation Temperature:{" "}
                  </span>
                  {brew?.fermentationTemp}&#8451;
                </p>
              )}
              {brew?.yeastType && (
                <p>
                  <span className="font-semibold">Yeast Type: </span>
                  {brew?.yeastType}
                </p>
              )}
              {brew?.notes && (
                <p>
                  <span className="font-semibold">Notes: </span>
                  {brew?.notes}
                </p>
              )}
              {
                <p>
                  <span className="font-semibold">Bottling Type: </span>
                  {brew.bottlingType}
                </p>
              }

              {
                // If the brew is bottled
                brew?.bottlingType === "bottle" && (
                  <>
                    <p>
                      <span className="font-semibold">Number of Bottles: </span>
                      {brew?.numberOfBottles}
                    </p>
                    <p>
                      <span className="font-semibold">Bottle Size: </span>
                      {brew?.bottleSize}
                    </p>
                    <p>
                      <span className="font-semibold">
                        Priming Sugar in grams:{" "}
                      </span>
                      {brew?.primingSugar}
                    </p>
                  </>
                )
              }

              {
                // If the brew is kegged
                brew.bottlingType === "keg" && (
                  <>
                    <p>
                      <span className="font-semibold">Keg Size: </span>
                      {brew?.kegSize}
                    </p>
                    <p>
                      <span className="font-semibold">CO2 Pressure: </span>
                      {brew?.co2Pressure}
                    </p>
                    <p>
                      <span className="font-semibold">
                        Serving Temperature:{" "}
                      </span>
                      {brew?.servingTemp}
                    </p>
                  </>
                )
              }
              {brew.notes && (
                <p>
                  <span className="font-semibold">Notes: </span>
                  {brew.notes}
                </p>
              )}
            </>
          )}
        </div>

        <DownArrowIcon
          className={`h-6 w-6 ${itemClicked ? "rotate-180" : ""}`}
        />
      </li>
      <button
        className="p-3 bg-white rounded-lg flex-shrink-0 hover:bg-gray-300"
        onClick={() => {
          //brew.id && navigate(`/bottle/${brew?.id}`);
        }}
      >
        <StarIcon />
      </button>
    </div>
  );
};

export default BottledBrewsListItem;
