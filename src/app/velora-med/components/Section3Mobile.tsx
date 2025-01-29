const Section3Mobile = () => {
    return (
        <div className="flex flex-col md:hidden">
            <div className="bg-[url('/images/velora-background-mobile.png')] h-[649px] flex flex-col md:hidden bg-cover items-center relative">
                <div className="mt-[32.04px] w-[289px]">
                    <p className="text-[#F2F2F2] font-medium leading-[19.36px]">
                        Velocidade e precisão.
                    </p>
                    <h1 className="font-semibold text-[#F2F2F2] leading-[29.05px] text-2xl">
                        Reduza ciclos, aumente resultados.
                    </h1>
                </div>
                <img src="/images/velocity-card.png" className="h-[158px] w-[300px] absolute top-[148.94px] left-0" />
                <div className="flex flex-col gap-7 mt-[221.21px]">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="w-6 h-6 bg-[#7C8EB2]" />
                        <p className="text-[#F2F2F2] leading-[19.36px] w-[210px]">
                            Redução de erros nos agendamentos
                        </p>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="w-6 h-6 bg-[#7C8EB2]" />
                        <p className="text-[#F2F2F2] leading-[19.36px] w-[210px]">
                            Aumento da satisfação dos pacientes
                        </p>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="w-6 h-6 bg-[#7C8EB2]" />
                        <p className="text-[#F2F2F2] leading-[19.36px] w-[210px] items-center">
                            Mais tempo para decisões estratégicas e não para tarefas operacionais
                        </p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="w-6 h-6 bg-[#7C8EB2]" />
                        <p className="text-[#F2F2F2] leading-[19.36px] w-[220px] items-center">
                            Resultados mensuráveis e retorno sobre o investimento
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/images/last-background-mobile.png')] h-[781.18px] bg-cover items-center flex flex-col">
                <h1 className="text-white font-semibold text-2xl leading-[29.05px] text-center mt-8 w-[270px]">
                    Transformação digital
                    para clinicas inteligentes.
                </h1>
                <div className="relative mt-[40.62px]">
                    <img src="/images/diamond-logo-mobile.png" />
                    <div className="absolute left-[73.1px] top-[20.88px] w-[66.5px] h-[16.16px] gradient-background2 text-[#F2F2F2] flex justify-center items-center text-[6.01px]">
                        Integração simples
                    </div>
                    <div className="absolute left-[-25.86px] top-[108.37px] w-[70.64px] h-[16.16px] gradient-background2 text-[#F2F2F2] flex justify-center items-center text-[6.01px]">
                        Relatórios detalhados
                    </div>
                    <div className="absolute right-[-48.89px] top-[115.22px] w-[86.42px] h-[23.3px] gradient-background2 text-[#F2F2F2] flex justify-center items-center text-[6.01px]">
                        <p className="w-[78px]">
                            Acompanhe a performance
                            da sua clinica
                        </p>
                    </div>
                    <div className="absolute bottom-[36.19px] left-[58.4px] w-[92.81px] h-[16.16px] gradient-background2 text-[#F2F2F2] flex justify-center items-center text-[6.01px]">
                        Decisões baseado em dados.
                    </div>
                </div>
                <div className="w-full pl-[16.8px] pr-[18.16px]">
                    <div className="bg-[url('/images/card-velora-mobile.png')] h-[318px] bg-cover flex flex-col items-center mt-[24.71px]">
                        <div className="flex flex-col mt-[30px]">
                            <p className="text-[#CBD4E7] font-medium leading-[19.36px]">
                                Descubra como o Velora Med
                            </p>
                            <h1 className="leading-[29.05px] font-medium text-2xl w-[250px] text-[#CBD4E7]">
                                pode transformar a gestão da sua clínica.
                            </h1>
                            <div className="flex flex-row items-center gap-[2.49px] mt-[10.2px]">
                                <p className="leading-[19.36px] text-[#F2F2F2] cursor-pointer">
                                    Fale conosco
                                </p>
                                <img src="/icons/last-velora-arrow-icon.png" className="w-4 h-[6px] cursor-pointer" />
                            </div>
                        </div>
                        <div className="relative">
                            <img src="/images/last-logo-2.png" className="absolute inset-0 mix-blend-overlay w-[171.43px] h-[200.73px] top-[-32px] left-[10px]" />
                            <img src="/images/zenbook.png" className="w-[205.49px] h-[117.71px] mt-[22.68px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3Mobile;