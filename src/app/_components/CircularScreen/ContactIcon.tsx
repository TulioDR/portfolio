import { motion } from "framer-motion";

function ContactIcon() {
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
          d="M3 20L10 13"
          strokeDasharray="2 3"
          strokeWidth="1.5"
          animate={{ strokeDashoffset: [10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
        <motion.g
          animate={{
            x: [0, 2, -1, 0],
            y: [0, -3, 1, 0],
            rotate: [0, -4, 3, 0],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </motion.g>
      </svg>
    </div>
  );
}

export default ContactIcon;
