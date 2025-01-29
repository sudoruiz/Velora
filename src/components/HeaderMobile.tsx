"use client";

import Menu from "./hamburger";

const HeaderMobile = () => {
    return (
        <div className="flex flex-row w-full justify-between items-center md:hidden">
            <img src="/images/logo-mobile.png" className="h-[23px] w-[97.23px]"/>
            <Menu />
        </div>
    );
};

export default HeaderMobile;