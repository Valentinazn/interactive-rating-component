interface InteractiveRatingProps {
  img: string;
  data: IData[];
}

const InteractiveRating = ({ img, data }: InteractiveRatingProps) => {
  return (
    <main className="grid grid-cols-1 bg-darkBlue w-[100%] lg:max-w-[500px] min-w-[375px]  rounded-lg gap-[10px] p-[20px]">
      <img
        className="p-[20px] bg-veryDarkBlue rounded-full"
        src={img}
        alt="star"
      ></img>
    </main>
  );
};

export default InteractiveRating;
