import InteractiveRating from "../InteractiveRating";
import Star from "../../images/icon-star.svg";
import IllustrationThankYou from "../../images/illustration-thank-you.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { IData } from "../../../type";
import ThankYouState from "../ThankYouState";

function Rate() {
  const [data, setData] = useState<IData[]>();
  const [showComponent, setShowComponet] = useState<boolean>(false);
  const [rateValue, setRateValue] = useState<number>(5);

  const rateData = [1, 2, 3, 4, 5];

  const getData = () => {
    return axios
      .get("db.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (rateValue) {
      setShowComponet(true);
    }
  };

  return (
    <main>
      {showComponent ? (
        <ThankYouState
          img={IllustrationThankYou}
          thankYouText={
            "We apprecciated you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
          }
          title={"Thank You!"}
          text={`You selected ${rateValue} out of ${rateData.length}`}
        />
      ) : (
        <InteractiveRating
          rateValue={rateValue}
          rateData={rateData}
          onClick={(e) => setRateValue(e)}
          onSubmit={(e) => onSubmit(e)}
          img={Star}
          data={data ?? []}
          textButton="Submit"
        />
      )}
    </main>
  );
}

export default Rate;
