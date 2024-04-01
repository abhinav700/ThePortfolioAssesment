import React from "react";
import Project from "./Project";

const ProjectSection = ({ projects }: any) => {
  console.log(projects);
  projects.sort((a:any, b:any) => a.sequence - b.sequence);

  const mappedArray = projects.map((item: any) => {
    return <Project key = {item._id} data = {item}/>;
  });
  return (
    <div className="w-full">
      <h1 className="my-7 text-5xl w-full text-center">MY PROJECTS</h1>
      <div className=" w-full flex flex-row flex-wrap justify-center items-center ">{mappedArray}</div>
    </div>
  );
};

export default ProjectSection;
