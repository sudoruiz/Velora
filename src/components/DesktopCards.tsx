interface DesktopCardProps {
    text: string;
    textWidth: string;
    iconSrc: string;
}

const DesktopCard = ({
    text,
    iconSrc,
}: DesktopCardProps) => {
    return (
        <div className="relative mb-[15px]">
            <img src="images/rectangle-desktop.png" className="opacity-[0.70] h-[231.34px]" />
            <div className="absolute inset-0 w-full h-full">
                <div className="mt-[53.3px] ml-[25.44px] flex flex-col h-[124px] w-[142.26px] justify-between">
                    <img
                        src={iconSrc}
                        className="w-10"
                    />
                    <h1
                        className={`text-[#F6F9FF] font-medium text-[18px]`}
                    >
                        {text}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default DesktopCard;