import React from "react";
import { IData } from "../../../type";

interface InteractiveRatingProps {
  img: string;
  data: IData[];
  rateData: number[];
  textButton: string;
  rateValue: number;
  onClick: (e: any) => void;
  onSubmit: (e: any) => void;
}

const InteractiveRating = ({
  img,
  data,
  rateData,
  textButton,
  rateValue,
  onClick,
  onSubmit,
}: InteractiveRatingProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 bg-darkBlue w-[100%] max-w-[400px]  rounded-3xl gap-[20px] p-[30px]"
    >
      <img
        className="p-[20px] bg-veryDarkBlue rounded-full"
        src={img}
        alt="star"
      ></img>
      <div className="grid grid-cols-1 gap-[10px]">
        {React.Children.toArray(
          data.map((x) => {
            return (
              <div className="text-white">
                <div className="text-white font-bold text-[30px]">
                  {x.question}
                </div>
                <div className="text-lightGrey">{x.answer}</div>
              </div>
            );
          })
        )}
      </div>
      <ul className="grid gap-4 grid-cols-5 text-center cursor-pointer">
        {React.Children.toArray(
          rateData.map((x) => {
            return (
              <li
                value={x}
                className={`${
                  rateValue === x
                    ? "bg-orange text-white"
                    : "bg-veryDarkBlue text-lightGrey"
                }   font-bold  p-[10px]  rounded-[100%] hover:bg-mediumGrey hover:text-white`}
                onClick={() => onClick(x)}
              >
                {x}
              </li>
            );
          })
        )}
      </ul>
      <button
        type="submit"
        onClick={(x) => onSubmit(x)}
        className="bg-orange w-[100%] rounded-3xl p-[10px] uppercase text-white hover:bg-white hover:text-orange"
      >
        {textButton}
      </button>
    </form>
  );
};

export default InteractiveRating;
