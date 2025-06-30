"use client";

import {animate} from "framer-motion";
import { useEffect, useState } from "react";
import { School, Users, HeartPulse, Leaf } from "lucide-react";

const impactData = [
  { icon: <School size={36} />, count: 800, label: "Children Enrolled" },
  { icon: <Users size={36} />, count: 200, label: "Women Trained" },
  { icon: <HeartPulse size={36} />, count: 30, label: "Villages Reached" },
  { icon: <Leaf size={36} />, count: 100, label: "Volunteers Engaged" },
];

function AnimatedCounter({ target }: { target: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 2,
      onUpdate(value) {
        setCurrent(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [target]);

  return <span>{current}+</span>;
}

export default function ImpactSection() {
  return (
    <section className="py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 dark:text-white mb-10">
          📊 Our Impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl text-center shadow hover:shadow-md transition"
            >
              <div className="text-purple-700 dark:text-purple-300 mb-3 flex justify-center">
                {item.icon}
              </div>
              <div className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                <AnimatedCounter target={item.count} />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
