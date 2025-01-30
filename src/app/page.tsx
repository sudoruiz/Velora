import Card from "@/components/home/Cards";
import DesktopCard from "@/components/home/DesktopCards";
import FixedSection from "@/components/home/FixedSection";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import InfoCard from "@/components/home/InfoCards";
import InfoCardDesktop from "@/components/home/InfoCardsDesktop";
import TopicCard from "@/components/home/TopicCards";
import TopicCardDesktop from "@/components/home/TopicCardsDesktop";

export default function Home() {
  return (
    <div className="h-auto flex flex-col">
      <div
        className="w-full relative bg-[url('/images/image-mobile.png')] md:bg-[url('/images/image.png')] bg-cover bg-center h-[723px] md:h-[806px] pt-6 px-3 md:px-0 flex flex-col md:items-start items-center"
      >
        <HeaderMobile />
        <Header />
        <img src="images/logo-icon-2.png" className="absolute left-0 top-0 opacity-[0.10] hidden md:block" />
        <img src="images/logo-icon-3.png" className="absolute right-0 top-[195.32px] opacity-[0.10] hidden md:block" />
        <div className="mt-[77.24px] md:mt-[149.6px] w-72 md:w-full md:pl-[12.6%]">
          <h1 className="text-[#F2F2F2] font-bold text-2xl md:text-5xl">
            Inovação é Resultado.
          </h1>
          <p className="mt-6 text-[#F2F2F2] w-[75%] leading-19px md:text-[40px] md:leading-48px md:min-w-[600.48px] md:max-w-[700.48px]">
            Investimos em soluções tecnológicas que constroem o resultado do amanhã.
          </p>
        </div>
        <div className="w-full flex justify-center md:mt-[126.01px]">
          <FixedSection />
          <div className="relative mt-2 md:hidden">
            <img src="/images/fixed-card-mobile.png" className="fixed-card-blur z-20" />
            <button className="find-out-more rounded-lg border border-[#C7C7C77D] text-[#F2F2F2] leading-[19.36px] w-[115.71px] h-[32.48px] rounded-br-2xl absolute top-0 left-0 ">
              Saiba mais
            </button>
            <div className="absolute top-[76px] left-3 flex flex-col gap-8">
              <div className="flex flex-row gap-6 items-center">
                <img src="/icons/chip-minimalist.png" className="w-[56.19px] h-[65.92px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold font-lg text-[#F2F2F2] leading-[16.94px] text-sm">
                    Inovação viável
                  </h1>
                  <p className="text-[#F2F2F2] leading-[19.36px]">
                    Investimos em soluções práticas e viaveis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center">
                <img src="/icons/chip-minimalist.png" className="w-[56.19px] h-[65.92px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold font-lg text-[#F2F2F2] w-[172px] leading-[16.94px] text-sm">
                    Tecnologia acessível
                  </h1>
                  <p className="text-[#F2F2F2] leading-[19.36px]">
                    Acreditamos em um mundo com tecnologia acessível para todos.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center">
                <img src="/icons/chip-minimalist.png" className="w-[56.19px] h-[65.92px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold font-lg text-[#F2F2F2] w-[170px] leading-[16.94px] text-sm">
                    Resultados mensuraveis
                  </h1>
                  <p className="text-[#F2F2F2] leading-[19.36px]">
                    Soluções praticas que trazem resultado!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/logo-icon-mobile.png"
          className="absolute bottom-0 right-0 md:hidden block opacity-[0.10] top-[161px] z-10 fixed-card-blur"
        />
      </div>
      <div className="bg-[#0A0A0A] min-h-screen flex flex-col lg:flex-row xl:justify-center items-center md:items-start pt-8 relative">
        <div className="w-full flex flex-col items-center lg:items-start">
          <img src="images/large-graphic.png" className="hidden md:block" />
        </div>
        <div className="flex flex-col md:mt-[100px] items-center lg:items-start w-full">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-[#F2F2F2] text-2xl md:text-[32px] font-rajdhani font-bold w-[283px] md:max-w-[500px] md:min-w-[400px] md:leading-10">
              Escalamos negócios através da tecnologia simplificada.
            </h1>
            <img
              src="images/graphic.png"
              className="mt-[34px] block md:hidden"
            />
            <p className="text-[#A9A9A9] w-[270px] md:w-[45%] md:min-w-[400px] md:mt-6 md:text-[18px] md:leading-[21.78px]">
              Nossa expertise em crescimento estratégico proporciona resultados tangíveis, otimizando processos e oferecendo eficiência de forma prática e acessível.
            </p>
          </div>
          <div className="w-[270px] md:w-[65%] mb-3 flex flex-col xl:flex-row items-center md:justify-between">
            <h1 className="font-rajdhani text-[#F2F2F2] font-bold mt-6 md:text-[18px]">
              Como fazemos?
            </h1>
            <div className="flex flex-row items-center ">
              <h1 className="text-[#F2F2F2] whitespace-nowrap md:mr-[11px] hidden md:block mt-6 md:text-[18px] hover:text-[#3b3b3b] transition-colors duration-300 cursor-pointer">
                Fale conosco
              </h1>
              <img src="icons/arrow-icon.png" className="w-6 h-4 hidden md:block mt-6 cursor-pointer" />
            </div>

          </div>
          <div className="flex flex-col md:flex-row gap-[15px] md:hidden">
            <Card
              text="Tecnologia ao seu alcance"
              textPosition={{ top: '134px', left: '63px' }}
              iconSrc="icons/target-icon.png"
              iconPosition={{ top: '59px', left: '119px' }}
              textWidth="150px"
            />
            <Card
              text="Resultados mensuráveis"
              textPosition={{ top: '134px', left: '40px' }}
              iconSrc="icons/results-icon.png"
              iconPosition={{ top: '59px', left: '119px' }}
              textWidth="200px"
            />
            <Card
              text="Automação estratégica"
              textPosition={{ top: '134px', left: '40px' }}
              iconSrc="icons/automation-icon.png"
              iconPosition={{ top: '59px', left: '119px' }}
              textWidth="200px"
            />
          </div>
          <div className="hidden md:flex flex-col xl:flex-row gap-[15px] items-center">
            <div className="flex flex-col gap-[15px] xl:flex-row items-center">
              <DesktopCard
                text="Tecnologia ao seu alcance"
                iconSrc="icons/target-icon.png"
                textWidth="150px"
              />
              <DesktopCard
                text="Resultados mensuráveis"
                iconSrc="icons/results-icon.png"
                textWidth="200px"
              />
            </div>
            <DesktopCard
              text="Automação estratégica"
              iconSrc="icons/automation-icon.png"
              textWidth="200px"
            />
          </div>
        </div>
        <div className="mt-[19px] flex flex-row w-[270px] justify-between items-center px-[75px] mb-[106px] md:hidden">
          <h1 className="text-[#F2F2F2] whitespace-nowrap md:mr-[11px] ">
            Fale conosco
          </h1>
          <img src="icons/arrow-icon.png" className="w-4 h-4" />
        </div>
        <h1 className="text-[#F2F2F2] font-rajdhani text-2xl w-[290px] block md:hidden">
          Soluções Inteligentes, resultados viáveis.
        </h1>
        <InfoCard
          title="Redução de custos e aumento de eficiência"
          text="Nossa tecnologia elimina tarefas repetitivas e processos manuais, reduzindo o erro humano e otimizando o tempo da equipe."
          height="280px"
        />
        <InfoCard
          title="Personalização para o seu setor"
          text="Entendemos as necessidades específicas de cada setor e desenvolvemos soluções feitas sob medida para otimizar o
          desempenho e maximizar os resultados."
          height="314px"
        />
        <div
          className="absolute top-0 left-0 w-full h-full md:bg-[url('/images/black-background.png')] md:opacity-[0.15] md:bg-cover md:bg-center pointer-events-none"
        ></div>
      </div>
      <div className="bg-[#0A0A0A] min-h-[582px] hidden md:flex flex-col lg:flex-row xl:justify-center items-center md:items-start pt-8 relative">
        <div className="absolute top-0 left-0 w-full h-full md:bg-[url('/images/black-background.png')] md:opacity-[0.15] md:bg-cover md:bg-center pointer-events-none z-0"></div>
        <div className="relative z-10 flex flex-col lg:flex-row w-full lg:justify-center">
          <div className="flex flex-col lg:mr-8 items-center">
            <InfoCardDesktop
              title="Redução de custos e aumento de eficiência"
              text="Nossa tecnologia elimina tarefas repetitivas e processos manuais, reduzindo o erro humano e otimizando o tempo da equipe."
              height="217.92px"
            />
            <InfoCardDesktop
              title="Personalização para o seu setor"
              text="Entendemos as necessidades específicas de cada setor e desenvolvemos soluções feitas sob medida para otimizar o
              desempenho e maximizar os resultados."
              height="217.92px"
            />
          </div>
          <h1 className="text-[#F2F2F2] font-rajdhani text-[40px] lg:text-[45px] w-full lg:w-[30%] mt-8 lg:mt-[180px] text-center lg:text-left">
            Soluções Inteligentes, resultados viáveis.
          </h1>
        </div>
      </div>

      <div className="bg-[url('/images/speed-up-background-mobile.png')] md:bg-[url('/images/background-home-29-01.png')] bg-cover bg-center h-auto min-h-[1260px] pt-6 md:pt-[165px] px-3 flex flex-col items-center">
        <div
          className="relative flex flex-col items-center"
        >
          <div className="md:w-full md:flex md:justify-center">
            <div className="w-[288px] md:w-[730px] mt-8 flex flex-col">
              <p className="text-[#F2F2F2] md:text-[24px]">
                Nossa Abordagem
              </p>
              <h1 className="text-[#F2F2F2] font-rajdhani text-2xl md:text-[48px] md:w-full md:mt-3">
                Velocidade, verdade e viabilidade
              </h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:hidden">
            <TopicCard
              number="1"
              title="Análise"
              text="Analisamos profundamente as necessidades do seu negócio."
              textWidth={{
                base: "w-[170px]",
                md: "w-[170px]",
              }}
            />
            <TopicCard
              number="2"
              title="Implementação"
              text="Desenvolvemos uma solução sob medida para otimizar os
                processos específicos da sua empresa."
              textWidth={{
                base: "w-[220px]",
                md: "w-[220px]",
              }}
            />
            <TopicCard
              number="3"
              title="Desenvolvimento"
              text="Implementamos e monitoramos a eficácia, ajustando conforme
                necessário para garantir os melhores resultados."
              textWidth={{
                base: "w-[220px]",
                md: "w-[220px]",
              }}
            />
          </div>
          <div className="hidden flex-col lg:flex-row items-center lg:flex">
            <TopicCardDesktop
              number="1"
              title="Análise"
              text="Analisamos profundamente as necessidades do seu negócio."
              textWidth={{
                base: "300px",
                md: "w-[170px]",
              }}
            />
            <TopicCardDesktop
              number="2"
              title="Implementação"
              text="Desenvolvemos uma solução sob medida para otimizar os
                processos específicos da sua empresa."
              textWidth={{
                base: "300px",
                md: "w-[220px]",
              }}
            />
            <TopicCardDesktop
              number="3"
              title="Desenvolvimento"
              text="Implementamos e monitoramos a eficácia, ajustando conforme
                necessário para garantir os melhores resultados."
              textWidth={{
                base: "300px",
                md: "w-[220px]",
              }}
            />
          </div>
          <div className="mt-[120px] ml-4 relative hidden lg:block">
            <img src="images/colorful-rectangle.png" className="opacity-[0.40] h-[304px]" />
            <div className="absolute top-[73.67px] left-[46.31px] w-[470px]">
              <p className="font-medium text-white text-2xl leading-[29.05px]">
                Transforme a gestão da sua empresa e
              </p>
              <h1 className="font-medium text-white text-[40px] leading-[48.8px]">
                acelere sua jornada para a inovação.
              </h1>
            </div>
            <div className="absolute top-[170.67px] left-[308.75px] w-[167px] flex flex-row items-center justify-around">
              <p className="text-[18px] text-[#F2F2F2] hover:text-[#3b3b3b] transition-colors duration-300 cursor-pointer">
                Fale conosco
              </p>
              <img src="icons/arrow-icon.png" className="w-6 h-4 hidden md:block cursor-pointer" />
            </div>
            <img src="images/colorful-logo.png" className="absolute left-[73.5%] top-[28.81px] opacity-[0.65]" />
          </div>
          <div className="mt-8  relative lg:hidden block w-72 mb-4">
            <img src="images/card-home-mobile.png" className="opacity-[0.70] h-[420px]" />
            <div className="absolute top-[73.67px] left-[23px] w-[242px]">
              <p className="font-medium text-white leading-[19.36px]">
                Transforme a gestão da sua empresa e
              </p>
              <h1 className="font-medium text-white text-2xl leading-[29.05px]">
                acelere sua jornada para a inovação.
              </h1>
            </div>
            <div className="absolute top-[195px] left-[33px] w-[167px] flex flex-row items-center gap-[10px]">
              <p className="text-[18px] text-[#F2F2F2] hover:text-[#3b3b3b] transition-colors duration-300 cursor-pointer">
                Fale conosco
              </p>
              <img src="icons/speed-up-arrow-mobile.png" className="md:block cursor-pointer" />
            </div>
            <img src="images/colorful-logo.png" className="absolute left-[81px] top-[260.5px] opacity-[0.65] w-[126px] h-[143px]" />
          </div>
        </div>
      </div>
      <FooterMobile />
      <Footer />
    </div>
  );
}
