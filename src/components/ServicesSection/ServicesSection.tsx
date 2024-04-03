import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

const ServicesSection = ({ servicesData }: any) => {
  const mappedArray = servicesData.map((item: any, index: any) => {
    return (
      <Carousel.Item key={item._id}>
        <div className="mx-auto max-w-[900px] flex flex-col lg:flex-row justify-between items-start lg:items-center lg:h-[300px]  h-[300px]">
          <div className="lg:w-1/2 lg:block hidden">
            <Image
              alt={item.name}
              src={item.image.url}
              height={200}
              width={250}
            />
          </div>
          <div className="bg-black w-full text-white p-4 ">
              <h1 className="text-4xl lg:my-3 whitespace-normal">{item.name}</h1>
              <h4 className="text-xl my-3 break-words">{item.desc}</h4>
              <div className="flex flex-wrap items-center"><h4 className="text-xl my-3 mr-3 flex items-center">Starting Price: </h4> <span className="font-bold">{item.charge}</span></div>
          </div>
        </div>
      </Carousel.Item>
    );
  });
  return (
    <div id="services" className="my-7 ">
      <h1 className="text-3xl md:text-5xl text-center my-12 font-bold text-black font-serif">
        SERVICES PROVIDED
      </h1>
      <div className="bg-black w-full my-4">

      <Carousel>{mappedArray}</Carousel>
      </div>
    </div>
  );
};

export default ServicesSection;
