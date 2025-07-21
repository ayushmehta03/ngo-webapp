// pages/dignitary-visits.tsx

import DignitaryCard from "../../components/DignitaryCard"; // Adjust path as per your folder structure

export default function DignitaryVisits() {
  const visits = [
    { id: "1", title: "Meeting with CM Nitish Kumar", src: "/officials/1.jpeg" },
    { id: "2", title: "CM Nitish Kumar's Visit", src: "/officials/2.jpeg" },
    { id: "3", title: "CM Reviewing Sericulture Process", src: "/officials/3.jpeg" },
    { id: "4", title: "Departmental Visit to Sericulture Unit", src: "/officials/4.jpeg" },
    { id: "5", title: "Sericulture Department Delegation", src: "/officials/5.jpeg" },
    { id: "6", title: "IAS Training Batch Visit", src: "/officials/6.jpeg" },
    { id: "7", title: "Forest Department Visit", src: "/officials/8.jpeg" },
    { id: "8", title: "Local Press Interaction", src: "/officials/9.jpeg" },
    { id: "9", title: "NGO Felicitation Ceremony", src: "/officials/10.jpeg" },
  ];

  return (
    <>
      <div className="flex flex-col mt-6 px-4 mb-4">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-purple-400 mb-2">
          Leadership & Dignitary Visits
        </h1>
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A glimpse into the esteemed officials and dignitaries who have graced our NGO
        </h2>
      </div>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6 max-w-screen-xl mx-auto">
  {visits.map((visit) => (
    <DignitaryCard
      key={visit.id}
      id={visit.id}
      title={visit.title}
      src={visit.src}
    />
  ))}
</section>

    </>
  );
}
