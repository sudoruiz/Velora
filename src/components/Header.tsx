import Link from "next/link";
import Button from "./Button";

const Header = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="hidden md:flex flex-row items-center w-[87%] justify-between">
                <img src="/images/logo-mobile.png" className="w-[124.14px] h-[29.37px]" />
                <div className="flex flex-row text-[#FFFFFF] text-[18px] gap-12">
                    <Link href="/">
                        <p className="hover:text-[#20201c] transition duration-300 hover:cursor-pointer">
                            Home
                        </p>
                    </Link>
                    <Link href="who-we-are">
                        <p className="hover:text-[#20201c] transition duration-300 hover:cursor-pointer">
                            Quem somos
                        </p>
                    </Link>
                    <Link href="velora-med">
                        <p className="hover:text-[#20201c] transition duration-300 hover:cursor-pointer">
                            Velora Med
                        </p>
                    </Link>
                    <Link href="/blog">
                        <p className="hover:text-[#20201c] transition duration-300 hover:cursor-pointer">
                            Blog
                        </p>
                    </Link>
                </div>

                <Button text="Saiba mais" fontSize="16px" width="115.71px" height="40.4px" />
            </div>
        </div>
    );
};

export default Header;