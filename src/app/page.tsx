"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "@/components/HeroSection/HeroSection";
import { TailSpin } from "react-loader-spinner";
import AboutMe from "@/components/AboutMe/AboutMe";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
const Home = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const loadData = async () => {
    try {
      const apiData = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      setData(apiData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log(data);
    return (
    <>
      {!loading ? (
        <main className="flex min-h-screen flex-col bg-[#e3dfd1]">
          <div className="container mx-auto px-7 py-5">
            <HeroSection about={data!.user!.about} />
            <AboutMe about={data!.user!.about} socialHandles = {data!.user.social_handles}/>
            <ServicesSection servicesData = {data!.user!.services}/>
            <SkillsSection skills = {data!.user!.skills}/>
            <ProjectSection projects = {data!.user!.projects}/>
          </div>
        </main>
      ) : (
        <div className="flex flex-row justify-center items-center min-h-screen container">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="mx-auto mx-auto"
          />
        </div>
      )}
    </>
  );
};
export default Home;
