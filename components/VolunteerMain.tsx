import { BicepsFlexed } from "lucide-react";
import Image from "next/image";
import volunteer from "../public/volunteer.svg";
import user from "../public/register.png";



export default function VolunteerMain(){
    return(
        <>
         <div className="flex flex-col space-y-4 items-center mb-10">
        <h1 className="text-3xl font-bold text-black dark:text-gray-300">Wanna Make a Change?</h1>
        <p className="text-xl leading-relaxed text-center md:text-left max-w-3xl mx-auto px-4 text-black dark:text-gray-300">
          At <span className="text-black dark:text-blue-600">Creative Educational and Social Welfare</span> , we believe that real change starts with everyday people like you. Whether you're passionate about education, health, the environment, or simply giving back to your community, there's a place for you in our mission.
        </p>
        <h2 className="text-2xl  text-black dark:text-red-400">
          Join Us in Creating a Better Tomorrow <BicepsFlexed className="relative bottom-8 left-100" size={30} />
        </h2>
      </div>

      <div className="flex flex-col space-y-4 items-center gap-2 ">
        <h3 className="text-xl text-black dark:text-green-600"> Why Volunteer With Us?</h3>
        <p>🤝 Real Impact – Your time and skills go directly into life-changing projects</p>
        <p>📚 Learn & Grow – Gain experience, leadership, and a strong sense of purpose</p>
        <p>🌍 Community – Become part of a network of changemakers</p>
        <p>❤️ Fulfillment – There’s no greater reward than making a difference</p>
        <Image src={volunteer} width={220} alt="volunteer" className="transition-transform duration-300 hover:scale-130" />
      </div>

      <div className="flex flex-row mt-6 items-center justify-center mb-10">
        <h2 className="font-semibold text-xl">📄 Ready to Get Started?</h2>
        <Image src={user} width={240} alt="user-register" className="transition-transform hover:scale-110 duration-300" />
      </div>
        
        </>
    )
}