import { useState } from "react";
import DownArrowIcon from "../../assets/icons/downArrowIcon";

const BrewsListItem = (props) => {
  const [itemClicked, setItemClicked] = useState(false);
  const brew = props.brew;

  const handleClick = (e) => {
    setItemClicked(!itemClicked);
  };

  return (
    <li
      className="cursor-pointer hover:bg-gray-300 rounded-xl bg-white p-3 px-4 flex justify-between"
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <p className="font-bold">{brew.batchName}</p>
        {itemClicked && (
          <>
            {brew.brewDate && (
              <p>
                <span className="font-semibold">Brew Date: </span>
                {brew.brewDate}
              </p>
            )}
            {brew.batchSize && (
              <p>
                <span className="font-semibold">Batch Size: </span>
                {brew.batchSize}
              </p>
            )}
            {brew.startingGravity && (
              <p>
                <span className="font-semibold">Starting Gravity: </span>
                {brew.startingGravity}
              </p>
            )}
            {brew.targetGravity && (
              <p>
                <span className="font-semibold">Target Gravity: </span>
                {brew.targetGravity}
              </p>
            )}
            {brew.startingTemp && (
              <p>
                <span className="font-semibold">Starting Temperature: </span>
                {brew.startingTemp}&#8451;
              </p>
            )}
            {brew.fermentationTemp && (
              <p>
                <span className="font-semibold">
                  Fermentation Temperature:{" "}
                </span>
                {brew.fermentationTemp}&#8451;
              </p>
            )}
            {brew.yeastType && (
              <p>
                <span className="font-semibold">Yeast Type: </span>
                {brew.yeastType}
              </p>
            )}
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
        className={`h-6 w-6 ${itemClicked ? " rotate-180" : ""}`}
      />
    </li>
  );
};

export default BrewsListItem;
