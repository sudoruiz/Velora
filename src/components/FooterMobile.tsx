const FooterMobile = () => {
    return (
      <div className="flex flex-col items-center h-auto bg-[#F2F2F2] md:hidden">
        <div className="mt-8 w-[288px] border-b border-[#7C8EB2] h-[72px] mb-[29.5px]">
          <img src="images/dark-logo-mobile.png" className="w-[213.07px] h-[50.4px]" alt="Logo" />
        </div>
  
        <div className="w-[288px]">
          <p className="text-[#707070] text-[18px]">Redes sociais</p>
          <div className="flex flex-row w-[196px] justify-between mt-[26px]">
            <div className="bg-[#7C8EB2] w-12 h-12" />
            <div className="bg-[#7C8EB2] w-12 h-12" />
            <div className="bg-[#7C8EB2] w-12 h-12" />
          </div>
  
          <div className="flex flex-row mt-[29.5px]">
            <div className="flex flex-col mr-[45px]">
              <h1 className="text-[#202A40] font-bold text-[18px]">Conteúdo</h1>
              <p className="text-[#707070] text-[18px]">Home</p>
              <p className="text-[#707070] text-[18px]">Quem somos</p>
              <p className="text-[#707070] text-[18px]">Blog</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#202A40] font-bold text-[18px]">Soluções</h1>
              <p className="text-[#707070] text-[18px]">Velora Med</p>
            </div>
          </div>
        </div>
  
        <div className="mt-[51px] mb-8 w-[288px]">
          <img src="images/inovation.png" className="w-[234px] h-[22px]" alt="Inovação" />
        </div>
  
        <div className="text-[#707070] w-[288px]">
          <p>Endereço: R. Alta, 00- Centro, Natal.</p>
          <div className="flex flex-col mb-8">
            <div className="flex flex-row items-center mt-6">
              <img src="icons/mail-icon.png" className="w-[19px] h-[15px] mr-[14.5px]" alt="Email Icon" />
              <p className="text-[#707070] text-[18px]">email@email.com</p>
            </div>
            <div className="flex flex-row items-center mt-[29px]">
              <img src="icons/phone-icon.png" className="w-[22.67px] h-[22.67px] mr-[14.5px]" alt="Phone Icon" />
              <p className="text-[#707070] text-[18px]">Telefone</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterMobile;