import { motion } from "framer-motion";

function SkillsIcon() {
  const size = 32 * 10;
  const color = "white";

  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        className="overflow-visible!"
      >
        <motion.path
          d="M7 8l-5 4 5 4"
          animate={{ x: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M17 8l5 4-5 4"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M14 4l-4 16"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transformOrigin: "center" }}
        />
        <motion.rect
          x="10.75"
          y="10.75"
          width="2.5"
          height="2.5"
          fill={color}
          stroke="none"
          animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

export default SkillsIcon;
