import React from "react";

interface BlurryBlobProps {
  className?: string;
  firstBlobColor?: string;
  secondBlobColor?: string;
}

export default function BlurryBlob({
  className = "",
  firstBlobColor = "bg-purple-400",
  secondBlobColor = "bg-cyan-400",
}: BlurryBlobProps) {
  return (
    <div className={`min-h-screen overflow-hidden ${className}`}>
      <div className="relative w-full h-full">
        <div
          className={`absolute -left-4 top-0 h-72 w-72 ${firstBlobColor} rounded-full opacity-70 mix-blend-multiply blur-xl filter animate-pop-blob`}
        />
        <div
          className={`animation-delay-2000 absolute -right-4 top-0 h-72 w-72 ${secondBlobColor} rounded-full opacity-70 mix-blend-multiply blur-xl filter animate-pop-blob`}
        />
      </div>
    </div>
  );
}
