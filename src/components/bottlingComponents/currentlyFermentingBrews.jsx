import HeaderAndDescription from "../mainComponents/headerAndDescription";
import BrewsList from "./brewsList";

const CurrentlyFermentingBrews = () => {
  return (
    <div className="m-3 mt-7">
      <h3 className="text-4xl font-bold leading-none text-center">
        Welcome to Your Brews in Progress 🍻
      </h3>
      <br />
      <p className="text-base">
        Crafting a perfect brew takes patience, precision, and a bit of passion.
        Here, you can track each brew as it transforms, recording every small
        change along the way. Whether it’s an ale bubbling through fermentation
        or a lager settling down for a cold rest, all your brews are documented
        here.
      </p>
      <br />
      <HeaderAndDescription
        title="Your Brew Line-Up 🌱"
        description="These brews are alive, fermenting, evolving into unique expressions of flavor. Keep an eye on your brewing timelines and know exactly when it’s time to move to the next step. Remember, each brew has a story, and it’s all happening right here."
      />
      <HeaderAndDescription
        title="Fermentation Status & Tips 🕒"
        description="Below, you’ll find each brew’s current step, gravity, and temperature data—all crucial indicators of progress. Watch your yeast at work, and note any unexpected changes. You’re not just brewing; you’re learning, experimenting, and refining your craft with every batch."
      />

      <BrewsList />
    </div>
  );
};

export default CurrentlyFermentingBrews;
