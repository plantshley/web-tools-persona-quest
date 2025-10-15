import { useEffect, useRef, useState } from "react";

function Beam({ index }) {
  const flag = index % 8 === 0;
  return (
    <div
      className="h-full animate-meteor"
      style={{
        width: "6px",
        transform: "translateY(-20%)",
        animationDelay: `${index * 0.5}s`,
        animationDuration: flag ? '7s' : '11s',
      }}
    >
      <div
        style={{
          clipPath: "polygon(54% 0, 54% 0, 60% 100%, 40% 100%)",
        }}
        className={`w-full ${flag ? 'h-8' : 'h-12'}`}
      >
        <div className="h-full w-full bg-gradient-to-b from-cyan-50/50 via-cyan-100 via-75% to-cyan-50" />
      </div>
    </div>
  );
}

function useGridCount() {
  const containerRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }
      const width = rect.width;
      const cellSize = 40;
      setCount(Math.ceil(width / cellSize));
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return {
    count,
    containerRef,
  };
}

function Background() {
  const { count, containerRef } = useGridCount();

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex h-full w-full flex-row justify-between overflow-hidden"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Beam key={i} index={i} />
      ))}
    </div>
  );
}

export default function AnimatedBeam({ children }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />
        <Background />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
