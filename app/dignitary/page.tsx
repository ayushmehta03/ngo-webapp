// pages/dignitary-visits.tsx

import ImpactStats from "@/components/general/ImpactStats";
import DignitaryCard from "../../components/DignitaryCard"; // Adjust path as per your folder structure
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function DignitaryVisits() {
  const visits = [
    { id: "1", title: "Meeting with CM Nitish Kumar", src: "/officials/1.jpeg" },
    { id: "2", title: "CM Nitish Kumar's Visit", src: "/officials/2.jpeg" },
    { id: "3", title: "CM Reviewing Sericulture Process", src: "/officials/3.jpeg" },
    { id: "4", title: "Departmental Visit to Sericulture Unit", src: "/officials/4.jpeg" },
    { id: "5", title: "Sericulture Department Delegation", src: "/officials/5.jpeg" },
    { id: "6", title: "Field Visist by Officials ", src: "/officials/6.jpeg" },
    { id: "7", title: "Disctrict Magistate Visit", src: "/officials/8.jpeg" },
    { id: "8", title: "Visit by MP Mr.Prem Chandra Gupta", src: "/officials/9.jpeg" },
    { id: "9", title: "Visit by Education Minister Mr.Prakash Yadav", src: "/officials/10.jpeg" },
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
<section>
 
<Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
  <AccordionItem value="visit-cm-nitish">
    <AccordionTrigger>Visit by Hon’ble CM Nitish Kumar</AccordionTrigger>
    <AccordionContent>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Hon’ble Chief Minister Nitish Kumar visited our sericulture center to evaluate our rural silk production initiatives. During the visit, he engaged with local silkworm farmers, reviewed our mulberry plantation units, and praised the women-led workforce. The discussion focused on scaling production and enhancing market linkages. As a key outcome, the state government assured potential grants and technical support. Future plans include expansion into nearby districts and pilot testing of improved cocoon-rearing techniques.
      </p>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="visit-dc">
    <AccordionTrigger>Visit by District Collector</AccordionTrigger>
    <AccordionContent>
      <p className="text-sm leading-relaxed text-muted-foreground">
        The District Collector’s visit aimed to review local employment generated through sericulture. She toured cocoon processing units and appreciated the youth participation in silk value chains. The key outcome was immediate approval for road infrastructure to support raw silk transport. A quarterly review system was proposed to monitor sericulture cluster development.
      </p>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="visit-silk-board">
    <AccordionTrigger>Visit by Central Silk Board Officials</AccordionTrigger>
    <AccordionContent>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Officials from the Central Silk Board evaluated our production quality and shared guidance on disease-free laying (DFL) procurement. Discussions focused on certification, pest control, and commercial reeling setups. They pledged support for cluster-level workshops and potential equipment subsidies in upcoming quarters.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>





</section>
<section>
 <ImpactStats />

</section>


    </>
  );
}

