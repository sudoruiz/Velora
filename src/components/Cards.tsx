interface CardProps {
    text: string;
    textPosition: { top: string; left: string };
    textWidth: string;
    iconSrc: string;
    iconPosition: { top: string; left: string };
  }
  
  const Card = ({
    text,
    textPosition,
    textWidth,
    iconSrc,
    iconPosition,
  }: CardProps) => {
    return (
      <div className="relative mb-[15px]">
        <img src="images/rectangle.png" alt="Background" />
        <h1
          className={`text-[#F6F9FF] absolute text-center font-medium text-[18px]`}
          style={{ top: textPosition.top, left: textPosition.left, width: textWidth }}
        >
          {text}
        </h1>
        <img
          src={iconSrc}
          alt="Icon"
          className="absolute"
          style={{ top: iconPosition.top, left: iconPosition.left }}
        />
      </div>
    );
  };
  
  export default Card;