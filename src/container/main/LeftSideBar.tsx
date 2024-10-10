// constant
import Link from "next/link";
import { info } from "../../../constant/informations";
// component
import InfoItem from "./InfoItem";
// icon
import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import Face from "./Face";

export default function LeftSideBar() {
  return (
    <section className="w-[300px] h-full bg-container rounded-lg flex flex-col items-center justify-center">
      {/* Profile */}
      <div>
        <div className="rounded-lg w-[200px] h-[200px] bg-gray-700 mt-[30px]">
          <Face />
        </div>
      </div>
      <div className="mt-7">
        <span className="text-white text-2xl font-bold">John Han</span>
      </div>
      <div className="mt-5">
        <span className="text-white py-2 px-4 bg-gray-700 rounded-lg">
          Frontend Developer
        </span>
      </div>
      {/* Divider */}
      <div className="h-[1px] w-[250px] bg-gray-400 mx-3 my-7"></div>
      {/* Info & Links */}
      <div className="w-full flex flex-col gap-y-5 px-[20px]">
        {info.map((item) => (
          <InfoItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            detail={item.detail}
          />
        ))}
      </div>
      <div className="w-full items-center justify-center flex gap-x-5 my-7">
        <Link href="https://www.instagram.com/yoy0z_maps/">
          <FaInstagram size={24} color="gray" />
        </Link>
        <Link href="https://www.youtube.com/channel/UC8-_5555555555555555">
          <FaYoutube size={24} color="gray" />
        </Link>
        <Link href="https://github.com/yoy0z">
          <FaGithub size={24} color="gray" />
        </Link>
      </div>
    </section>
  );
}
