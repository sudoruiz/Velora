import Button from "./Button";

const Section1 = () => {
    return (
        <div className="md:flex flex-col lg:flex-row mt-[210px] px-[120px] justify-between lg:items-center hidden">
            <div className="flex flex-col">
                <h1 className="text-[#F2F2F2] font-rajdhani text-5xl leading-[61.25px]">
                    Inovação é Resultado
                </h1>
                <p className="text-[#F2F2F2] font-medium text-xl leading-[24.2px] w-[545px]">
                    Acesse conteúdos que vão ajudar sua empresa a entender as últimas inovações
                    e como elas podem ser aplicadas para transformar os resultados."
                </p>
                <Button />
            </div>
            <div className="flex flex-col h-[35px] mt-6 lg:mt-0">
                <p className="font-rajdhani text-[#F2F2F2] leading-[20.42px]">
                    01
                </p>
                <div className="flex flex-row gap-[18px]">
                    <img src="images/colorful-bar.png" />
                    <img src="images/gray-bar.png" />
                    <img src="images/gray-bar.png" />
                </div>
            </div>
        </div>
    );
}

export default Section1;