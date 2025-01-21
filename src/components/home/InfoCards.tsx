interface InfoCardProps {
    title: string;
    text: string;
    height?: string;
  }
  
  const InfoCard = ({ title, text, height = "280px" }: InfoCardProps) => {
    return (
      <div
        className="bg-[#151516] border border-[#282829] w-[288px] mt-6 block md:hidden"
        style={{ height }}
      >
        <img src="icons/chip-icon.png" className="mt-3 ml-4 mb-4" alt="Icon" />
        <h1 className="font-rajdhani text-2xl text-[#CBD4E7] ml-4 mb-4 w-[240px] leading-30px">{title}</h1>
        <p className="text-[#A9A9A9] ml-4 leading-19px w-[230px]">{text}</p>
      </div>
    );
  };
  
  export default InfoCard;