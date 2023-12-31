interface ThankYouStateProps {
  img: string;
  thankYouText: string;
  title: string;
  text: string;
}

const ThankYouState = ({
  thankYouText,
  img,
  text,
  title,
}: ThankYouStateProps) => {
  return (
    <div className="grid grid-cols-1 bg-darkBlue w-[100%] max-w-[400px]  rounded-3xl gap-[20px] p-[30px] justify-items-center">
      <img src={img} alt="illustration-thank-you" />
      <p className="text-orange font-bold  p-[10px] bg-veryDarkBlue rounded-2xl">
        {text}
      </p>

      <div className="text-white font-bold text-[30px]">{title}</div>

      <p className="text-lightGrey font-bold text-center">{thankYouText}</p>
    </div>
  );
};

export default ThankYouState;
