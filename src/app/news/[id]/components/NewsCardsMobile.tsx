import Link from 'next/link';
import React from 'react';

interface NewsCardMobileProps {
  id: string;
  imgSrc: string;
  text: string;
}

const NewsCardMobile = ({ imgSrc, text, id }: NewsCardMobileProps) => {
  return (
    <div className="flex flex-col mb-[33.76px]">
      <img src={imgSrc} className="w-72 h-[175.82px]" alt="Imagem do card" />
      <p className="text-[#A9A9A9] text-[12.66px] font-medium leading-[15.32px] w-[265px] mt-[16.88px]">
        {text}
      </p>
      <div className="flex flex-row mt-[16.88px] gap-[7.03px]">
      <Link href={`${id}`} className='flex flex-row gap-[7.03px]'>
        <p className="text-[#2955D9] text-[12.66px] leading-[15.32px] ml-[7.03px]">
          Ver mais
        </p>
        <img src="/images/purple-arrow-right-icon-mobile.png" className="w-[16.68px]" alt="Ícone de seta" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCardMobile;