import nextConfig from "../../../next.config"
import Image from "next/image"
import ExternalLinkIcon from "../icons/external-link"
import Link from "next/link"
import { Metadata } from "next"
import Title from "../components/title"
import SubTitle from "../components/sub-title"
import Wysiwyg from "../components/wysiwyg"

export const metadata: Metadata = {
  title: "Nipun Perera - Gym Membership Management Portal",
  description: "Gym Membership Management Portal",
  openGraph: {
    title: "Gym Membership Management Portal",
    description: "Gym Membership Management Portal",
    url: "https://nipun.au/gym-membership-management-portal",
    siteName: "Nipun Perera",
    images: [
      {
        url: "/ihf-crm/screen-members.png",
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function Page() {
  const basePath = nextConfig.basePath || ""

  return (
    <>
      <Title title="Gym Membership Management Portal" className="mt-[1rem]" />
      <div className="mt-[1rem]">
        <SubTitle title="Client" text="IronHide Fitness" />
        <SubTitle title="Role" text="Full-Stack Developer" />
        <SubTitle
          title="Tech Stack"
          text="Laravel, Vue.js, Tailwind CSS, REST API, MySQL"
        />
      </div>

      <picture>
        <Image
          src={`${basePath}/ihf-crm/screen-members.png`}
          width={480}
          height={270}
          alt="Gym Membership Management Portal Screenshot"
          className="mt-[2rem]"
        />
        <figcaption className="text-gray-400 text-sm mt-[0.5rem]">
          <Link
            className="hover:underline hover:text-primary"
            href={`${basePath}/ihf-crm/screen-members.png`}
            target="_blank"
          >
            <ExternalLinkIcon className="w-[1rem] h-[1rem] inline-block" />
            <span className="pl-[0.5rem]">
              Gym Membership Management Portal Screenshot
            </span>
          </Link>
        </figcaption>
      </picture>

      <Wysiwyg className="mt-[2rem]">
        <h2>Overview</h2>
        <p>
          IronHide Fitness needed a robust, automated system to replace its
          manual, paper-based member management process. The goal was to create
          a web-based portal that could manage memberships, record payments, and
          control access to the gym through a door system integrated with facial
          recognition.
        </p>
        <h2>Responsibilities</h2>
        <p>
          As the sole developer of the portal, I designed and implemented the
          entire system from the backend to the frontend. This included
          integrating hardware-level API communication, building a responsive
          user interface, and setting up secure RESTful APIs for device
          communication.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Face Recognition-Based Access Control:</strong> Integrated
            with a facial recognition device via REST API to authenticate
            members at the door.
          </li>
          <li>
            <strong>Automated Payment Tracking:</strong> Tracked member payments
            and allowed or restricted access based on payment status.
          </li>
          <li>
            <strong>SMS Payment Reminders:</strong> Connected to a third-party
            SMS gateway to send automated reminders for upcoming or overdue
            payments.
          </li>
          <li>
            <strong>Attendance Management:</strong> Logged and reported both
            member and staff attendance in real-time.
          </li>
          <li>
            <strong>Role-Based Admin Panel:</strong> Provided admin users with
            full control over member records, payment history, and attendance
            data.
          </li>
        </ul>

        <h2>Challenges</h2>
        <p>
          One of the biggest challenges was integrating with the facial
          recognition system, which required working through a complex and
          poorly documented API protocol. Careful reverse engineering and
          extensive testing were necessary to ensure reliable communication
          between the device and the CRM.
        </p>

        <h2>Outcome & Impact</h2>
        <p>
          The portal eliminated the need for manual record-keeping,
          significantly reducing administrative overhead and minimising missed
          or misplaced payments. Members now enjoy seamless, contactless access
          to the gym, while staff benefit from automated reporting and real-time
          data insights.
        </p>
      </Wysiwyg>
    </>
  )
}
