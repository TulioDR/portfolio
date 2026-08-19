import { motion } from "framer-motion";

function ProjectsIcon() {
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
          d="M12 2L2 7l10 5 10-5-10-5z"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <motion.path
          d="M2 12l10 5 10-5"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.15 }}
        />
        <motion.path
          d="M2 17l10 5 10-5"
          animate={{ y: [0, 2, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.3 }}
        />
      </svg>
    </div>
  );
}

export default ProjectsIcon;
