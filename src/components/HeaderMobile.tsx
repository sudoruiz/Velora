import Button from "./Button";

const HeaderMobile = () => {
    return (
        <div className="flex flex-row w-full justify-between items-center md:hidden">
            <img src="images/logo-mobile.png" className="h-[23px] w-[97.23px]"/>
            <Button text="Entrar em contato"/>
        </div>
    );
};

export default HeaderMobile;