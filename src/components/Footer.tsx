import Link from "next/link";

const Footer = () => {
    return (
        <div className="md:block hidden w-full h-[468.4px] bg-[#F2F2F2] px-[120px]">
            <div className="mt-12 h-[74.4px] flex flex-row justify-between border-b border-[#7C8EB2]">
                <img src="/images/logo-footer.png" className="w-[213.07px] h-[50.4px]" />
                <div className="h-12 flex items-center gap-[26px]">
                    <p className="text-[#707070] text-lg">
                        Redes sociais
                    </p>
                    <div className="flex gap-[26px]">
                        <div className="bg-[#7C8EB2] w-12 h-12" />
                        <div className="bg-[#7C8EB2] w-12 h-12" />
                        <div className="bg-[#7C8EB2] w-12 h-12" />
                    </div>
                </div>
            </div>
            <div className="mt-[25px] flex flex-row justify-between">
                <div className="flex flex-col">
                    <img src="/images/desktop-inovation.png" />
                    <div className="text-[#707070] w-[288px] mt-8">
                        <p>Endereço: R. Alta, 00- Centro, Natal.</p>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center mt-6">
                                <img src="/icons/mail-icon.png" className="w-[19px] h-[15px] mr-[14.5px]" alt="Email Icon" />
                                <p className="text-[#707070] text-[18px]">email@email.com</p>
                            </div>
                            <div className="flex flex-row items-center mt-[29px] ">
                                <img src="/icons/phone-icon.png" className="w-[22.67px] h-[22.67px] mr-[14.5px]" alt="Phone Icon" />
                                <p className="text-[#707070] text-[18px]">Telefone</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[124px] flex flex-row gap-[22px]">
                    <div className="flex flex-col">
                        <h1 className="text-[#202A40] font-bold text-lg">
                            Conteúdo
                        </h1>
                        <Link href={'/'}>
                            <p className="text-lg text-[#707070] cursor-pointer">
                                Home
                            </p>
                        </Link>
                        <p className="text-lg text-[#707070] cursor-pointer">
                            Quem somos
                        </p>
                        <Link href="/blog">
                            <p className="text-lg text-[#707070] cursor-pointer">
                                Blog
                            </p>
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[#202A40] font-bold text-lg">
                            Soluções
                        </h1>
                        <p className="text-lg text-[#707070]">
                            Velora Med
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#7C8EB2] mt-[25px] flex flex-row justify-between">
                <p className="text-[#707070]">
                    Velora- Todos os direitos reservados
                </p>
                <div className="flex gap-[26px]">
                    <p className="text-[#707070]">
                        Desenvolvido por:
                    </p>
                    <p className="text-[#707070]">
                        Projetil Tech
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;