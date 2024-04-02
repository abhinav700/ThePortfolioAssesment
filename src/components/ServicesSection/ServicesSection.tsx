import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

const ServicesSection = ({ servicesData }: any) => {
  const mappedArray = servicesData.map((item: any, index: any) => {
    return (
      <Carousel.Item key={item._id}>
        <div className="mx-auto w-[900px] flex justify-between items-center h-[300px]">
          <div className="w-1/2">
            <Image
              alt={item.name}
              src={item.image.url}
              height={200}
              width={250}
            />
          </div>
          <div className="bg-black w-full text-white p-4">
              <h1 className="my-3">{item.name}</h1>
              <h4 className="my-3">{item.desc}</h4>
              <div className="flex flex-wrap items-center"><h4 className="my-3 mr-3">Starting Price: </h4> <h3 className="my-3">{item.charge}</h3></div>
          </div>
        </div>
      </Carousel.Item>
    );
  });
  return (
    <div className="my-4 ">
      <h1 className="text-3xl md:text-5xl text-center my-12 font-bold text-black font-serif">
        SERVICES PROVIDED
      </h1>
      <div className="bg-black w-full">

      <Carousel>{mappedArray}</Carousel>
      </div>
    </div>
  );
};

export default ServicesSection;
