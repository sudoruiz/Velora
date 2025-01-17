const Section2 = () => {
    return (
        <div className="hidden bg-[url('/images/image-blog.png')] h-[451px] bg-cover bg-center mt-[50px] lg:mt-[114.76px] md:flex justify-center items-center">
            <div className="relative flex flex-row">
                <img src="images/blog-rectangle.png" className="opacity-[0.68]" />
                <div className="absolute top-[44.98px] left-[56.1px] flex flex-col">
                    <h1 className="font-rajdhani text-5xl leading-[61.25px] text-[#F2F2F2] w-[406.6px]">
                        Assine Nossa Newsletter
                    </h1>
                    <p className="text-[#A9A9A9] text-lg leading-[21.78px] w-[380px] mt-0 lg:mt-8">
                        Receba diretamente no seu e-mail as últimas novidades sobre inovação, inteligência artificial
                        e como otimizar seus processos empresariais.
                    </p>
                </div>
                <div className="flex flex-col absolute top-[100.14px] lg:left-[560.05px] left-[460.05px] gap-[32.06px]">
                    <img src="images/logo-colorful-blog.png" className="w-[159.29px] h-[37.68px]" />
                    <div className="border border-[#EDF2FF40] rounded-[5.64px] w-[278px] h-10 py-[8.5px] pl-[11.28px] flex flex-row items-center">
                        <input
                            type="text"
                            className="bg-transparent outline-none w-[238.53px] placeholder:text-[#F2F2F2] placeholder:leading-[22.87px] text-[#F2F2F2]"
                            placeholder="seu melhor email aqui"
                        />
                        <img src="icons/send-icon.png" className="w-[11.12px] h-[9.58px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;