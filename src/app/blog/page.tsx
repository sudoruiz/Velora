import Footer from "@/components/Footer";
import Carousel from "./components/Carousel";
import CarouselMobile from "./components/CarouselMobile";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import NewsCardMobile from "./components/NewsCardsMobile";
import Section1 from "./components/Section1";
import Section1Mobile from "./components/Section1Mobile";
import Section2 from "./components/Section2";
import Section2Mobile from "./components/Section2Mobile";
import FooterMobile from "@/components/FooterMobile";

export default function Blog() {
    return (
        <div className="w-full h-auto">
            <div className="bg-[url('/images/guy-mobile.png')] h-[568px] bg-no-repeat bg-cover md:bg-[url('/images/guy.png')] md:w-full md:h-[626px] md:bg-no-repeat md:bg-cover">
                <Header />
                <HeaderMobile />
                <Section1 />
                <Section1Mobile />
            </div>
            <div className="bg-[#0A0A0A] h-auto min-h-screen md:h-[864px]">
                <Carousel />
                <CarouselMobile />
                <Section2 />
                <Section2Mobile />
                <Footer />
                <FooterMobile />
            </div>
        </div>
    );
}