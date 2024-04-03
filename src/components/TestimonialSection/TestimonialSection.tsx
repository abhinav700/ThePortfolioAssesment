import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const TestimonialSection = ({ testimonials }: any) => {
  const mappedArray = testimonials.map((item: any, index: any) => {
    return (
      <Carousel.Item key={item._id} >
        <div  className="mx-auto max-w-[900px] flex flex-col lg:flex-row justify-between items-center lg:items-start sm:h-[500px] h-[600px]">
          <div className="lg:w-1/2 w-full lg:order-1 order-2 md:block hidden sm:h-[100px] sm:w-[100px]">
            <Image
              alt={item.name}
              src={item.image.url}
              height={200}
              width={250}
              className="rounded-full mx-auto lg:mx-0"
            />
          </div>
          <div className="bg-gray-800 w-full sm:h-[450px] h-full text-white p-8 lg:w-[600px] lg:order-2 order-1">
           
            <blockquote className="text-3xl mt-10 text-lg  italic text-white mx-auto mt-12 sm:self-">
              {item.review}
            </blockquote>
            <cite className="block mt-2 font-bold text-xl text-white"><p>{item.name}</p><p> {item.position}</p></cite>
          </div>
        </div>
      </Carousel.Item>
    );
  });

  return (
    <div id ="testimonials" className="w-full mt-3">
      <h1 className="text-4xl lg:text-5xl text-center w-full my-12 font-bold text-gray-900 font-serif">
        TESTIMONIES
      </h1>
      <div className="w-full my-4">
        <Carousel  data-bs-theme="dark">{mappedArray}</Carousel>
      </div>
    </div>
  );
};

export default TestimonialSection;
