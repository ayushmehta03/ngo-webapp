"use client";

import CountUp from "react-countup";

const ImpactStats = () => {
  const stats = [
    { title: "Dignitary Visits", value: 10, suffix: "+" },
    { title: "Farmers Involved", value: 500, suffix: "+" },
    { title: "Women Trained", value: 300, suffix: "+" },
    { title: "Youth Skilled", value: 120, suffix: "+" },
    { title: "Mulberry Plants Grown", value: 25000, suffix: "+" },
    { title: "Silk Units Active", value: 8 },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
        Our Sericulture Impact in Numbers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow rounded-2xl p-6 text-center"
          >
            <h3 className="text-4xl font-bold text-green-600">
              <CountUp end={stat.value} duration={6} suffix={stat.suffix || ""} />
            </h3>
            <p className="text-sm text-gray-500 mt-2">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
