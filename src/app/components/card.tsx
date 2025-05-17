import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default function Card({ title, description, image, link }: CardProps) {
  return (
    <div className="flex items-center gap-[1rem] border-b border-b-gray-100 py-[1.5rem]">
      <div className="shrink-0">
        <Image src={image} alt={title} width={100} height={100} className="w-[100px] h-[100px] object-cover rounded-md"/>
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-[0.5rem]"><Link href={link} className="font-bold text-primary hover:underline">View</Link></div>
      </div>
    </div>
  );
}