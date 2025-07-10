export default function Roles() {
  const roles = [
    {
      icon: "📚",
      title: "Education Support",
      desc: "Help children and adults with basic education, tutoring, and workshops.",
    },
    {
      icon: "🌱",
      title: "Field Work",
      desc: "Participate in on-ground initiatives like awareness drives and campaigns.",
    },
    {
      icon: "📸",
      title: "Content Creator",
      desc: "Create visuals, capture stories, manage social media, and design posters.",
    },
    {
      icon: "💻",
      title: "Tech Volunteer",
      desc: "Help with website updates, data entry, or digital outreach.",
    },
    {
      icon: "🗣️",
      title: "Community Outreach",
      desc: "Engage with local communities, conduct surveys, and build relationships.",
    },
    {
      icon: "🎤",
      title: "Event Coordinator",
      desc: "Assist in planning and executing events, workshops, or fundraisers.",
    },
  ];

  return (
    <section className="mt-6 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center text-green-800 dark:text-green-400 mb-6">
        🙌 Roles You Can Take Up
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {roles.map((role, index) => (
          <div
            key={index}
            className="p-[2px]  rounded-xl hover: bg-gradient-to-r  hover:from-purple-500 hover:to-blue-700 transition"
          >
            <div className="flex flex-col gap-2 p-4 rounded-xl dark:bg-gray-900 h-full">
              <div className="text-4xl">{role.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {role.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {role.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}