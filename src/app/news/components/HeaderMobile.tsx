import Menu from "@/components/hamburger";

const HeaderMobile = () => {
    return (
        <div className="px-4 flex flex-row justify-between pt-6 md:hidden">
            <img src="/images/logo-mobile-blog.png" />
            <Menu />
        </div>
    );
};

export default HeaderMobile;