const Section2Mobile = () => {
    return (
        <div className="flex flex-col md:hidden">
            <div className="bg-[#0A0A0A] h-[860px] flex flex-col md:hidden items-center">
                <div className="w-[210.89px] relative h-[276px] mt-8">
                    <h1 className="text-[#F2F2F2] font-rajdhani font-bold text-2xl leading-[30.62px]">
                        Nossa visão e missão
                    </h1>
                    <img src="/images/card1-vision.png" className="absolute top-[70px] left-0 w-[124.31px] h-[166.86px]" />
                    <img src="/images/camaron.png" className="absolute left-[9.67px] w-[109.09px] h-[160.63px] top-[75px]" />
                    <img src="/images/card2-vision.png" className="absolute top-[122.96px] left-[96.87px] w-[114.02px] h-[153.05px]" />
                    <img src="/images/pietra.png" className="absolute left-[114.5px] w-[88.77px] h-[151.44px] top-[124px]" />
                    <div className="absolute right-[45px] flex flex-row items-center gap-[3.57px]">
                        <p className="text-[#A9A9A9] text-[6.43px] leading-[21.78px] cursor-pointer">
                            Fale conosco
                        </p>
                        <img src="/icons/arrow-vision.png" className="w-[8.58px] h-2 cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col mt-6">
                    <div className="h-[234px] relative">
                        <img src="/images/vision-card.png" className="opacity-5 h-[234px] w-[293px]" />
                        <div className="absolute top-[45.15px] left-[19px] flex flex-col">
                            <h1 className="text-[#CBD4E7] font-rajdhani font-bold text-2xl leading-[30.62px]">
                                Visão
                            </h1>
                            <p className="text-[#A9A9A9] w-[255px] mt-[40px]">
                                Ser o hub de inovação tecnológica, promovendo a revolução
                                digital com soluções práticas e acessíveis, focadas em resultados mensuráveis.
                            </p>
                        </div>
                    </div>
                    <div className="h-[234px] relative mt-6">
                        <img src="/images/vision-card2.png" className="opacity-5 h-[234px] w-[293px]" />
                        <div className="absolute top-[45.15px] left-[19px] flex flex-col">
                            <h1 className="text-[#CBD4E7] font-rajdhani font-bold text-2xl leading-[30.62px]">
                                Missão
                            </h1>
                            <p className="text-[#A9A9A9] w-[255px] mt-[40px]">
                                Ser o hub de inovação tecnológica, promovendo a revolução
                                digital com soluções práticas e acessíveis, focadas em resultados mensuráveis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/images/black-background.png')] h-auto min-h-[659.02px]">
                <div className="mt-[37.94px] flex flex-col items-center">
                    <h1 className="text-[#F2F2F2] text-2xl leading-[30.62px] font-bold font-rajdhani ">
                        Valores
                    </h1>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row">
                            <div className="w-[290px] h-[60.5px] gradient-background rounded-lg text-[#F2F2F2] leading-[34.18px] text-2xl flex justify-center items-center mt-6">
                                Inovação
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[290px] h-[60.5px] gradient-background rounded-lg text-[#F2F2F2] leading-[34.18px] text-2xl flex justify-center items-center">
                                Transparência
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[290px] h-[60.5px] gradient-background rounded-lg text-[#F2F2F2] leading-[34.18px] text-2xl flex justify-center items-center">
                                Eficiência
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[290px] h-[60.5px] gradient-background rounded-lg text-[#F2F2F2] leading-[34.18px] text-2xl flex justify-center items-center">
                                Transformação
                            </div>
                        </div>
                    </div>
                    <div className="mt-[19px] flex flex-col w-[290px] justify-between items-center">
                        <p className="text-[#F2F2F2] w-[290px] text-center">
                            A Velora é mais do que uma marca. Somos inovadores, confiáveis, e transparentes, com uma missão clara de impactar positivamente nossos clientes e transformar setores com inteligência artificial.
                        </p>
                        <div className="flex flex-row items-center gap-[10px] mt-[34px]">
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

export default Section2Mobile;