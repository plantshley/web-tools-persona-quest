import React from "react";

interface WaveRevealProps {
  text: string;
  direction?: "up" | "down";
  mode?: "letter" | "word";
  duration?: number;
  delay?: number;
  blur?: boolean;
  className?: string;
}

export default function WaveReveal({
  text,
  direction = "up",
  mode = "letter",
  duration = 0.5,
  delay = 0.05,
  blur = false,
  className = "",
}: WaveRevealProps) {
  const elements = mode === "letter" ? text.split("") : text.split(" ");
  const animationClass = direction === "up" ? "animate-reveal-up" : "animate-reveal-down";
  const blurClass = blur ? "animate-content-blur" : "";

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <span
          key={index}
          className={`inline-block opacity-0 ${animationClass} ${blurClass}`}
          style={{
            animationDelay: `${index * delay}s`,
            animationDuration: `${duration}s`,
            animationFillMode: "forwards",
          }}
        >
          {element === " " ? "\u00A0" : element}
          {mode === "word" && index < elements.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
