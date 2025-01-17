import Button from "@/components/Button";
import Link from "next/link";

const Header = () => {
    return (
        <div className="w-full justify-center pt-12 hidden md:flex">
            <div className="flex flex-row items-center w-[87%] justify-between">
                <img src="images/logo-mobile.png" className="w-[124.14px] h-[29.37px]" />
                <div className="flex flex-row text-[#FFFFFF] text-[18px] gap-12">
                    <Link href="/">
                        <p className="hover:text-[#20201c] transition duration-300 hover:cursor-pointer">
                            Home
                        </p>
                    </Link>
                    <p className="hover:text-[#20201c] transition duration-300 hover:cursor-pointer">Quem somos</p>
                    <Link href="/blog">
                        <p className="hover:text-[#20201c] transition duration-300 hover:cursor-pointer">
                            Blog
                        </p>
                    </Link>
                </div>

                <Button text="Entrar em contato" fontSize="16px" width="169px" height="40.4px" />
            </div>
        </div>
    );
};

export default Header;