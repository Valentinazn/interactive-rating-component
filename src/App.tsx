import InteractiveRating from "./components/InteractiveRating";
import Star from "../src/images/icon-star.svg";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<IData>();

  useEffect(() => {}, []);
  return (
    <>
      <InteractiveRating img={Star} data={[]} />
    </>
  );
}

export default App;
