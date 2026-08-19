import { motion } from "framer-motion";

function AboutIcon() {
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
        <motion.rect
          x="6"
          y="1"
          width="12"
          height="12"
          strokeWidth="1"
          animate={{ scale: [0.8, 1.35, 1.5], opacity: [0.8, 0.2, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          style={{ transformOrigin: "12px 7px" }}
        />
        <motion.rect
          x="8.5"
          y="3.5"
          width="7"
          height="7"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
        <path d="M4 21v-3h16v3" />
      </svg>
    </div>
  );
}

export default AboutIcon;
