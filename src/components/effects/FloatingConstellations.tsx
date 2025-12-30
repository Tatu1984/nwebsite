import { useEffect, useState } from "react";
import { Constellation, CONSTELLATIONS } from "./Constellation";

type ConstellationName = keyof typeof CONSTELLATIONS;

interface FloatingConstellationProps {
  name: ConstellationName;
  opacity?: number;
}

export const FloatingConstellation = ({
  name,
  opacity = 0.5,
}: FloatingConstellationProps) => {
  const [progress, setProgress] = useState(0);
  const [bounceConfig] = useState(() => ({
    rotationMultiplier: 1 + Math.random() * 2, // 1-3 full rotations
    rotationDirection: Math.random() > 0.5 ? 1 : -1, // clockwise or counter-clockwise
    bounceFrequency: 2 + Math.random() * 3, // 2-5 bounces
    bounceAmplitude: 0.15 + Math.random() * 0.25, // 15-40% of width
    phase: Math.random() * Math.PI * 2, // random starting phase
    startX: 0.1 + Math.random() * 0.3, // start 10-40% from left
  }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setProgress(Math.min(1, Math.max(0, scrollProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const constellation = CONSTELLATIONS[name];
  if (!constellation) return null;

  const size = 250;

  // Y moves from top to bottom linearly
  const yPos = `calc(160px + (100vh - ${size}px - 160px) * ${progress})`;

  // X bounces horizontally using sine wave with random config
  const bounceOffset = Math.sin(progress * Math.PI * bounceConfig.bounceFrequency + bounceConfig.phase) * bounceConfig.bounceAmplitude;
  const xPos = `calc((100vw - ${size}px) * ${bounceConfig.startX + 0.5 * progress + bounceOffset})`;

  const rotation = progress * 360 * bounceConfig.rotationMultiplier * bounceConfig.rotationDirection;

  return (
    <div className="floating-constellations">
      <div
        className="floating-constellation"
        style={{
          left: xPos,
          top: yPos,
          opacity,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <Constellation
          stars={constellation.stars}
          connections={constellation.connections}
          width={size}
          height={size}
          animated
        />
      </div>
    </div>
  );
};
