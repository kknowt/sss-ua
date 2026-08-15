import { motion } from "framer-motion";

export default function UkraineMap() {
  const pins = [
    [210, 70],
    [120, 90],
    [180, 110],
    [280, 95],
    [330, 130],
    [250, 160],
    [150, 170],
    [90, 150],
    [310, 190],
    [200, 200],
    [70, 210],
    [140, 230],
    [240, 230],
    [300, 250],
    [180, 270],
  ];

  return (
    <svg className="ukraine-map" viewBox="0 0 400 320" aria-hidden="true">
      <defs>
        <linearGradient id="land" x1="0" x2="1">
          <stop offset="0%" stopColor="#d7e9f6" />
          <stop offset="100%" stopColor="#c5ddf1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#land)"
        stroke="#004f9f"
        strokeWidth="2"
        d="M70 70c40-30 90-40 150-38 38 1 78 18 110 42 22 16 48 28 52 52 4 26-18 48-20 78-2 28 8 48-18 64-32 20-78 18-118 28-36 8-70 4-98-18-24-18-40-48-46-78-8-38 6-78 0-110 18-12 22-12 0-20z"
      />
      {pins.map(([x, y], i) => (
        <motion.g
          key={i}
          className="pin"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * i, type: "spring", stiffness: 260, damping: 18 }}
        >
          <circle cx={x} cy={y} r="9" fill="#004f9f" opacity="0.18" />
          <circle cx={x} cy={y} r="5" fill="#004f9f" />
          <circle cx={x} cy={y} r="2.2" fill="#ffcc00" />
        </motion.g>
      ))}
    </svg>
  );
}
