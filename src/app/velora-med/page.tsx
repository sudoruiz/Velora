import Header from "@/components/Header";
import Section1 from "./components/Section1";
import HeaderMobile from "../news/components/HeaderMobile";
import Section1Mobile from "./components/Section1Mobile";
import Section2 from "./components/Section2";
import Section2Mobile from "./components/Section2Mobile";
import Section3 from "./components/Section3";
import Section3Mobile from "./components/Section3Mobile";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";

const WhoWeAre = () => {
    return (
        <div>
            <div className="bg-[url('/images/velora-med-image-mobile.png')] md:bg-[url('/images/image-velora-med.png')] h-[613px] md:h-[652px] bg-cover pt-2 md:pt-[48.29px] relative flex flex-col md:items-start items-center">
                <Header />
                <div className="w-full">
                    <HeaderMobile />
                </div>
                <Section1 />
                <Section1Mobile />

            </div>
            <Section2 />
            <Section2Mobile />
            <Section3 />
            <Section3Mobile />
            <Footer />
            <FooterMobile />
        </div>
    );
};

export default WhoWeAre;