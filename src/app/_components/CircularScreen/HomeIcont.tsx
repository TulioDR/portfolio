import { motion } from "framer-motion";

function HomeIcon() {
  const size = 32 * 10;
  const color = "white";
  return (
    <div className="">
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
        <rect x="4" y="4" width="16" height="16" strokeWidth="2" />
        <path
          d="M8 4V1M16 4V1M8 20v3M16 20v3M4 8H1M4 16H1M20 8h3M20 16h3"
          strokeWidth="1.5"
        />
        <motion.rect
          x="7"
          y="1"
          width="2"
          height="2"
          fill={color}
          stroke="none"
          animate={{ y: [0, 3, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect
          x="15"
          y="21"
          width="2"
          height="2"
          fill={color}
          stroke="none"
          animate={{ y: [0, -3, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
        />
        <motion.rect
          x="8"
          y="8"
          width="8"
          height="8"
          strokeWidth="1.5"
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: "12px 12px" }}
        />
        <motion.path
          d="M10 10l2.5 2-2.5 2"
          strokeWidth="1.5"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.line
          x1="13.5"
          y1="14"
          x2="15"
          y2="14"
          strokeWidth="1.5"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export default HomeIcon;
