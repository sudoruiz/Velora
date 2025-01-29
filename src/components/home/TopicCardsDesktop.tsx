import React from 'react';

interface TopicCardDesktopProps {
  number: string;
  title: string;
  text: string;
  textWidth: {
    base: string;
    md: string;
  };
}

const TopicCardDesktop = ({ number, title, text, textWidth }: TopicCardDesktopProps) => {
  return (
    <div className="relative">
      <img src="images/card.png" className="mt-6 block md:hidden" />
      <img src="images/desktop-card.png" className="mt-12 hidden md:block" />

      <h1 className="absolute left-[32.99px] top-[74.87px] text-[#F2F2F2] font-bold text-[25.56px] md:text-[36px]">
        {number}
      </h1>

      <h1 className="absolute left-[32.99px] top-[142.87px] text-[#F2F2F2] font-rajdhani font-bold text-[17.04px] md:text-2xl">
        {title}
      </h1>

      <p
        className={`absolute left-[32.99px] top-[203.87px] text-[11.49px] md:text-base text-[#A9A9A9]`}
        style={{
          width: textWidth.base,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default TopicCardDesktop;