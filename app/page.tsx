import Image from "next/image";
import ngocommonpng from "../public/ngo.png";
import earthimage from "../public/earth.svg"
export default function Home() {
  return (
    <>
      <div className="p-5 flex items-center justify-center gap-x-4 text-black dark:text-gray-300">
        <h1 className="text-3xl font-semibold">
          Creative Educational and Social Welfare
        </h1>
        <Image src={ngocommonpng} width={70} height={70} alt="NGO logo" />
      </div>
      <div className="flex justify-center items-center p-4">
         <Image  alt="Earth Image" src={earthimage} height={80} width={140}/>

      </div>
      <div className="flex flex-col items-center  p-4 ">
        <h2 className="text-2xl">Empowering Rural India through Education, Employment, and Empathy</h2>
        <p className="p-6 text-0.8xl text-black dark:text-gray-300" >
     Creative Educational & Social Welfare Organization, based in Purnia, Bihar (est. 2002), is a registered NGO dedicated to sustainable rural development. We promote a wide range of social services—including education & literacy, women & youth empowerment, animal husbandry & fisheries, health & nutrition, vocational training, microfinance (SHGs), legal awareness, and environmental management.</p>
     <p className="p-6 text-0.8xl text-black dark:text-gray-300 ">Led by Secretary Vijay Kumar Arya, we focus on building community resilience and self-reliance through initiatives such as:
Education drives and literacy campaigns for children and youth
Women's development programs, including sericulture training and empowerment sessions
Animal husbandry & fishing support for sustainable livelihoods
Health camps, legal aid workshops, microloan facilitation, and environmental awareness drives</p>
      </div>
    </>
  );
}
