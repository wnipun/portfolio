import Image from "next/image"
import Card from "../components/card"
import nextConfig from "../../../next.config"
import { Metadata } from "next"
import Wysiwyg from "../components/wysiwyg"

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
      <Wysiwyg className="mt-[2rem]">
        <p>
          I&apos;m a full stack web developer with 8+ years of experience
          delivering scalable, high-quality web applications across various
          industries. From frontend frameworks like React, Vue.js, and
          TypeScript to backend systems with PHP (Laravel) and Node.js, I take
          pride in turning complex requirements into clean, reliable code.
        </p>

        <p>
          I&apos;ve managed end-to-end projects, mentored developers, and
          improved workflows through CI/CD automation and agile practices.
          I&apos;m also experienced in cloud infrastructure, primarily AWS and
          Google Cloud.
        </p>

        <p>
          <u>What drives me?</u> Building solutions that not only work well but
          make a real impact.
        </p>
      </Wysiwyg>

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
