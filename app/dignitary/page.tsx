import { prisma } from "@/app/utilis/db";
import ImpactStats from "@/components/general/ImpactStats";
 const dynamic = "force-dynamic"; 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function DignitaryVisits() {
  const visits = await prisma.dignitaryVisit.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <div className="flex flex-col mt-6 px-4 mb-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-purple-400 mb-2">
          Leadership & Dignitary Visits
        </h1>
        <h2 className="font-semibold text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A glimpse into the esteemed officials and dignitaries who have graced our NGO
        </h2>
      </div>

      {visits.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 my-8">
          No dignitary visits have been posted yet. Please check back soon!
        </p>
      ) : (
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8 max-w-6xl mx-auto">
  {visits.map((visit) => (
    <div
      key={visit.id}
      className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-white dark:from-[#1f1f1f] dark:to-black hover:shadow-2xl transition-transform transform hover:scale-[1.02] duration-300 max-w-xs mx-auto"
    >
      <div className="relative w-full h-52 sm:h-60">
        <img
          src={visit.imagUrl}
          alt={visit.title}
          className="w-full h-full object-cover object-center rounded-t-xl"
        />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
          {visit.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Posted on{" "}
          {new Date(visit.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  ))}
</section>

      )}

      <section className="max-w-screen-xl mx-auto px-4 py-8">
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          <AccordionItem value="visit-cm-nitish">
            <AccordionTrigger>Visit by Hon’ble CM Nitish Kumar</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Hon’ble Chief Minister Nitish Kumar visited our sericulture center to
                evaluate our rural silk production initiatives. During the visit, he
                engaged with local silkworm farmers, reviewed our mulberry plantation
                units, and praised the women-led workforce. The discussion focused on
                scaling production and enhancing market linkages. As a key outcome, the
                state government assured potential grants and technical support. Future
                plans include expansion into nearby districts and pilot testing of
                improved cocoon-rearing techniques.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="visit-dc">
            <AccordionTrigger>Visit by District Collector</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The District Collector’s visit aimed to review local employment generated
                through sericulture. She toured cocoon processing units and appreciated
                the youth participation in silk value chains. The key outcome was
                immediate approval for road infrastructure to support raw silk transport.
                A quarterly review system was proposed to monitor sericulture cluster
                development.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="visit-silk-board">
            <AccordionTrigger>Visit by Central Silk Board Officials</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Officials from the Central Silk Board evaluated our production quality
                and shared guidance on disease-free laying (DFL) procurement. Discussions
                focused on certification, pest control, and commercial reeling setups.
                They pledged support for cluster-level workshops and potential equipment
                subsidies in upcoming quarters.
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
