"use client"; // Ensure this directive is at the top of the file

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

function ProjectCard({ project }) {
  const { name, description, tools = [], tags = [], code, demo, image, role, behance } = project || {};
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div 
      className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full max-w-[400px] lg:max-w-[450px] h-[500px] overflow-hidden transition-transform duration-300 ease-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Gradient Divider */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Header with Project Name */}
      <div className="px-4 lg:px-6 py-2 lg:py-3 relative">
        <div className="flex space-x-1 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-lg lg:text-xl font-semibold">
          {name}
        </p>
      </div>

      {/* Project Image with Blur Effect on Hover */}
      <div className="relative overflow-hidden h-[150px] lg:h-[180px]">
        <Image 
          src={image || placeholder} 
          alt={`${name} project image`} 
          layout="responsive" 
          width={400} 
          height={250} 
          className={`object-cover transition duration-300 ${isHovered ? 'filter blur-sm' : ''}`} 
        />
        
        {/* Button Container for Demo and Code */}
        <div className={`absolute inset-0 flex items-center justify-center space-x-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {demo && (
            <Link href={demo} target="_blank" rel="noopener noreferrer">
              <div className="text-blue-500 border border-blue-500 p-2 rounded-md flex items-center cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
                <FaPlay className="mr-1" /> Demo
              </div>
            </Link>
          )}
          {code && (
            <Link href={code} target="_blank" rel="noopener noreferrer">
              <div className="text-gray-800 border border-gray-800 p-2 rounded-md flex items-center cursor-pointer hover:bg-gray-800 hover:text-white transition duration-300">
                <FaCode className="mr-1" /> Code
              </div>
            </Link>
          )}
        </div>

        {/* Behance Button - Only visible on hover and positioned over the image */}
        {isHovered && behance && (
          <div className="absolute bottom-5 top-20 left-1/2 transform -translate-x-1/2">
            <Link href={behance} target="_blank" rel="noopener noreferrer">
              <div className="text-black border border-black  p-2 rounded-md shadow-md bg-white hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                View on Behance
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Project Details - Scrollable Content */}
      <div className="border-t-[2px] border-indigo-900 px-4 lg:px-6 py-2 flex-1 overflow-y-auto max-h-[252px]">
        <p className="text-red-400 text-sm lg:text-base"><strong>Role:</strong> {role || "Not specified"}</p>
        <p className="text-yellow-400 text-sm lg:text-base">
          <strong>Description:</strong> {showFullDescription ? description : `${description.substring(0, 100)}...`}
          {description.length > 100 && (
            <button
              onClick={toggleDescription}
              className="text-blue-400 hover:underline ml-1"
            >
              {showFullDescription ? 'Read Less' : 'Read More'}
            </button>
          )}
        </p>
        <p className="text-green-400 text-sm lg:text-base"><strong>Tools:</strong> {tools.join(", ") || "None"}</p>
      </div>

      {/* Tags Section */}
      {tags.length > 0 && (
        <div className="px-4 lg:px-6 py-1 flex flex-wrap gap-1 overflow-y-auto max-h-[50px]">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-medium px-2 py-1 bg-[#231d4b] rounded-md text-[#EFF3F4]">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
