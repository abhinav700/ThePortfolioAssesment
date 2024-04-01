import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

function Project({ data }: any) {
  return (
    <div className="w-[350px] rounded overflow-hidden shadow-lg mx-2 my-2 relative ">
      <div
        className={`relative h-52 md:h-72 bg-cover bg-center group`}
        style={{ backgroundImage: `url(${data.image.url})` }}
      >
        <div className="overlay absolute  w-full h-full bg-[#9e9e9e] bg-opacity-0 hidden group-hover:flex group-hover:cursor-pointer group-hover:justify-center group-hover:flex-wrap group-hover:items-center group-hover:bg-opacity-80 transition-all duration-2000">
          <Link href={data.githuburl} style={{ textDecoration: 'none' }}>
            <div className="rounded-lg hover:bg-opacity-70 mx-3 text-white flex flex-row items-center justify-center bg-[#383837] px-2 py-2">
              View Code
              <FaGithubSquare className="mx-1 hover:opacity-70" size={20} />
            </div>
          </Link>
          <Link href={data.liveurl} style={{ textDecoration: 'none' }}>
            <div className="rounded-lg hover:bg-opacity-70 mx-3 text-white flex flex-row items-center justify-center bg-[#383837] px-2 py-2">
              Live Project
              <FaCode className="mx-1 hover:opacity-70" size={20} />
            </div>
          </Link>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.techStack}</p>
        <p>{data.description} </p>
      </div>
    </div>
  );
}

export default Project;
