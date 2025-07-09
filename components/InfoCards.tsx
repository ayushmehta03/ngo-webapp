import { CameraIcon, Clock, MailIcon, Map } from "lucide-react";
import {FaBug,FaFemale,FaRecycle,FaLeaf} from "react-icons/fa"
export default function InfoCards() {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4 px-2">
<div className="flex flex-col gap-2 border-2  justify-center h-60 w-full sm:w-[48%]   lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform   hover:scale-110 ease-in ">
        <FaBug className="text-green-600" size={30} />
        <h3 className="text-lg font-semibold text-center">SilkWorm Rearing</h3>
        <p className="text-center text-sm">We promote scientific silkworm rearing techniques to help farmers increase silk yield and quality</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform  hover:scale-110 ease-in">
        <FaLeaf className="text-lime-600" size={30} />
        <h3 className="text-lg font-semibold text-center">Mulberry Cultivation</h3>
        <p className="text-center text-sm">Training farmers in sustainable mulberry farming for continuous, high-quality leaf production</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform hover:scale-110 ease-in">
        <FaFemale  className="text-pink-500" size={30}/>
        <h3 className="text-lg font-semibold text-center">Women Empowerment</h3>
        <p className="text-center text-sm">We empower rural women through skill training in sericulture, creating self employment</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform   hover:scale-110 ease-in">
        <FaRecycle size={30} className="text-blue-500" /> 
        <h3 className="text-lg font-semibold text-center">Eco-Friendly Practices</h3>
        <p className="text-center text-sm">Promoting organic and eco-friendly practices in every stage of silk production</p>
      </div>
    </div>
  );
}