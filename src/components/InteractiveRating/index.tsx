import { IData } from "../../../type";

interface InteractiveRatingProps {
  img: string;
  data: IData[];
  textButton: string;
}

const InteractiveRating = ({
  img,
  data,
  textButton,
}: InteractiveRatingProps) => {
  return (
    <main className="grid grid-cols-1 bg-darkBlue w-[100%] lg:max-w-[400px] min-w-[375px]  rounded-3xl gap-[20px] p-[30px]">
      <img
        className="p-[20px] bg-veryDarkBlue rounded-full"
        src={img}
        alt="star"
      ></img>
      <div className="grid grid-cols-1 gap-[10px]">
        {data.map((x, index) => {
          return (
            <div key={index} className="text-white">
              <div className="text-white font-bold text-[30px]">
                {x.question}
              </div>
              <div className="text-lightGrey">{x.answer}</div>
            </div>
          );
        })}
      </div>
      <div className="grid gap-4 grid-cols-5 text-center">
        {[1, 2, 3, 4, 5].map((x) => (
          <p className="text-lightGrey font-bold  p-[10px] bg-veryDarkBlue rounded-[100%]">
            {x}
          </p>
        ))}
      </div>
      <button className="bg-orange w-[100%] rounded-3xl p-[10px] uppercase text-white">
        {textButton}
      </button>
    </main>
  );
};

export default InteractiveRating;
