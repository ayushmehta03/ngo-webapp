import Image from "next/image";
import ngocommonpng from "../public/ngo.png"
export default function Home() {
  return (
    <>
   <div className=" p-5 flex items-center flex-row justify-center">
    <h1 className="text-xl ">Creative Educational and Social Welfare 
    </h1>
     <Image  src={ngocommonpng}  width={63} alt="ngo common png" height={70} />

   </div>
   </>
  );
}
