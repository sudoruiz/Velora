const Section2 = () => {
    return (
        <div className="md:flex flex-col hidden">
            <div className="bg-[#0A0A0A] min-h-[770px] h-auto pt-[83px] flex flex-col xl:flex-row xl:items-start items-center">
                <div className="w-[590px] ml-[44px] relative h-[649.29px] xl:mb-0 mb-[50px]">
                    <h1 className="text-[#F2F2F2] font-rajdhani font-bold text-5xl ml-[65px] leading-[61.25px]">
                        Nossa visão e missão
                    </h1>
                    <img src="/images/card1-vision.png" className="absolute top-[70px] left-0" />
                    <img src="/images/camaron.png" className="absolute left-[27.04px] w-[305.2px] h-[449.4px] top-[85px]" />
                    <img src="/images/card2-vision.png" className="absolute top-[221.12px] left-[271px]" />
                    <img src="/images/pietra.png" className="absolute left-[320.34px] w-[248.35px] h-[423.68px] top-[225px]" />
                    <div className="absolute right-[45px] flex flex-row items-center gap-[10px]">
                        <p className="text-[#A9A9A9] text-lg leading-[21.78px] cursor-pointer">
                            Fale conosco
                        </p>
                        <img src="/icons/arrow-vision.png" className="w-6 h-[18px] cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col mb-[100px] xl:mb-0">
                    <div className="ml-[152px] h-[232.72px] relative">
                        <img src="/images/vision-card.png" className="opacity-5" />
                        <div className="absolute top-[45.15px] left-[40px] flex flex-col">
                            <h1 className="text-[#CBD4E7] font-rajdhani font-bold text-2xl leading-[30.62px]">
                                Visão
                            </h1>
                            <p className="text-[#A9A9A9] w-[470px] mt-[40px]">
                                Ser o hub de inovação tecnológica, promovendo a revolução
                                digital com soluções práticas e acessíveis, focadas em resultados mensuráveis.
                            </p>
                        </div>
                    </div>
                    <div className="ml-[152px] h-[232.72px] relative mt-12">
                        <img src="/images/vision-card2.png" className="opacity-5" />
                        <div className="absolute top-[45.15px] left-[40px] flex flex-col">
                            <h1 className="text-[#CBD4E7] font-rajdhani font-bold text-2xl leading-[30.62px]">
                                Missão
                            </h1>
                            <p className="text-[#A9A9A9] w-[470px] mt-[40px]">
                                Ser o hub de inovação tecnológica, promovendo a revolução
                                digital com soluções práticas e acessíveis, focadas em resultados mensuráveis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/images/black-background.png')] h-auto min-h-[608px] flex flex-col items-center">
                <div className="mt-[120px] flex flex-col items-center">
                    <h1 className="text-[#F2F2F2] text-5xl leading-[61.25px] font-bold font-rajdhani ">
                        Valores
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                        <div className="flex flex-row mt-[61px]">
                            <div className="w-[231px] h-14 gradient-background rounded-lg text-[#F2F2F2] leading-[34.18px] text-2xl flex justify-center items-center">
                                Inovação
                            </div>
                        </div>
                        <div className="flex flex-row mt-[61px]">
                            <div className="w-[231px] h-14 gradient-background rounded-lg text-[#F2F2F2] leading-[34.18px] text-2xl flex justify-center items-center">
                                Transparência
                            </div>
                        </div>
                        <div className="flex flex-row mt-[61px]">
                            <div className="w-[231px] h-14 gradient-background rounded-lg text-[#F2F2F2] leading-[34.18px] text-2xl flex justify-center items-center">
                                Eficiência
                            </div>
                        </div>
                        <div className="flex flex-row mt-[61px]">
                            <div className="w-[231px] h-14 gradient-background rounded-lg text-[#F2F2F2] leading-[34.18px] text-2xl flex justify-center items-center">
                                Transformação
                            </div>
                        </div>
                    </div>
                    <div className="mt-[61px] flex flex-col lg:items-start items-center lg:flex-row w-[600px] lg:w-[980px] justify-between">
                        <p className="text-[#F2F2F2] w-[740px] text-center">
                            A Velora é mais do que uma marca. Somos inovadores, confiáveis, e transparentes, com uma missão clara de impactar positivamente nossos clientes e transformar setores com inteligência artificial.
                        </p>
                        <div className="flex flex-row items-center gap-[10px] lg:mt-0 mt-8 lg:mb-0 mb-8">
                            <p className="text-[#A9A9A9] text-lg leading-[21.78px] cursor-pointer">
                                Fale conosco
                            </p>
                            <img src="/icons/arrow-vision2.png" className="w-6 h-[18px] cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;