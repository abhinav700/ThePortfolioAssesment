"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState<any>(null);
  const loadData = async () => {
    const apiData = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    setData(apiData.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {data ? (
        <main className="flex min-h-screen flex-col ">
          <div className="container mx-auto px-7 py-5">

          <HeroSection about={data!.user!.about} />
          </div>
        </main>
      ) : "Loading"}
    </>
  );
};
export default Home;
