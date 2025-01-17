interface NewsMobileProps {
    title: string;
    date: string;
    text: string;
}

const NewsMobile = ({ title, date, text }: NewsMobileProps) => {
    return (
        <div className="mt-[141px] flex flex-col md:hidden items-center">
            <h1 className="text-[#0A0A0A] font-rajdhani leading-[20.42px] w-72">
                {title}
            </h1>
            <div className="w-72 mt-[16.5px]">
                <div className="flex flex-row gap-[13px]">
                    <img src="/icons/calendar-icon-mobile.png" className="w-3 h-[13.33px]" />
                    <p className="text-xs text-[#5E5E5E] leading-[14.52px]">
                        {date}
                    </p>
                </div>
            </div>
            <div className="w-72 mt-[25.33px]">
                <p className=" text-[#5E5E5E] leading-[19.36px]">
                    {text.split('. ').map((paragraph, index) => (
                        <span key={index} className="block mb-5">
                            {index === text.split('. ').length - 1 ? paragraph : `${paragraph}.`}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default NewsMobile;
