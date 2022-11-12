import { PageHeader, SectionHeader } from "@components/index";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Page() {
  return (
    <section>
      <PageHeader title="contacts" subtitle="Reach out to me" />
      <main className="w-[90%] md:w-4/5 mx-auto min-h-[50vh]">
        <div className="flex flex-col md:flex-row gap-y-4 my-6">
          <div className="">
            <p>
              I&apos;m interested in fulltime or freelance opportunities,
              However If you have other request or question, don&apos;t hesitate
              to contact me
            </p>
          </div>
          <div className="flex flex-col outline p-2 outline-1 outline-appGray">
            <h5 className="text-white">Message me here</h5>
            <a
              href="https://t.me/mrshanas"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-1"
            >
              <FaTelegramPlane />
              @mrshanas
            </a>

            <a
              href="mailto:nassibshaban345@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-1"
            >
              <HiOutlineMail />
              nassibshaban345@gmail.com
            </a>
          </div>
        </div>
        <SectionHeader title="all-media" hideViewLink showLine={false} />
        <div className="my-6">
          <div className="flex justify-start items-center gap-x-6">
            <a
              href="https://twitter.com/mrshanas"
              target="_blank"
              rel="noreferrer"
              className="scale-[2]"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://github.com/mrshanas"
              target="_blank"
              rel="noreferrer"
              className="scale-[2]"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://instagram.com/mr__shanas"
              target="_blank"
              rel="noreferrer"
              className="scale-[2]"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://linkedin.com/mr__shanas"
              target="_blank"
              rel="noreferrer"
              className="scale-[2]"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://wa.me/+255788277549"
              target="_blank"
              rel="noreferrer"
              className="scale-[2]"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}
