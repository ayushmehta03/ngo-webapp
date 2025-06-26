"use client";
import Image from "next/image";
import ngocommonpng from "../public/ngo.png";
import earthimage from "../public/earth.svg";
import ImpactSection from "@/components/Impact";

export default function Home() {
  return (
    <>
      {/* Logo + Title */}
      <div className="p-5 flex items-center justify-center gap-x-4 text-black dark:text-gray-300">
        <h1 className="text-3xl font-semibold">
          Creative Educational and Social Welfare
        </h1>
        <Image src={ngocommonpng} width={70} height={70} alt="NGO logo" />
      </div>

      {/* Earth Image */}
      <div className="flex justify-center items-center p-4">
        <Image alt="Earth Image" src={earthimage} height={80} width={140} />
      </div>

      {/* Hero Text Section */}
      <div className="flex flex-col items-center px-4 py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 dark:text-white max-w-3xl">
          Empowering Rural India through Education, Employment, and Empathy
        </h2>

        <div className="mt-6 space-y-4 max-w-4xl text-sm md:text-base text-black dark:text-gray-300">
          <p>
            Creative Educational & Social Welfare Organization, based in Purnia, Bihar (est. 2002), is a registered NGO dedicated to sustainable rural development. We promote a wide range of social services—including education & literacy, women & youth empowerment, animal husbandry & fisheries, health & nutrition, vocational training, microfinance (SHGs), legal awareness, and environmental management.
          </p>
          <p>
            Led by Secretary Vijay Kumar Arya, we focus on building community resilience and self-reliance through initiatives such as:
          </p>
         
        </div>
      </div>

      {/* Impact Section */}
      <ImpactSection />
    </>
  );
}
