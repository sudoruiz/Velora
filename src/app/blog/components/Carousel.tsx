"use client";

import { useRef } from "react";
import NewsCard from "./NewsCards";

function Carousel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <div className="pt-[120.24px] hidden md:block">
            <div className="ml-[120px] mr-[129.25px] flex flex-row justify-between items-center">
                <h1 className="text-[#F2F2F2] font-rajdhani text-5xl leading-[61.25px]">
                    Notícias em destaques
                </h1>
                <div className="flex flex-row h-[18px] gap-[18px]">
                    <img
                        src="/images/arrow-left-icon.png"
                        className="w-[34px] h-[18px] cursor-pointer"
                        onClick={scrollLeft}
                    />
                    <img
                        src="/images/purple-arrow-right-icon.png"
                        className="w-[34px] h-[18px] cursor-pointer"
                        onClick={scrollRight}
                    />
                </div>
            </div>

            <div
                ref={carouselRef}
                className="mt-[140px] flex gap-12 overflow-x-scroll scroll-smooth no-scrollbar mx-2"
                onWheel={(e) => {
                    if (e.shiftKey) {
                        e.preventDefault();
                        carouselRef.current?.scrollBy({ left: e.deltaY });
                    }
                }}
            >
                <NewsCard
                    imageSrc="/images/building.jpg"
                    text="Ser o hub de inovação tecnológica, promovendo a revolução digital com soluções práticas e acessíveis, focadas em resultados mensuráveis."
                    id='1'
                />
                <NewsCard
                    imageSrc="/images/flert.png"
                    text="Ser o hub de inovação tecnológica, promovendo a revolução digital com soluções práticas e acessíveis, focadas em resultados mensuráveis."
                    id='2'
                />
                <NewsCard
                    imageSrc="/images/badge.png"
                    text="Ser o hub de inovação tecnológica, promovendo a revolução digital com soluções práticas e acessíveis, focadas em resultados mensuráveis."
                    id='3'
                />
                <NewsCard
                    imageSrc="/images/woman.png"
                    text="Ser o hub de inovação tecnológica, promovendo a revolução digital com soluções práticas e acessíveis, focadas em resultados mensuráveis."
                    id='4'
                />
                <NewsCard
                    imageSrc="/images/handshake.jpg"
                    text="Ser o hub de inovação tecnológica, promovendo a revolução digital com soluções práticas e acessíveis, focadas em resultados mensuráveis."
                    id='5'
                />
            </div>
        </div>
    );
}

export default Carousel;