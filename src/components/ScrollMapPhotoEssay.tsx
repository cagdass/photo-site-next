// ScrollMapPhotoEssay.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

// Fake route resembling your bike trip (Sweden to Turkey)
const routePoints = [
  { x: 180, y: 150 },   // Stockholm
  { x: 210, y: 145 },   // Tallinn
  { x: 200, y: 155 },   // Saaremaa
  { x: 218, y: 160 },   // Valga
  { x: 220, y: 165 },   // Daugavpils
  { x: 215, y: 180 },   // Vilnius
  { x: 195, y: 185 },   // Nida?
  { x: 200, y: 200 },   // Elblag?
  { x: 205, y: 220 },   // Warsaw?
  { x: 200, y: 240 },   // Hungary?
  { x: 205, y: 250 },   // Serbia?
  { x: 210, y: 270 },   // BiH?
  { x: 190, y: 280 },   // Mostar?
  { x: 195, y: 295 },   // Montenegro ?
  { x: 210, y: 300 },   // Shkoder ?
  { x: 220, y: 310 },   // Shkoder ?
];

export default function ScrollMapPhotoEssay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleIndex, setVisibleIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 h-screen overflow-hidden">
      {/* Map */}
      <div className="w-full md:w-1/2 relative">
        <svg viewBox="0 0 400 400" className="w-full h-[400px]">
          <image
            href="/images/bikepacking/europe.png"
            x="0"
            y="0"
            width="400"
            height="400"
            opacity="1.0"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Draw route segments */}
          {routePoints.slice(0, visibleIndex).map((point, i) => {
            const next = routePoints[i + 1];
            return (
              <path
                key={`seg-${i}`}
                d={`M ${point.x} ${point.y} L ${next.x} ${next.y}`}
                stroke="black"
                strokeWidth={2}
                fill="none"
              />
            );
          })}

          {/* Cross markers */}
          {routePoints.map((p, i) => (
            i <= visibleIndex ? (
              <g key={`marker-${i}`}>
                <line x1={p.x - 5} y1={p.y - 5} x2={p.x + 5} y2={p.y + 5} stroke="red" strokeWidth={2} />
                <line x1={p.x + 5} y1={p.y - 5} x2={p.x - 5} y2={p.y + 5} stroke="red" strokeWidth={2} />
              </g>
            ) : null
          ))}
        </svg>
      </div>

      {/* Scrollable Photo Essay */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-scroll h-[400px] space-y-24 pr-4 border-l border-gray-300"
      >
        {routePoints.slice(0, -1).map((_, i) => (
          <PhotoBlock key={i} index={i} caption={`Photo Stop #${i + 1}`} setVisibleIndex={setVisibleIndex} />
        ))}
      </div>
    </div>
  );
}

function PhotoBlock({
  caption,
  index,
  setVisibleIndex,
}: {
  caption: string;
  index: number;
  setVisibleIndex: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleIndex(index);
        }
      },
      {
        threshold: 0.5,
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index, setVisibleIndex]);

  return (
    <div ref={ref} className="shadow rounded p-4">
      <div className="text-xl font-semibold">{caption}</div>
      <div className="mt-2 text-sm text-gray-500">
        <img
          src={`/images/bikepacking/test${String(index + 1).padStart(2, '0')}.PNG`}
          alt={`Photo Stop ${index + 1}`}
          className="w-36 rounded mt-4"
        />
      </div>
    </div>
  );
}