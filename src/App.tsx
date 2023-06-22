import InteractiveRating from "./components/InteractiveRating";
import Star from "../src/images/icon-star.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { IData } from "../type";

function App() {
  const [data, setData] = useState<IData[]>();

  const getData = () => {
    return axios
      .get("db.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <InteractiveRating img={Star} data={data ?? []} textButton="Submit" />
    </>
  );
}

export default App;
