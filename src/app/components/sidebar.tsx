import Link from "next/link"
import HomeIcon from "../icons/home"
import LinkedInIcon from "../icons/linkedin"

export default function Sidebar() {
  return (
    <div className="md:border-r border-gray-100 md:h-screen md:pt-[30%] flex gap-[1rem] flex-row md:flex-col fixed md:relative bottom-0 left-0 justify-center items-center py-[1rem] md:py-0 w-full md:w-auto md:pr-[2rem] bg-white">
      <Link href="/" title="Home">
        <HomeIcon className="text-primary" />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/wnipunperera"
        title="LinkedIn"
      >
        <LinkedInIcon className="text-primary" />
      </Link>
    </div>
  )
}
