interface NewsProps {
    title: string;
    date: string;
    text: string;
}

const News = ({ title, date, text }: NewsProps) => {
    return (
        <div className="pt-[347px] px-[271.5px] md:flex flex-col hidden items-center bg-[#F2F2F2]">
            <div className="flex flex-col lg:flex-row justify-between items-end">
                <h1 className="font-rajdhani text-[#0A0A0A] leading-[61.25px] text-5xl w-[730px] font-bold">
                    {title}
                </h1>
                <div className="flex flex-row gap-[15px] items-center h-8">
                    <img src="/images/calendar-icon.png" className="w-6 h-[26.67px]" />
                    <p className="text-[#5E5E5E] leading-[19.36px] ">
                        {date}
                    </p>
                </div>
            </div>
            <p className="mt-12 w-[81.75%] min-w-[480px] text-2xl text-[#5E5E5E] leading-[29.05px]">
                {text.split('. ').map((paragraph, index) => (
                    <span key={index} className="block mb-5">
                        {index === text.split('. ').length - 1 ? paragraph : `${paragraph}.`}
                    </span>
                ))}
            </p>

        </div>
    );
};

export default News;
