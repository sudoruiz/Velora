interface InfoCardDesktopProps {
    title: string;
    text: string;
    height?: string;
}

const InfoCardDesktop = ({ title, text, height = "280px" }: InfoCardDesktopProps) => {
    return (
        <div
            className="bg-[#151516] border border-[#282829] w-[562.5px] mt-6 md:block hidden"
            style={{ height }}
        >
            <div className="flex flex-row items-center gap-5 mt-[20px]">
                <img src="icons/chip-icon.png" className="mt-3 ml-4 mb-4" alt="Icon" />
                <h1 className="font-rajdhani text-2xl text-[#CBD4E7] ml-4 mb-4 w-[240px] leading-30px">{title}</h1>
            </div>
            <p className="text-[#A9A9A9] ml-4 leading-19px w-[90%] mt-3">{text}</p>
        </div>
    );
};

export default InfoCardDesktop;