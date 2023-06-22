import InteractiveRating from "./components/InteractiveRating";
import Star from "../src/images/icon-star.svg";
import IllustrationThankYou from "../src/images/illustration-thank-you.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { IData } from "../type";
import ThankYouState from "./components/ThankYouState";

function App() {
  const [data, setData] = useState<IData[]>();
  const [showComponent, setShowComponet] = useState<boolean>(false);

  const getData = () => {
    return axios
      .get("db.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    setShowComponet(true);
  };

  return (
    <>
      {showComponent ? (
        <ThankYouState
          img={IllustrationThankYou}
          thankYouText={
            "We apprecciated you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
          }
          title={"Thank You!"}
          text={"You selected 4 out of 5"}
        />
      ) : (
        <InteractiveRating
          img={Star}
          data={data ?? []}
          textButton="Submit"
          onClick={handleClick}
        />
      )}
    </>
  );
}

export default App;
