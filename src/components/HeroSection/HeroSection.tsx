import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = ({ about }: any) => {
  const [name, setName] = useState(about?.name);
  const [description, setDescription] = useState(about?.description.split("."));
  const [subTitle, setSubTitle] = useState(about?.subTitle);
  const [quote, setQuote] = useState(about?.quote);
  const [avatar, setAvatar] = useState(about?.avatar);

  let animationTime = 1000;
  let animationSequence = [];
  animationSequence.push(subTitle);
  animationSequence.push(animationTime);

  for (let i = 0; i < description.length; i++) {
    const trimmedDes = description[i].trim();
    if (trimmedDes != "") animationSequence.push(trimmedDes);
    else continue;
    animationSequence.push(animationTime);
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-7">
        <h1 className="text-4xl lg:text-6xl  sm:mx-auto">
          Hello, I am <span className="text-[#6b96b0]">{`${name}`}</span>
        </h1>
        <h2 className="text-2xl lg:text-4xl py-5 sm:mx-auto">
          <TypeAnimation
            sequence={animationSequence}
            wrapper="span"
            speed={75}
            omitDeletionAnimation={true}
            repeat={Infinity}
          />
        </h2>
        <div className="flex flex-row mt-6">
          <button className="mr-3 p-2 bg-[#50575c] rounded-full hover:bg-[#2c2f30]">
            Hire Me
          </button>
          <button className="ml-3 p-2 bg-[#50575c] rounded-full hover:bg-[#2c2f30]">
            Download CV
          </button>
        </div>
        <blockquote className="text-2xl text-lg font-medium italic text-gray-700 mx-auto mt-12 sm:self-">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
