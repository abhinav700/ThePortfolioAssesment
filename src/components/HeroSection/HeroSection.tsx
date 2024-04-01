import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = ({ about }: any) => {
  const [name, setName] = useState(about?.name);
  const [description, setDescription] = useState(about?.description.split("."));
  const [subTitle, setSubTitle] = useState(about?.subTitle);
  const [quote, setQuote] = useState(about?.quote);
  const [avatar, setAvatar] = useState(about?.avatar);
  const [title, setTitle] = useState(about.title);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-7">
        <h1 className="sm:text-4xl xs-[100px] md:text-6xl  sm:mx-auto md:h-[150px] h-[50px]">
          Hello, I am{" "}
          <span className="text-[#6b96b0]">
            <TypeAnimation
              sequence={[`${name}`, 2000, `a ${title}`, 2000]}
              wrapper="span"
              speed={55}
              omitDeletionAnimation={false}
              repeat={Infinity}
            />
          </span>
        </h1>

        <div className="flex flex-row sm:mt-[5px] mt-[40px] lg:mt-[20px]">
          <button className="mr-3 mt-8 p-2 bg-[#50575c] rounded-full hover:bg-[#2c2f30]">
            Hire Me
          </button>
          <button className="ml-3 mt-8 p-2 bg-[#50575c] rounded-full hover:bg-[#2c2f30]">
            Download CV
          </button>
        </div>
        <blockquote className="text-3xl mt-10 text-lg font-medium italic text-gray-700 mx-auto mt-12 sm:self-">
          {quote}
        </blockquote>
        <cite className="block mt-2 text-xl text-gray-500">- {name}</cite>
      </div>
      <div className="col-span-5 place-self-center mt-4">
        <div className="rounded-full bg-[#121212] w-[300px] h-[400px] lg:h-[450px] lg:w-[450px] relative">
          <Image
            className="transform absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 lg:h-[350px] lg:w-[300px]"
            alt=""
            width={200}
            height={200}
            src={avatar.url}
          />
          <h1 className="rounded-full bg-white text-black mt-3   lg:w-[500px] lg:text-5xl transform absolute -translate-x-1/2 translate-y-1/2  flex text-center left-1/2 top-3/4  ">
            {about.exp_year}+ YEARS OF EXPERIENCE
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
