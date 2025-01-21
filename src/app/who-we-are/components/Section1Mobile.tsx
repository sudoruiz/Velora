import HeaderMobile from "@/app/news/components/HeaderMobile";

const Section1Mobile = () => {
    return (
        <div className="flex flex-col md:hidden">
            <div className="bg-[url('/images/background-who-we-are-mobile.png')] h-[502px] bg-cover flex flex-col items-center">
                <div className="w-full">
                    <HeaderMobile />
                </div>
                <div className="mt-[80.1px] w-[290px] flex flex-col leading-[34px] text-[#F2F2F2] text-2xl">
                    <h1 className="font-rajdhani font-medium">
                        Surgimos para
                    </h1>
                    <h1 className="font-bold font-rajdhani">
                        impulsionar a inovação
                    </h1>
                    <h1 className="font-rajdhani font-medium">
                        viável com tecnologia.
                    </h1>
                    <p className="text-lg text-[#F2F2F2] leading-[21.87px] mt-[27px]">
                        Nossas soluções são construídas com foco na transformação real.
                    </p>
                </div>
                <div className="bg-[url('/images/who-we-are-rectangle.png')] bg-cover h-[43.36px] mt-[95.89px] pr-[18.46px] pl-[15.81px] pt-[3.29px] w-[290px] bg-opacity">
                    <div className="h-[34.4px] flex flex-row items-center justify-between">
                        <div className="flex flex-row h-[19.06px] items-center gap-[6.94px]">
                            <img src="/icons/chip-icon.png" className="w-[16.24px] h-[19.06px]" />
                            <p className="font-bold text-[5.2px] leading-[6.3px] text-[#F2F2F2]">
                                Velocidade
                            </p>
                        </div>
                        <div className="h-full w-[2px] bg-[#FFFFFF29]" />
                        <div className="flex flex-row h-[19.06px] items-center gap-[6.94px]">
                            <img src="/icons/chip-icon.png" className="w-[16.24px] h-[19.06px]" />
                            <p className="font-bold text-[5.2px] leading-[6.3px] text-[#F2F2F2]">
                                Visibilidade
                            </p>
                        </div>
                        <div className="h-full w-[2px] bg-[#FFFFFF29]" />
                        <div className="flex flex-row h-[19.06px] items-center gap-[6.94px]">
                            <img src="/icons/chip-icon.png" className="w-[16.24px] h-[19.06px]" />
                            <p className="font-bold text-[5.2px] leading-[6.3px] text-[#F2F2F2]">
                                Verocidade
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/images/solutions-background-mobile.png')] h-[583px] bg-cover items-center flex flex-col">
                <div className="bg-[url('/images/solutions-rectangle-mobile.png')] h-[519px] w-72 bg-cover mt-8 flex flex-col items-center">
                    <h1 className="text-[#F2F2F2] leading-[30.62px] font-rajdhani font-bold text-2xl mt-[52px] w-[258px]">
                        Soluções que Simplificam
                        e Transformam Negócios
                    </h1>
                    <img src="/images/zenbook.png" className="w-[217px] h-[124px] mt-6" />
                    <div className="flex flex-col mt-6 w-[240px]">
                        <p className="text-[#F2F2F2] leading-[19.36px]">
                            A Velora começou com a visão de transformar a maneira como
                            as empresas interagem com a tecnologia.
                        </p>
                        <p className="text-[#F2F2F2] leading-[19.36px] mt-2">
                            Com ferramentas como Pietra e Watson, temos um compromisso em entregar
                            soluções tecnológicas que realmente resolvem problemas, eliminando tarefas
                            repetitivas e burocráticas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1Mobile;