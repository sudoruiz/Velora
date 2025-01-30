import Header from "@/components/Header";

const Section1 = () => {
    return (
        <div className="hidden md:flex flex-col">
            <div className="bg-[url('/images/image-who-we-are.png')] h-auto min-h-[675px] bg-cover pt-12">
                <Header />
                <div className="mt-[80.1px] w-[585px] ml-[160px] lg:ml-[304.41px] flex flex-col leading-[52px] text-[#F2F2F2] text-5xl">
                    <h1 className="font-rajdhani font-medium">
                        Surgimos para
                    </h1>
                    <h1 className="font-bold font-rajdhani">
                        impulsionar a inovação
                    </h1>
                    <h1 className="font-rajdhani font-medium">
                        viável com tecnologia.
                    </h1>
                    <p className="text-2xl text-[#F2F2F2] leading-[29.05px] mt-[27px]">
                        Nossas soluções são construídas com foco na transformação real.
                    </p>
                </div>
                <div className="pl-[215.52px] pr-[215.94px]">
                    <div className="bg-[url('/images/who-we-are-rectangle.png')] bg-cover h-auto min-h-[150.77px] mt-[48.11px] pr-[63.85px] pl-[54.69px] pt-[11.39px]">
                        <div className="h-[300px] xl:h-[119px] flex flex-col xl:flex-row items-center justify-between mb-12 xl:mb-0">
                            <div className="flex flex-row h-[65.92px] items-center gap-6">
                                <img src="/icons/chip-icon.png" className="w-[56.19px] h-[65.92px]" />
                                <p className="font-bold text-2xl leading-[29.05px] text-[#F2F2F2]">
                                    Velocidade
                                </p>
                            </div>
                            <div className="h-[2px] xl:h-full w-full xl:w-[2px] bg-[#FFFFFF29] xl:mt-0 mt-2 xl:mb-0 mb-2" />
                            <div className="flex flex-row h-[65.92px] items-center gap-6">
                                <img src="/icons/chip-icon.png" className="w-[56.19px] h-[65.92px]" />
                                <p className="font-bold text-2xl leading-[29.05px] text-[#F2F2F2]">
                                    Visibilidade
                                </p>
                            </div>
                            <div className="h-[2px] xl:h-full w-full xl:w-[2px] bg-[#FFFFFF29] xl:mt-0 mt-2 xl:mb-0 mb-2" />
                            <div className="flex flex-row h-[65.92px] items-center gap-6">
                                <img src="/icons/chip-icon.png" className="w-[56.19px] h-[65.92px]" />
                                <p className="font-bold text-2xl leading-[29.05px] text-[#F2F2F2]">
                                    Verdade
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/images/solutions-background.png')] h-auto min-h-[825px] velora:pl-[108px] velora:pr-[140px] bg-cover items-center velora:items-start flex flex-col">
                <div className="bg-[url('/images/solutions-rectangle.png')] mt-[188px] w-[650px] velora:w-[1200px] h-auto bg-cover min-h-[472px] flex flex-col velora:flex-row pl-[85px]">
                    <div className="flex flex-col w-[604px] mt-[71px]">
                        <h1 className="text-[#F2F2F2] text-5xl font-rajdhani font-bold leading-[61.25px]">
                            Soluções que Simplificam e Transformam Negócios
                        </h1>
                        <p className="text-[#F2F2F2] leading-[21.78px] w-[500px] mt-[60px]">
                            A Velora começou com a visão de transformar a maneira como
                            as empresas interagem com a tecnologia.
                        </p>
                        <p className="text-[#F2F2F2] leading-[21.78px] w-[500px] mt-4">
                            Com ferramentas como Pietra e Watson, temos um compromisso em entregar
                            soluções tecnológicas que realmente resolvem problemas, eliminando tarefas
                            repetitivas e burocráticas.
                        </p>
                    </div>
                    <img src="/images/zenbook.png" className="w-[445px] h-[255px] mt-[97px]" />
                </div>
            </div>
        </div>
    );
};

export default Section1;