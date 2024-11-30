import React from "react";
import { useSpring, animated } from "@react-spring/web";

function InfinitySign (){
  // Define the animation
 // Animation for the stroke dash offset
 const { offset } = useSpring({
    from: { offset: 0 },
    to: { offset: 1 },
    loop: true,
    config: { duration: 2000 },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
    <svg
      className="w-48 h-24"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define the infinity path */}
      <path
        d="M50,50a25,25 0 1,1 50,0a25,25 0 1,1 -50,0 M100,50a25,25 0 1,1 50,0a25,25 0 1,1 -50,0"
        stroke="gold"
        strokeWidth="4"
        fill="none"
        strokeDasharray="314 314" // Total length of the path
        className="animate-infinity"
      />
    </svg>
  </div>
  );
};

export default InfinitySign;