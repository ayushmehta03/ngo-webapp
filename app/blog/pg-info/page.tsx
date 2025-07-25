import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BedSingle,
  BrushCleaning,
  CctvIcon,
  ChefHat,
  FormInputIcon,
  HelpingHand,
  IndianRupee,
  Lightbulb,
  WifiCog,
} from "lucide-react";
import { FaMoneyBill } from "react-icons/fa";

export default function PgInfo() {
  return (
    <>
    <div className="px-4 sm:px-10 max-w-4xl mx-auto mt-8">
  <h1 className="text-center font-extrabold text-3xl sm:text-4xl text-blue-700 dark:text-blue-400 tracking-tight">
    APNA PG or HOSTEL
  </h1>
  <p className="mt-6 text-center text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-7 sm:leading-8">
    Our NGO also operates a secure and affordable Paying Guest facility dedicated to girls and working women. Nestled in a peaceful environment, the PG offers comfortable accommodation, nutritious meals, and a nurturing community. We emphasize safety, hygiene, and empowerment—making it the perfect space for women to live, learn, and grow with dignity.
  </p>
</div>


      <div className="flex items-center justify-center gap-2 mt-10">
        <h2 className="text-xl text-green-800 dark:text-green-600 font-semibold">Our Services</h2>
        <HelpingHand className="text-pink-500" />
      </div>

      <section className="mt-10 px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {[
          { icon: <Lightbulb className="text-yellow-600 dark:text-yellow-500" />, label: "24 Hours Light" },
          { icon: <WifiCog className="text-green-600 dark:text-green-400" />, label: "Fast Wifi" },
          { icon: <BrushCleaning className="text-red-600 dark:text-red-300" />, label: "Daily Sweeping" },
          { icon: <CctvIcon className="text-blue-700 dark:text-blue-500" />, label: "24x7 CCTV" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-lg min-h-[12rem] gap-4 border rounded-2xl shadow-md p-4 bg-white dark:bg-gray-900 hover:shadow-lg transition"
          >
            {item.icon}
            <p className="text-center">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 flex items-center justify-center gap-2">
        <h2 className="text-xl font-semibold">Efficient Rates</h2>
        <FaMoneyBill className="text-green-700 dark:text-green-600" size={24} />
      </section>

      <section className="mt-10 px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {[
          {
            title: "Single Seater",
            type: "Single",
            price: "5100",
            meal: "3 meals",
          },
          {
            title: "Double Seater",
            type: "Double",
            price: "4700",
            meal: "3 meals",
          },
          {
            title: "Three Seater Dormitory",
            type: "Triple",
            price: "250 /day",
            meal: "3 meals",
          },
        ].map((plan, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-4 min-h-[15rem] w-full flex-col rounded-2xl border shadow-md dark:bg-gray-900 bg-white p-4 hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg">{plan.title}</h2>
            <div className="flex gap-2 items-center">
              <BedSingle className="text-blue-700 dark:text-blue-600" />
              <p>{plan.type}</p>
            </div>
            <div className="flex gap-2 items-center">
              <IndianRupee className="text-green-700 dark:text-green-500" />
              <p>{plan.price}</p>
            </div>
            <div className="flex gap-2 items-center">
              <ChefHat className="text-yellow-700 dark:text-yellow-500" />
              <p>{plan.meal}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="flex justify-center mt-12">
        <div className="mt-4 flex flex-col items-center  p-4 rounded-2xl border-2 w-[360px] h-140 ">
        <div className="flex gap-3 items-center p-2">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-500">Enquiry Form</h2>
        <FormInputIcon className="text-green-700 dark:text-green-600" />
        </div>
          
        <form className="flex flex-col gap-2 min-w-full">
        <div className="flex flex-col justify-center gap-2  p-2 w-full">
  <Label>Enter your name</Label>
     <Input  required type="text"  className=""/>
        </div>
                <div className="flex flex-col justify-center gap-2  p-2 w-full">
  <Label>Enter your email id</Label>
     <Input  required type="email"  className=""/>
        </div>
        <div className="flex flex-col justify-center gap-2  p-2 w-full">
  <Label>Enter your mobile number</Label>
     <Input  required type="email"  className=""/>
        </div>
        </form>
        </div>
      </section>
    </>
  );
}
