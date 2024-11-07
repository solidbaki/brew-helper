import KeyFeatures from "./components/landingPageComponents/featureComponents/keyFeatures";
import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/mainComponents/footer";
import { Link } from "react-router-dom";
function App() {
  const [data, setData] = useState();

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <span className="px-5">
        <h1 className="mt-3 md:mt-2 text-3xl md:text-5xl text-center font-bold">
          Welcome to Batch Craft{" "}
        </h1>
        <h2 className="mt-3 md:mt-5 text-2xl text-center font-semibold">
          Your Ultimate Homebrewing Companion
        </h2>

        <br />

        <p className="mx-4 font-semibold text-ellipsis overflow-hidden">
          Whether you're a seasoned brewer or just starting your first batch,
          Batch Craft is designed to{" "}
          <span className="underline">
            {" "}
            make every step of homebrewing easy, enjoyable, and precise.{" "}
          </span>
        </p>

        <br />

        <h5 className="mx-4 font-semibold text-ellipsis overflow-hidden">
          Why to use Batch Craft?
        </h5>
        <ul className="ml-8 list-disc">
          <li>
            Easy-to-Follow Steps: Our app is designed to simplify brewing for
            all experience levels.
          </li>
          <li>
            Complete Control: Track, record, and optimize every brew with
            powerful features that ensure consistency.
          </li>
          <li>
            Your Brewing Journal: Keep all your brewing and bottling details in
            one place, and revisit them anytime to perfect your craft.
          </li>
        </ul>
        <br />
        <Link to="/brew" className="px-5 underline hover:cursor-pointer block font-semibold">Try it out!</Link>
        <br />

        <KeyFeatures keyFeatures={data?.keyFeatures} />
      </span>{" "}
      <Footer />
    </>
  );
}

export default App;
