import React, { useState } from "react";
import { FaBriefcase as WorkIcon } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Button from "react-bootstrap/Button";
import { IoIosSchool } from "react-icons/io";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ResumeSection = ({ resumeData }: any) => {
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(false);

  const handleClickEducation = (e: any) => {
    e.preventDefault();
    setShowEducation(true);
    setShowExperience(false);
  };
  const handleClickExperience = (e: any) => {
    e.preventDefault();
    setShowEducation(false);
    setShowExperience(true);
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const educationData = resumeData.filter(
    (item: any) => item.forEducation === true
  );
  educationData.sort((a: any, b: any) => a.sequence - b.sequence);

  const experienceData = resumeData.filter(
    (item: any) => item.forEducation === false
  );
  experienceData.sort((a: any, b: any) => a.sequence - b.sequence);

  return (
    <div id="resume" className="w-full my-[100px]">
      <h1 className="sm:text-3xl md:text-5xl text-center w-full my-12 font-bold text-black font-serif">
        RESUME
      </h1>
      <div className="flex flex-wrap justify-center w-[400px] mx-auto my-5">
        <Button
          className="mx-2"
          onClick={handleClickEducation}
          variant="secondary"
        >
          Education
        </Button>
        <Button
          className="mx-2"
          onClick={handleClickExperience}
          variant="secondary"
        >
          Experience
        </Button>
      </div>
      {showEducation && (
        <div className="w-[350px] sm:w-[700px] md:w-[900px] mx-auto" ref={ref}>
          <h1 className="w-full">Education</h1>
          <VerticalTimeline layout="1-column-left">
            {educationData.map((item: any, index: number) => (
              <VerticalTimelineElement
                visible={inView}
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fcffcc", color: "black" }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<IoIosSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.company_name}
                </h3>
                <h5 className="mt-2 vertical-timeline-element-subtitle">
                  {item.jobTitle}
                </h5>
                <p className="">
                  Start Date :{" "}
                  <span className="font-bold">{`${item.startDate}`}</span>
                </p>
                <p className="">
                  End Date :{" "}
                  <span className="font-bold">{`${item.endDate}`}</span>
                </p>
                <p className="text-xs">{item.jobLocation}</p>
                <ul className="list-disc ml-6">
                  {item.bulletPoints.map((point: string, index: number) => (
                    <li key={index} className="text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      )}

      {showExperience && (
        <div className="w-[350px] sm:w-[700px] md:w-[900px] mx-auto" ref={ref}>
        <h1 className="w-full">Experience</h1>
          <VerticalTimeline layout="1-column-left">
            {experienceData.map((item: any, index: number) => (
              <VerticalTimelineElement
                visible={inView}
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fcffcc", color: "black" }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.company_name}
                </h3>
                <h5 className="mt-2 vertical-timeline-element-subtitle">
                  {item.jobTitle}
                </h5>
                <p className="">
                  Start Date :{" "}
                  <span className="font-bold">{`${item.startDate}`}</span>
                </p>
                <p className="">
                  End Date :{" "}
                  <span className="font-bold">{`${item.endDate}`}</span>
                </p>
                <p className="text-xs">{item.jobLocation}</p>
                <ul className="list-disc ml-6">
                  {item.bulletPoints.map(
                    (point: string, index: number) =>
                      point.length > 0 && (
                        <li key={index} className="text-sm">
                          {point}
                        </li>
                      )
                  )}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      )}
    </div>
  );
};

export default ResumeSection;
