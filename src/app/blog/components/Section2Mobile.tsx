const Section2Mobile = () => {
    return (
        <div className="md:hidden bg-[url('/images/image-blog-mobile.png')] h-[484px] bg-cover flex flex-col items-center">
            <div className="relative mt-8">
                <img src="/images/newsletter-card-mobile.png" />
                <h1 className="absolute top-[27px] left-4 text-[#F2F2F2] font-rajdhani leading-[30.62px] text-2xl">
                    Assine Nossa Newsletter
                </h1>
                <p className="absolute top-[90px] left-4 w-[258px] leading-[19.36px] text-center text-[#A9A9A9]">
                    Receba diretamente no seu e-mail as últimas novidades sobre
                    inovação, inteligência artificial e como otimizar seus processos empresariais.
                </p>
                <img src="/images/newsletter-logo-mobile.png" className="absolute top-[258px] left-4" />
                <div className="border border-[#EDF2FF40] rounded-[5.64px] w-[256px] h-10 py-[8.5px] pl-[11.28px] flex flex-row items-center absolute bottom-[52.32px] left-4">
                    <input
                        type="text"
                        className="bg-transparent outline-none w-[216.53px] placeholder:text-[#F2F2F2] placeholder:leading-[22.87px] text-[#F2F2F2]"
                        placeholder="seu melhor email aqui"
                    />
                    <img src="icons/send-icon.png" className="w-[11.12px] h-[9.58px]" />
                </div>
            </div>
        </div>
    );
};

export default Section2Mobile;