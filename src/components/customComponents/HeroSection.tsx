import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="px-10 md:px-28 lg:px-44 xl:px-56 flex flex-col items-center mt-24">
      <h2 className="font-extrabold text-5xl text-center leading-tight">
        Build <span className="text-[#7f57f1]">Professional Emails</span> in Minutes with AI
      </h2>
      <p className="text-center mt-6 text-gray-600 max-w-3xl text-lg">
        Transform your email marketing with AI-powered templates. Create stunning, 
        responsive emails with intelligent content generation—no coding required. 
        Save hours of design time and start sending high-converting campaigns today.
      </p>
      <div className="flex gap-5 mt-8">
        <Button 
          variant={"outline"} 
          className="text-[#7f57f1] border-[#7f57f1] hover:bg-[#7f57f1] hover:text-white transition-colors px-6 py-5 text-base"
        >
          Try Demo
        </Button>
        <Button 
          className="bg-[#7f57f1] text-white hover:opacity-90 transition-opacity px-6 py-5 text-base"
        >
          Get Started Free
        </Button>
      </div>
      <Image
        src={`/landing.webp`}
        alt="AI Email Template Builder Dashboard"
        width={800}
        height={1000}
        className="w-full h-auto mt-20 rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default HeroSection;