import Image from "next/image"
import Card from "../components/card"
import nextConfig from "../../../next.config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nipun Perera - Full Stack Developer",
  description: "Portfolio of Nipun Perera, a full stack developer.",
  openGraph: {
    title: "Nipun Perera - Full Stack Developer",
    description: "Portfolio of Nipun Perera, a full stack developer.",
    url: "https://nipun.au",
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
    <div>
      <div>
        <Image
          src={`${basePath}/avatar.jpeg`}
          width={100}
          height={100}
          alt="Nipun Perera"
          className="object-cover w-[100px] h-[100px] rounded-full object-top-right"
        />
      </div>
      <h1 className="text-5xl font-bold mt-[1rem]">
        Full stack developer with a{" "}
        <span className="text-primary underline decoration-secondary underline-offset-2">
          passion
        </span>{" "}
        for writing code.
      </h1>
      <p className="mt-[1rem] text-[15px]">
        Seasoned Full Stack Developer and technical team leader with over 8
        years of experience delivering high-quality, scalable web solutions
        across diverse industries. Adept at leading end-to-end development
        projects, mentoring junior developers, and translating business
        requirements into robust technical architecture. Expertise spans modern
        frontend frameworks (React, Vue.js, TypeScript), backend technologies
        PHP (Laravel), Node.js, API integration, and cloud infrastructure (AWS,
        Google Cloud). Known for fostering collaborative team environments,
        driving process improvements through CI/CD automation, and aligning
        technical delivery with business strategy. Backed by a bachelor&apos;s degree
        in information and communication technology from Swinburne University
        and a Professional Year certification from the Australian Computer
        Society.
      </p>
      <h2 className="font-bold text-xl mt-[2rem]">My Work</h2>
      <div className="grid grid-cols-1 gap-[1rem] mt-[1rem]">
        <Card
          title={"Gym Membership Management Portal"}
          description={"Laravel, Vue.js, Typescript, Tailwind, REST API, MySQL"}
          image={`${basePath}/ihf-crm/thumbnail.png`}
          link={"/gym-membership-management-portal"}
        />
      </div>
    </div>
  )
}
