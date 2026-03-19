import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.08);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.08);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const triangles = [
    { size: 220, left: "8%", top: "14%", depth: 1.15, duration: 26, delay: 0, color: "#be185d", drift: 120 },
    { size: 160, left: "18%", top: "68%", depth: 0.95, duration: 22, delay: 2, color: "#9d174d", drift: 90 },
    { size: 260, left: "34%", top: "30%", depth: 1.2, duration: 30, delay: 5, color: "#a21c5d", drift: 110 },
    { size: 180, left: "45%", top: "75%", depth: 0.9, duration: 20, delay: 1, color: "#831843", drift: 80 },
    { size: 280, left: "56%", top: "18%", depth: 1.3, duration: 34, delay: 4, color: "#701a3f", drift: 130 },
    { size: 140, left: "64%", top: "55%", depth: 0.85, duration: 18, delay: 3, color: "#be185d", drift: 75 },
    { size: 200, left: "76%", top: "34%", depth: 1.05, duration: 24, delay: 6, color: "#9f1239", drift: 95 },
    { size: 240, left: "86%", top: "72%", depth: 1.1, duration: 28, delay: 7, color: "#9d174d", drift: 105 },
    { size: 120, left: "26%", top: "48%", depth: 0.8, duration: 16, delay: 1, color: "#a21c5d", drift: 70 },
    { size: 110, left: "71%", top: "16%", depth: 0.8, duration: 17, delay: 4, color: "#701a3f", drift: 65 },
    { size: 135, left: "90%", top: "40%", depth: 0.9, duration: 19, delay: 2, color: "#be185d", drift: 72 },
    { size: 125, left: "6%", top: "82%", depth: 0.85, duration: 18, delay: 3, color: "#9f1239", drift: 68 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#070b12]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(190,24,93,0.22), transparent 40%), radial-gradient(circle at 80% 70%, rgba(131,24,67,0.18), transparent 45%)",
        }}
      />

      <div className="absolute inset-0 [perspective:1200px] [transform-style:preserve-3d]">
        {triangles.map((triangle, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            initial={{
              x: 0,
              y: 0,
              rotate: i * 28,
              rotateX: 20 - i,
              rotateY: i * 5,
              scale: triangle.depth,
            }}
            animate={{
              x: [0, triangle.drift, -triangle.drift * 0.65, 0],
              y: [0, -triangle.drift * 0.5, triangle.drift * 0.7, 0],
              rotate: [i * 28, i * 28 + 120, i * 28 + 240, i * 28 + 360],
              rotateX: [15, 35, 20, 15],
              rotateY: [0, 30, -25, 0],
              scale: [triangle.depth, triangle.depth * 1.12, triangle.depth * 0.92, triangle.depth],
              opacity: [0.32, 0.75, 0.55, 0.32],
            }}
            transition={{
              duration: triangle.duration,
              repeat: Infinity,
              delay: triangle.delay,
              ease: "easeInOut",
            }}
            style={{
              left: triangle.left,
              top: triangle.top,
              width: `${triangle.size}px`,
              height: `${triangle.size}px`,
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              background: `linear-gradient(165deg, ${triangle.color}, rgba(255,255,255,0.05))`,
              border: "1px solid rgba(255,255,255,0.22)",
              filter: "drop-shadow(0 0 22px rgba(190,24,93,0.55))",
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute pointer-events-none"
        style={{ x: springX, y: springY }}
        animate={{ rotate: [0, 8, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: springX,
          y: springY,
          left: "50%",
          top: "50%",
          width: "260px",
          height: "260px",
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          background: "linear-gradient(145deg, rgba(190,24,93,0.3), rgba(112,26,63,0.08))",
          filter: "blur(2px) drop-shadow(0 0 28px rgba(190,24,93,0.45))",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="absolute inset-0 backdrop-blur-[8px] opacity-25 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}