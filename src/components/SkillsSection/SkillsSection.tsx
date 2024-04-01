import React from "react";
import SkillComponent from "./SkillComponent";

const SkillsSection = ({ skills }: any) => {
  let mappedArray = skills.map((item: any) => {
    return <SkillComponent key={item._id} skill={item} />;
  });

  return (
    <>
      <h1 className="sm:text-3xl md:text-5xl text-center w-full my-12 font-bold text-white  font-serif">
        MY PROFESSIONAL SKILLS
      </h1>

      <div className="flex flex-row flex-wrap justify-center items-center">
        {mappedArray}
      </div>
    </>
  );
};

export default SkillsSection;
