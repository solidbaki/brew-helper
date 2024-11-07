import BeerGlassLowIcon from "../../assets/icons/beerGlassLowIcon";
import DownArrowIcon from "../../assets/icons/downArrowIcon";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-semibold text-center mt-7">
        Empty Glass, Empty Page!
      </h1>
      <div className="flex flex-col-reverse mt-7 items-center mx-auto gap-4 px-3">
        <BeerGlassLowIcon className="h-36 w-36 md:h-64 md:w-64" />
        <p className="font-semibold text-xl md:text-4xl">
          This page is as empty as this glass! Let's head back and find something worth pouring.
        </p>
      </div>
      <div className="flex gap-3 mt-8 justify-center">
        <button onClick={handleClick} className="flex items-center gap-3 text-lg md:text-4xl font-semibold">
          <DownArrowIcon className="cursor-pointer stroke-2 rotate-90 md:h-24 md:w-24" />
          <p className="cursor-pointer">Go Back</p>
        </button>
      </div>
    </>
  );
};

export default NotFound;
