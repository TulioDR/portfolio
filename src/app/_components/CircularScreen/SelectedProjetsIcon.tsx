import { motion } from "framer-motion";

function SelectedProjcetsIcon() {
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
        <path d="M12 2L2 9l10 13 10-13-10-7z" strokeOpacity="0.4" />
        <motion.path
          d="M12 5l1.8 4.2L18 11l-4.2 1.8L12 17l-1.8-4.2L6 11l4.2-1.8L12 5z"
          animate={{ scale: [0.92, 1.08, 0.92], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: "12px 11px" }}
        />
        <motion.rect
          x="4"
          y="3"
          width="2"
          height="2"
          fill={color}
          stroke="none"
          animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

export default SelectedProjcetsIcon;
