import Image from "next/image"
import Link from "next/link"
import HomeIcon from "../icons/home"
import Card from "../components/card"
import nextConfig from "../../../next.config"
import { Metadata } from "next"
import LinkedInIcon from "../icons/linkedin"

export const metadata: Metadata = {
  title: "Nipun Perera - Full Stack Developer",
  description: "Portfolio of Nipun Perera, a full stack developer.",
  openGraph: {
    title: "Nipun Perera - Full Stack Developer",
    description: "Portfolio of Nipun Perera, a full stack developer.",
    url: "https://nipunperera.com",
    siteName: "Nipun Perera",
    images: [
      {
        url: "/avatar.jpeg",
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function Home() {
  const basePath = nextConfig.basePath || ""

  return (
    <div className="flex max-w-2xl container mx-auto gap-[4rem]">
      <div className="border-r border-gray-100 h-screen pr-[2rem] pt-[30%] flex gap-[1rem] flex-col">
        <Link href="/" title="Home">
          <HomeIcon className="text-primary" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/wnipunperera" title="LinkedIn">
          <LinkedInIcon className="text-primary" />
        </Link>
      </div>
      <div className="pt-[4rem]">
        <div>
          <Image
            src={`${basePath}/avatar.jpeg`}
            width={100}
            height={100}
            alt="Nipun Perera"
            className="object-cover w-[100px] h-[100px] rounded-full object-top-right"
          />
        </div>
        <h1 className="text-4xl font-bold mt-[1rem]">
          Full stack developer with a{" "}
          <span className="text-primary underline decoration-secondary underline-offset-2">
            passion
          </span>{" "}
          for writing code.
        </h1>
        <p className="mt-[1rem]">
          Web Developer with 8+ years of expertise in Laravel, MySQL, Javascript
          and Cloud Platforms including Amazon AWS and Google Cloud. Proficient
          in React, Vue.js, Craft CMS, GraphQL and Git.
        </p>
        <h2 className="font-bold text-xl mt-[2rem]">My Work</h2>
        <div className="grid grid-cols-1 gap-[1rem] mt-[1rem]">
          <Card
            title={"Card Title"}
            description={"Card Description"}
            image={`${basePath}/avatar.jpeg`}
            link={"/"}
          />
        </div>
      </div>
    </div>
  )
}
