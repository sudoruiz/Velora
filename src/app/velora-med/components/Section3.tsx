const Section3 = () => {
    return (
        <div className="md:flex flex-col hidden">
            <div className="bg-[#0A0A0A] min-h-[616px] h-auto md:flex flex-col velora:flex-row hidden items-center velora:items-start">
                <img src="/images/velocity-card.png" className="mt-[90.77px] h-[473.2px] w-[817.09px]" />
                <div className="flex flex-col ml-[113.91px] mt-[97.5px] xl:mb-0 mb-12">
                    <p className="font-medium text-2xl leading-[29.05px] text-[#F2F2F2]">
                        Velocidade e precisão.
                    </p>
                    <h1 className="font-semibold text-[#F2F2F2] leading-[48.41px] text-[40px] w-[400px]">
                        Reduza ciclos, aumente resultados.
                    </h1>
                    <div className="flex flex-col gap-7 mt-8">
                        <div className="flex flex-row gap-3">
                            <div className="w-[40px] h-[40px] bg-[#7C8EB2] ml-3" />
                            <p className="text-[#F2F2F2] leading-[19.36px]">
                                Redução de erros nos agendamentos
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="w-[40px] h-[40px] bg-[#7C8EB2] ml-3" />
                            <p className="text-[#F2F2F2] leading-[19.36px]">
                                Aumento da satisfação dos pacientes
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="w-[40px] h-[40px] bg-[#7C8EB2] ml-3" />
                            <p className="text-[#F2F2F2] leading-[19.36px] w-[350px]">
                                Mais tempo para decisões estratégicas e não para tarefas operacionais
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="w-[40px] h-[40px] bg-[#7C8EB2] ml-3" />
                            <p className="text-[#F2F2F2] leading-[19.36px] w-[350px]">
                                Resultados mensuráveis e retorno sobre o investimento
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[url('/images/velora-background3.png')] h-auto min-h-[1206px] bg-cover flex flex-col items-center">
                <h1 className="text-[#FFFFFF] font-semibold text-[40px] leading-[48.41px] w-[480px] text-center mt-[100px]">
                    Transformação digital
                    para clinicas inteligentes.
                </h1>
                <div className="relative">
                    <img src="/images/diamond-logo.png" className="mt-6" />
                    <div className="absolute top-[55.05px] left-[193.04px] w-[177px] h-[43px] gradient-background2 text-[#F2F2F2] flex justify-center items-center">
                        Integração simples
                    </div>
                    <div className="absolute top-[288.06px] left-[-69.7px] w-[188px] h-[43px] gradient-background2 text-[#F2F2F2] flex justify-center items-center">
                        Relatórios detalhados
                    </div>
                    <div className="absolute top-[305.42px] right-[-50px] lg:right-[-130.94px] w-[230px] h-[62px] gradient-background2 text-[#F2F2F2] flex justify-center items-center">
                        <p className="w-[206px]">
                            Acompanhe a performance
                            da sua clinica
                        </p>
                    </div>
                    <div className="absolute bottom-[53.42px] left-[155.18px] w-[247px] h-[43px] gradient-background2 text-[#F2F2F2] flex justify-center items-center">
                        Decisões baseado em dados.
                    </div>
                </div>
                <div className="w-full pl-[138.81px] pr-[128.44px] flex flex-col lg:items-start items-center">
                    <div className="bg-[url('/images/last-velora-card.png')] lg:mb-0 mb-[200px] h-auto min-h-[287.14px] bg-cover flex flex-col lg:flex-row justify-between pr-[9.52px] pl-20 lg:pl-[46.31px] velora:w-[1182px] lg:w-[820px] w-[600px]">
                        <div className="flex flex-col mt-[43.51px]">
                            <p className="text-[#CBD4E7] font-medium text-2xl leading-[29.05px]">
                                Descubra como o Velora Med
                            </p>
                            <h1 className="leading-[48.41px] font-medium text-[40px] w-[460px] text-[#CBD4E7]">
                                pode transformar a gestão da sua clínica.
                            </h1>
                            <div className="flex flex-row items-center gap-[10px] mt-[42px]">
                                <p className="text-lg text-[#F2F2F2] cursor-pointer">
                                    Fale conosco
                                </p>
                                <img src="/icons/last-velora-arrow-icon.png" className="w-5 h-[16px] cursor-pointer" />
                            </div>
                        </div>
                        <div className="relative">
                            <img src="/images/last-logo-2.png" className="absolute inset-0 top-[30px] left-[65px] mix-blend-overlay" />
                            <img src="/images/zenbook.png" className="lg:w-[343.52px] h-[196.77px] mt-[44.02px] relative" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;