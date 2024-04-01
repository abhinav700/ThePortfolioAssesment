import React from "react";
import Image from "next/image";
import ProgressBar from 'react-bootstrap/ProgressBar';

const SkillComponent = ({ skill }: any) => {
  return (
    <div className="mx-4 my-1 w-[200px] h-[450px]">
      <Image
        className="mx-auto"
        src={skill.image.url}
        alt={skill.name}
        height={100}
        width={100}
      />
      <p className="text-black mt-4 mx-auto h-[170px] mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio pariatur
        perspiciatis, veritatis recusandae eos iusto illo adipisca repudiandae
        iure sed?
      </p>
      <ProgressBar now ={skill.percentage} label={`${skill.percentage}%`}/>    
    </div>
  );
};

export default SkillComponent;
