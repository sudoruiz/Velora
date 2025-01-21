const Section1Mobile = () => {
    return (
        <div className="flex flex-col items-center md:hidden">
            <div className="w-72 flex flex-col md:hidden mt-[39.46px]">
                <h1 className="font-rajdhani text-2xl leading-[30.62px] text-white">
                    Velora Med
                </h1>
                <p className="text-[#F2F2F2] leading-[19.36px] mt-[23.22px]">
                    Velora Med é a solução ideal para o setor médico, trazendo inteligência
                    artificial para otimizar a gestão de agendamentos, melhorar a experiência
                    do paciente e maximizar a eficiência operacional das clínicas.
                </p>
            </div>
            <div className="w-72 h-[237.58px] relative">
                <img src="/images/velora-med-graphic-mobile.png" className="absolute top-[108.24px]" />
                <img src="/images/graphic-plate-mobile.png" className="absolute top-[120.38px] left-[46.98px] w-[38.17px] h-[18.46px]" />
                <img src="/images/sister-mobile.png" className="absolute left-[79.37px]" />
                <img src="/images/brother-mobile.png" className="absolute left-[133.05px] bottom-0" />
                <div className="absolute left-[200px] top-[78.78px] w-[87.43px] flex flex-col items-center">
                    <button className="h-[15.69px] w-[37.66px] rounded-[3.14px] gradient-background flex flex-row justify-center items-center gap-[1.54px]">
                        <img src="/icons/schedule-icon-mobile.png" />
                        <p className="text-[#F2F2F2] font-semibold leading-[9.41px] text-[6.28px]">
                            Agenda
                        </p>
                    </button>
                    <div className="border-b border-[#EBEBEC6B] mt-[11.70px] w-[76.69px] h-[6.71px] flex flex-row justify-between">
                        <p className="font-medium text-[2.69px] text-[#F2F2F2] leading-[4.03px]">
                            Cameron
                        </p>
                    </div>
                    <div className="w-[76.64px] h-[20.73px] rounded-[1.34px] background-cameron flex flex-col pt-[4.03px] pl-[6.85px] mt-[5.16px]">
                        <h1 className="text-[4.02px] text-[#F2F2F2] font-bold leading-[5.73px]">
                            Olá, eu sou o Cameron!
                        </h1>
                        <p className="text-[2.68px] leading-[3.82px] text-[#F2F2F2] font-medium mt-[2.57px]">
                            Como posso ajudar?
                        </p>
                    </div>
                    <div className="w-[76.69px] h-[12.08px] mt-[5.16px] rounded-[2.69px] velora-question-background flex flex-row items-center pl-[2.7px] gap-[1.33px]">
                        <img src="/icons/help-icon.png" className="w-[4.03px] h-[4.03px]" />
                        <p className="text-[#F2F2F2] text-[2.69px] leading-[10.27px]">
                            Pergunte sobre informações específicas deste caso
                        </p>
                    </div>
                    <div className="w-[76.69px] h-[12.08px] mt-[2.48px] rounded-[2.69px] velora-question-background flex flex-row items-center pl-[2.7px] gap-[1.33px]">
                        <img src="/icons/back-icon.png" className="w-[4.03px] h-[4.03px]" />
                        <p className="text-[#F2F2F2] text-[2.69px] leading-[10.27px]">
                            Peça uma sugestão de diagnóstico
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-72 h-[55px] gradient-background flex justify-center items-center">
                <p className="text-[#A9A9A9] leading-[19.36px] w-[268px]">
                    Assistente inteligente do gestor de clinicas
                </p>
            </div>
            <div className="mt-[32.65px] flex flex-row gap-[8.43px]">
                <p className="text-[8.45px] leading-[10.23px] text-white">
                    Explore
                </p>
                <img src="/icons/double-arrow-icon.png" className="w-[8.45px] h-[8.45px]" />
            </div>
        </div>
    );
};

export default Section1Mobile;