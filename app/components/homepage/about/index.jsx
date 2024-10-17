// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative px-4 lg:px-0">
      {/* Title on the right for larger screens */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md shadow-lg">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase tracking-wider">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>
        {/* Profile Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={320}
            height={300}
            alt="Dev gupta"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer shadow-lg"
          />
        </div>
      </div>

      {/* Add a decorative element */}
      <div className="absolute -bottom-12 right-0 hidden lg:block">
        <svg
          width="200"
          height="200"
          className="text-[#1a1443] opacity-30"
          fill="currentColor"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
      </div>
    </div>
  );
}

export default AboutSection;


