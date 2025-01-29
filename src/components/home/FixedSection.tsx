import React from "react";

const FixedSection = () => {
  return (
    <div className="md:flex hidden w-[1182.41px] h-[180.99px] relative">
      <button
        className="z-10 bg-button-gradient rounded-[5.15px] rounded-br-[15px] text-[#F2F2F2] border border-[#D9D9D97A] transition-transform duration-300 ease-in-out hover:bg-[#FFFFFF] hover:text-[#000000] hover:scale-105 hover:shadow-lg text-[11px] lg:text-[16px] w-[10%] h-[40.4px] px-2 py-1"
      >
        Saiba mais
      </button>
      <img
        src="images/rectangle-2.png"
        className="absolute opacity-[0.90] h-[174.01px]"
        alt="Background"
      />
      <FeatureBlock
        title="Inovação viável"
        text1="Investimos em soluções"
        text2="práticas e viáveis."
        position="left-0 lg:left-[34.52px]"
      />
      <FeatureBlock
        title="Tecnologia acessível"
        text1="Acreditamos em um mundo com"
        text2="tecnologia acessível para todos."
        position="left-[250px] lg:left-[352.15px]"
      />
      <FeatureBlock
        title="Resultados mensuráveis"
        text1="Soluções práticas que"
        text2="trazem resultado!"
        position="left-[520px] lg:left-[700px] xl:left-[750.49px]"
      />
    </div>
  );
};

const FeatureBlock = ({
  title,
  text1,
  text2,
  position,
}: {
  title: string;
  text1: string;
  text2: string;
  position: string;
}) => (
  <div
    className={`absolute top-[47px] ${position} w-[26.2%] h-[76px] flex flex-row`}
  >
    <img src="icons/chip-minimalist.png" className="w-12 h-[56.32px]" alt="Icon" />
    <div className="flex flex-col ml-6">
      <h1 className="font-bold text-[#F2F2F2] text-[18px]">
        {title}
      </h1>
      <p className="text-[#F2F2F2] w-full">{text1}</p>
      <p className="text-[#F2F2F2] w-[100px] whitespace-nowrap">{text2}</p>
    </div>
  </div>
);

export default FixedSection;
