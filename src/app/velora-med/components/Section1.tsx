const Section1 = () => {
    return (
        <div className="hidden md:block">
            <div className="mt-[122.1px] flex flex-col xl:flex-row pl-[120px]">
                <div className="flex flex-col">
                    <h1 className="font-rajdhani text-white text-[56px] leading-[71.46px]">
                        Velora Med
                    </h1>
                    <p className="text-[#F2F2F2] leading-[19.36px] w-[390px] mt-6">
                        Velora Med é a solução ideal para o setor médico, trazendo inteligência
                        artificial para otimizar a gestão de agendamentos, melhorar a experiência
                        do paciente e maximizar a eficiência operacional das clínicas.
                    </p>
                    <div className="text-[#A9A9A9] gradient-background w-[345px] h-[39px] leading-[19.36px] flex justify-center items-center mt-[42px]">
                        Assistente inteligente do gestor de clinicas
                    </div>
                </div>
                <img src="/images/velora-med-graphic.png" className="w-[380px] lg:w-[496.51px] h-[123.82px] ml-[255px] mt-auto" />
                <div className="w-full pr-[16.14px]">

                </div>
            </div>
            <img src="/images/twins.png" className="absolute bottom-0 left-[60.35%] w-[300px] xl:w-[490.95px] lg:w-[400px]" />
            <div className="absolute right-[16.14px] top-[263.81px] w-[222.89px] flex flex-col items-center">
                <button className="h-10 w-24 rounded-lg gradient-background flex flex-row justify-center items-center gap-2">
                    <img src="/icons/schedule-icon.png" />
                    <p className="text-[#F2F2F2] font-semibold leading-6">
                        Agenda
                    </p>
                </button>
                <div className="border-b border-[#EBEBEC6B] mt-[30.23px] w-[195.51px] h-[17.11px] flex flex-row justify-between">
                    <p className="font-medium text-[6.85px] text-[#F2F2F2] leading-[10.27px]">
                        Cameron
                    </p>
                    <img src="/icons/x-icon.png" className="cursor-pointer w-[10.27px] h-[10.27px]" />
                </div>
                <div className="w-[195.51px] h-[52.38px] rounded-[3.42px] background-cameron flex flex-col pt-[10.27px] pl-[6.85px] mt-[13.69px]">
                    <h1 className="text-[10.27px] text-[#F2F2F2] font-bold leading-[14.62px]">
                        Olá, eu sou o Cameron!
                    </h1>
                    <p className="text-[6.85px] leading-[9.75px] text-[#F2F2F2] font-medium mt-[6.84px]">
                        Como posso ajudar?
                    </p>
                </div>
                <div className="w-[195.51px] h-[30.8px] mt-[13.69px] rounded-[6.85px] velora-question-background flex flex-row items-center pl-[6.85px] gap-[3.42px]">
                    <img src="/icons/help-icon.png" className="w-[10.27px] h-[10.27px]" />
                    <p className="text-[#F2F2F2] text-[6.85px] leading-[10.27px]">
                        Pergunte sobre informações específicas deste caso
                    </p>
                </div>
                <div className="w-[195.51px] h-[30.8px] mt-[13.69px] rounded-[6.85px] velora-question-background flex flex-row items-center pl-[6.85px] gap-[3.42px]">
                    <img src="/icons/back-icon.png" className="w-[10.27px] h-[10.27px]" />
                    <p className="text-[#F2F2F2] text-[6.85px] leading-[10.27px]">
                        Peça uma sugestão de diagnóstico
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section1;