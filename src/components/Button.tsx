import React from 'react';

interface ButtonProps {
  text: string; 
  fontSize?: string;
  responsiveFontSize?: string;
  width?: string;
  height?: string;
}

const Button = ({ 
  text, 
  fontSize = "16px",
  responsiveFontSize = "md:text-[11px]",
  width = "auto", 
  height = "auto" 
}: ButtonProps) => {
  return (
    <button
      className={`bg-button-gradient rounded-[5.15px] rounded-br-[15px] text-[#F2F2F2] border border-[#D9D9D97A] transition-transform duration-300 ease-in-out hover:bg-[#FFFFFF] hover:text-[#000000] hover:scale-105 hover:shadow-lg ${responsiveFontSize}`}
      style={{ fontSize, width, height, padding: "5px 10px" }}
    >
      {text}
    </button>
  );
};

export default Button;

