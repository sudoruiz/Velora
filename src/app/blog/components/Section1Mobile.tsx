import Button from "./Button";

const Section1Mobile = () => {
    return (
        <div className="pl-4 pr-[21px] mt-[210.24px] flex flex-col md:hidden">
            <h1 className="font-rajdhani text-2xl leading-[30.62px] text-[#F2F2F2]">
                Inovação é Resultado
            </h1>
            <p className="text-[#F2F2F2] font-medium leading-[19.36px] mt-6 mb-6">
                Acesse conteúdos que vão ajudar sua empresa a entender as últimas inovações e como
                elas podem ser aplicadas para transformar os resultados."
            </p>
            <Button />
            <div className="flex flex-col h-[35px] mt-[30px]">
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
};

export default Section1Mobile;