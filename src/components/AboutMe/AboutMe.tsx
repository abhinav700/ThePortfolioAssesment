import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const AboutMe = ({ about, socialHandles }: any) => {
  const [alternateAvatar, setAlternateAvatar] = useState(
    about.alternateAvatars[0].url
  );
  const [description, setDescription] = useState(about.description);

  const [contactInformation, setContactInformation] = useState({
    Email: about.contactEmail,
    PhoneNumber: about.phoneNumber,
    Address: about.address,
  });
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showContactInformation, setShowContactInformation] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false)
  let entries = Object.entries(contactInformation);

  let contactInformationMappedArray = entries.map(([key, value]) => {
    const keyParts = key.split(/(?=[A-Z])/);
    let s = "";
    for (let i = 0; i < keyParts.length; i++) {
      s += `${keyParts[i]} `;
    }
    return (
      <h2 className="text-xl my-3 px-4 py-3 text-black" key={value}>
        <span className="font-bold">{s}: </span>
        <span>{value}</span>
      </h2>
    );
  });

  const socialMediaHandlesMappedArray = socialHandles.map((value:any, index:any)=>{
    return(
        <Link className="mx-4 lg:mt-6 mt-4" href ={value.url} key ={value._id}><Image className="lg:w-[70px] lg:h-[70px]" src ={value.image.url} width = {30} height ={30} alt = ""/></Link>
    )
  })
  
  const handleClickAboutMe = (e: any) => {
    e.preventDefault();
    setShowAboutMe(true);
    setShowContactInformation(false);
    setShowContactMe(false);
  };

  const handleClickContactInformation = (e: any) => {
    e.preventDefault();
    setShowAboutMe(false);
    setShowContactInformation(true);
    setShowContactMe(false)
  };

  const handleClickContactMe = (e: any) => {
    e.preventDefault();
    setShowAboutMe(false);
    setShowContactInformation(false);
    setShowContactMe(true)
  };
  return (
    <section id="about" className="text-white mt-12">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={alternateAvatar} className="lg:w-[400px] lg:h-[500px]" height={350} width={250} alt="" />
        <div>
          <nav className="mt-12 lg:mt-8 mb-5">
            <button
              className="mr-3 mt-2 p-2 bg-[#50575c] rounded-full hover:bg-[#2c2f30]"
              onClick={handleClickAboutMe}
            >
              About Me
            </button>
            <button
              className=" ml-3 mt-2 p-2 bg-[#50575c] rounded-full hover:bg-[#2c2f30]"
              onClick={handleClickContactInformation}
            >
              Contact information
            </button>
            <button
              className="md:ml-3 mt-2 p-2 bg-[#50575c] rounded-full hover:bg-[#2c2f30]"
              onClick={handleClickContactMe}
            >
              Contact Me
            </button>
          </nav>
          <div className="h-[400px]">
            {showAboutMe && (
              <div className="text-black  text-xl">{description}</div>
            )}

            {showContactInformation && (
              <div className="">
                {contactInformationMappedArray}
                <div className="flex flex-row">
                    {socialMediaHandlesMappedArray}
                </div>
              </div>
            )}
            {
              showContactMe && (
                <ContactForm/>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
