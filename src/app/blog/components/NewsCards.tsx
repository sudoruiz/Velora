import Link from "next/link";

interface NewsCardProps {
  id: string;
  imageSrc: string;
  text: string;
}

function NewsCard({ imageSrc, text, id }: NewsCardProps) {
  return (
    <div className="flex flex-col w-[384px]">
      <img src={imageSrc} alt="Notícia" className="w-[364px] h-[250px] object-cover" />
      <p className="text-[#A9A9A9] w-[274px] leading-[21.78px] font-medium text-lg mt-4">
        {text}
      </p>
      <div className="flex flex-row mt-6 items-center gap-[10px] pl-[10px]">
        <Link href={`news/${id}`} className="flex flex-row items-center gap-[10px]">
          <p className="text-[#F2F2F2] text-lg leading-[21.78px] cursor-pointer">
            Ver mais
          </p>
          <img src="images/small-purple-right-arrow-icon.png" className="w-6 h-[15px] cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
