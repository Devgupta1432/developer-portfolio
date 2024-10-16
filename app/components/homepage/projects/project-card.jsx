// @flow strict
"use client"; // Add this directive at the top to use client-side features

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

function ProjectCard({ project }) {
  const { name, description, tools = [], tags = [], code, demo, image, role } = project || {};
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full max-w-[400px] lg:max-w-[450px] h-[500px] overflow-hidden transition-transform duration-300 ease-out hover:scale-105">
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

      {/* Project Image */}
      <div className="overflow-hidden h-[150px] lg:h-[180px]">
        <Image 
          src={image || placeholder} 
          alt={`${name} project image`} 
          layout="responsive" 
          width={400} 
          height={250} 
          className="object-cover" 
        />
      </div>

      {/* Project Details - Scrollable Content */}
      <div className="border-t-[2px] border-indigo-900 px-4 lg:px-6 py-2 flex-1 overflow-y-auto max-h-[252px]">
        <p className="text-white text-sm lg:text-base"><strong>Role:</strong> {role || "Not specified"}</p>
        <p className="text-white text-sm lg:text-base">
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
        <p className="text-white text-sm lg:text-base"><strong>Tools:</strong> {tools.join(", ") || "None"}</p>
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

      {/* View More Button */}
      <div className="px-4 lg:px-6 py-2 flex justify-end space-x-2">
        {demo && (
          <Link href={demo} passHref>
            <a className="bg-blue-500 text-white p-1 rounded-md flex items-center">
              <FaPlay className="mr-1" /> Demo
            </a>
          </Link>
        )}
        {code && (
          <Link href={code} passHref>
            <a className="bg-gray-800 text-white p-1 rounded-md flex items-center">
              <FaCode className="mr-1" /> Code
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
