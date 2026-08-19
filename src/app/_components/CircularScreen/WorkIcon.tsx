import { motion } from "framer-motion";

function WorkIcon() {
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
        <rect x="2" y="7" width="20" height="14" rx="0" ry="0" />
        <motion.path
          d="M16 7V3H8v4"
          animate={{ y: [0, -1.5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity }}
          style={{ transformOrigin: "bottom" }}
        />
        <motion.path
          d="M12 12V7"
          animate={{ y: [3, -2, 3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <path d="M2 12h20" strokeOpacity="0.5" />
      </svg>
    </div>
  );
}

export default WorkIcon;
