import React from 'react';

const calculateItemStyle = ({
  index,
  radiusPx,
  totalItems,
}) => {
  const angle = (index / totalItems) * 360;
  const radians = (angle * Math.PI) / 180;
  const x = radiusPx * Math.cos(radians);
  const y = radiusPx * Math.sin(radians);
  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    transform: "translate(-50%, -50%)",
  };
};

export default function OrbitingItems({
  radiusPx = 200,
  items = [],
  pauseOnHover = false,
  className = "",
}) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ isolation: 'auto' }}>
      <div
        className={`relative flex items-center justify-center ease-linear ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: 'rotate-full 45s linear infinite',
          width: '100%',
          height: '100%',
          isolation: 'auto'
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="absolute"
              style={{
                ...calculateItemStyle({
                  index,
                  radiusPx,
                  totalItems: items.length,
                }),
                isolation: 'auto'
              }}
            >
              <div
                className="transition-transform ease-linear"
                style={{
                  animation: 'rotate-full 45s linear infinite reverse',
                  isolation: 'auto'
                }}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
