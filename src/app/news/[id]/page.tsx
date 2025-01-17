"use client"

import Header from "@/components/Header";
import { newsData } from "../../data/newsData";
import HeaderMobile from "../components/HeaderMobile";
import News from "./components/News";
import NewsMobile from "./components/NewsMobile";
import Carousel from "./components/Carousel";
import CarouselMobile from "./components/CarouselMobile";
import FooterMobile from "@/components/FooterMobile";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

interface NewsDetailProps {
    params: Promise<{ id: string }>;
  }
  
  function NewsDetail({ params }: NewsDetailProps) {
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  
    useEffect(() => {
      params.then((resolved) => setResolvedParams(resolved));
    }, [params]);
  
    if (!resolvedParams) {
      return <p>Carregando...</p>;
    }
  
    const { id } = resolvedParams;
  
    const newsItem = newsData.find((item) => item.id === id);
  
    if (!newsItem) {
      return <p>Notícia não encontrada.</p>;
    }
  
    return (
      <div className="w-full h-auto">
        <div className="bg-[url('/images/image-news-detail-mobile.png')] md:bg-[url('/images/image-news-detail.png')] h-[156px] md:h-[487px] bg-cover pt-2 md:pt-12">
          <Header />
          <HeaderMobile />
          <div className="absolute w-full mt-[34.24px] md:mt-[88.6px] flex justify-center">
            <img
              src={newsItem.imageSrc}
              className="w-72 h-[197px] md:w-[81.65%] md:h-[575px] "
            />
          </div>
        </div>
        <div className="bg-[#F2F2F2] h-auto min-h-screen">
          <News
            title={newsItem.title}
            date={newsItem.date}
            text={newsItem.text}
          />
          <NewsMobile
            title={newsItem.title}
            date={newsItem.date}
            text={newsItem.text}
          />
          <Carousel />
          <CarouselMobile />
          <Footer />
          <FooterMobile />
        </div>
      </div>
    );
  }
  
  export default NewsDetail;
  
