"use client";
import Head from "next/head";
import Image from "next/image";
import ngocommonpng from "../public/ngo.png";
import earthimage from "../public/earth.svg";
import ImpactSection from "@/components/Impact";
import InfoCards from "@/components/InfoCards";
import WomenPower from "@/components/general/WomenPower";

export default function Home() {
  return (
    
    <>
    <Head>
  <title>Creative NGO Purnea – Empowering Rural Bihar</title>
  <meta name="description" content="Creative Educational & Social Welfare Organization is a Purnea-based NGO focused on rural education, women empowerment, health, and self-reliance." />
  <meta name="keywords" content="NGO in Bihar, Purnea NGO, Rural education, Volunteer Bihar, Women empowerment NGO, Creative NGO Purnea" />
  <meta name="author" content="Creative Educational & Social Welfare Organization" />

  <meta property="og:title" content="Creative NGO Purnea – Empowering Rural India" />
  <meta property="og:description" content="Join us in creating change across Bihar through education, empowerment, and sustainability." />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://www.creativengopurnea.org" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
</Head>

      <div className="p-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-black dark:text-gray-300 text-center ">
        <h1 className="text-2xl sm:text-3xl font-semibold max-w-xs sm:max-w-none">
          Creative Educational and Social Welfare
        </h1>
        <Image src={ngocommonpng} width={60} height={60} alt="NGO logo" />
      </div>

      <div className="flex justify-center items-center p-4">
        <Image alt="Earth Image" src={earthimage} height={70} width={120} />
      </div>

      <div className="flex flex-col items-center px-4 py-6 text-center ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700 dark:text-white max-w-xl sm:max-w-2xl">
          Empowering Rural India through Education, Employment, and Empathy
        </h2>

        <div className="mt-5 space-y-4 max-w-md sm:max-w-xl md:max-w-3xl text-sm sm:text-base text-black dark:text-gray-300">
          <p>
            Creative Educational & Social Welfare Organization, based in Purnia, Bihar est. 2002, is a registered NGO dedicated to sustainable rural development. We promote a wide range of social services—including education & literacy, women & youth empowerment, animal husbandry & fisheries, health & nutrition, vocational training, microfinance (SHGs), legal awareness, and environmental management.
          </p>
          <p>
Led by Secretary Vijay Kumar Arya, our mission is to strengthen community resilience and promote self-reliance through a range of impactful initiatives.          </p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl text-center font-semibold text-green-500"> What We Do in Sericulture</h2>
        
<InfoCards />
       <h2 className="text-center text-2xl font-semibold mt-6 mb-6 text-blue-500">Empowering Women Through Skill Development</h2>

      </div>
      <WomenPower />

      <ImpactSection />
    </>
  );
}
