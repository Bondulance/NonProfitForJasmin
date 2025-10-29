"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MeetTheTeamCarousel = () => {
  const images = ["/assets/prez.jpg", "/assets/sec.jpg", "/assets/vp.jpg", "/assets/treasurer.jpg"];
  const [currentIMG, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-6 relative min-h-[250px] border-2 border-black text-white px-5 py-6 w-[40%] max-md:w-full flex flex-col items-center justify-end overflow-hidden bg-[var(--blue)]">
      {/* Background carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIMG]}
            src={images[currentIMG]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`w-full h-full object-cover ${currentIMG === 0 ? "object-[center_22%]" : "object-center"} 
                ${currentIMG === 3 ? "scale-150" : ""}`}
            alt="Team member"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[var(--blue)]/60"></div>
      </div>

      {/* Button content */}
      <Link
        href="/meettheteam"
        className="bg-accent px-5 py-3 w-[40%] text-center hover:text-[var(--blue)] hover:underline z-10"
      >
        Meet The Team
      </Link>
    </div>
  );
};

export default MeetTheTeamCarousel;
