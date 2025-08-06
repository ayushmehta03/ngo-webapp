"use client";

import { FaBug, FaFemale, FaRecycle, FaLeaf } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function InfoCards() {
  const cards = [
    {
      icon: <FaBug className="text-green-600" size={30} />,
      title: "SilkWorm Rearing",
      text: "We promote scientific silkworm rearing techniques to help farmers increase silk yield and quality",
    },
    {
      icon: <FaLeaf className="text-lime-600" size={30} />,
      title: "Mulberry Cultivation",
      text: "Training farmers in sustainable mulberry farming for continuous, high-quality leaf production",
    },
    {
      icon: <FaFemale className="text-pink-500" size={30} />,
      title: "Women Empowerment",
      text: "We empower rural women through skill training in sericulture, creating self employment",
    },
    {
      icon: <FaRecycle className="text-blue-500" size={30} />,
      title: "Eco-Friendly Practices",
      text: "Promoting organic and eco-friendly practices in every stage of silk production",
    },
  ];

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4 px-2">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform ease-in"
        >
          {card.icon}
          <h3 className="text-lg font-semibold text-center">{card.title}</h3>
          <p className="text-center text-sm">{card.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
