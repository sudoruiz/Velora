import NewsCardMobile from "./NewsCardsMobile";

const CarouselMobile = () => {
    return (
        <div className="pt-8 flex flex-col items-center md:hidden">
            <div>
                <h1 className="font-rajdhani text-[#0A0A0A] text-2xl leading-[30.62px]">
                    Notícias em destaques
                </h1>
            </div>
            <NewsCardMobile
                imgSrc="/images/building.jpg"
                text="Ser o hub de inovação tecnológica, promovendo a revolução digital com
                        soluções práticas e acessíveis, focadas em resultados mensuráveis."
                id="1"
            />
            <NewsCardMobile
                imgSrc="/images/flert.png"
                text="Ser o hub de inovação tecnológica, promovendo a revolução digital com 
                        soluções práticas e acessíveis, focadas em resultados mensuráveis."
                id="2"
            />
            <NewsCardMobile
                imgSrc="/images/badge.png"
                text="Ser o hub de inovação tecnológica, promovendo a revolução digital com 
                        soluções práticas e acessíveis, focadas em resultados mensuráveis."
                id="3"
            />
            <NewsCardMobile
                imgSrc="/images/woman.png"
                text="Ser o hub de inovação tecnológica, promovendo a revolução digital com 
                        soluções práticas e acessíveis, focadas em resultados mensuráveis."
                id="4"
            />
            <NewsCardMobile
                imgSrc="/images/handshake.jpg"
                text="Ser o hub de inovação tecnológica, promovendo a revolução digital com 
                        soluções práticas e acessíveis, focadas em resultados mensuráveis."
                id="5"
            />
        </div>
    );
};

export default CarouselMobile;