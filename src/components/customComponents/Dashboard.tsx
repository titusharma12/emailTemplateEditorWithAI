"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [emailTemplates, setEmailTemplates] = useState<any[]>([]);

  useEffect(() => {
    // ✅ Run only once on mount
    const user = localStorage.getItem("user");
    if (user && user !== "undefined") {
      try {
        const parsedUser = JSON.parse(user);
        setUserInfo(parsedUser);
      } catch (error) {
        console.error("Invalid JSON in localStorage:", error);
      }
    }
  }, []); // 👈 empty dependency array (runs only once)

  return (
    <div className="flex flex-col py-6 px-10">
      <div className="flex w-full justify-between items-center">
        <span className="text-2xl font-bold text-black font-sans">
          {/* ✅ Render safely */}
          Hello, {userInfo?.name || "User"}
        </span>

        <Button className="ml-4 capitalize bg-[#7f57f1] text-white hover:opacity-90 transition-opacity px-4 py-2 text-base"
        onClick={()=>{router.push('/dashboard/create')}}>
          + Create new email template
        </Button>
      </div>

      <h2 className="text-lg text-left text-[#7f57f1] font-semibold mt-4 mb-6">
        Workspace
      </h2>

      {emailTemplates.length > 0 ? (
        <>titu</>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <Image
            src="https://media.istockphoto.com/id/1288824469/vector/young-male-character-office-worker-working-with-a-laptop-and-opens-an-email-with-his-finger.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y4TaRgvgY-KdCO92UycmZMXNfV6HsbW3rAXCBuno2Zg="
            alt="AI Email Template Builder Dashboard"
            width={400}
            height={500}
            unoptimized
            className="w-[400px] object-contain h-auto mt-10 rounded-lg"
          />
          <Button className="bg-[#7f57f1] text-white hover:opacity-90 transition-opacity px-6 py-5 text-base"  onClick={()=>{router.push('/dashboard/create')}}>
            +Create New
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
