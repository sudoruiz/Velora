import Footer from "@/components/Footer";
import Section1 from "./components/Section1";
import Section1Mobile from "./components/Section1Mobile";
import Section2 from "./components/Section2";
import Section2Mobile from "./components/Section2Mobile";
import FooterMobile from "@/components/FooterMobile";

const WhoWeAre = () => {
    return (
        <div>
            <Section1 />
            <Section1Mobile />
            <Section2 />
            <Section2Mobile />
            <Footer />
            <FooterMobile />
        </div>
    );
};

export default WhoWeAre;