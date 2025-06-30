import { BicepsFlexed } from "lucide-react";
import Image from "next/image";
import volunteer from "../public/volunteer.svg";
import user from "../public/register.png";

export default function VolunteerMain() {
  return (
    <>
      <div className="flex flex-col space-y-4 items-center mb-10 px-4">
        <h1 className="text-xl sm:text-3xl font-bold text-black dark:text-gray-300 text-center">
          Wanna Make a Change?
        </h1>
        <p className="text-sm sm:text-xl leading-relaxed text-center max-w-3xl mx-auto text-black dark:text-gray-300">
          At <span className="text-black dark:text-blue-600">Creative Educational and Social Welfare</span>, we believe that real change starts with everyday people like you. Whether you're passionate about education, health, the environment, or simply giving back to your community, there's a place for you in our mission.
        </p>
        <h2 className="text-lg sm:text-2xl text-black dark:text-red-400 text-center">
          Join Us in Creating a Better Tomorrow{" "}
          <BicepsFlexed className="inline ml-1" size={24} />
        </h2>
      </div>

      <div className="flex flex-col space-y-4 items-center text-center px-4">
        <h3 className="text-md sm:text-xl text-black dark:text-green-600">
          Why Volunteer With Us?
        </h3>
        <p className="text-sm sm:text-base">🤝 Real Impact – Your time and skills go directly into life-changing projects</p>
        <p className="text-sm sm:text-base">📚 Learn & Grow – Gain experience, leadership, and a strong sense of purpose</p>
        <p className="text-sm sm:text-base">🌍 Community – Become part of a network of changemakers</p>
        <p className="text-sm sm:text-base">❤️ Fulfillment – There’s no greater reward than making a difference</p>
        <Image
          src={volunteer}
          width={180}
          alt="volunteer image"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col sm:flex-row mt-6 items-center justify-center gap-4 px-4 mb-10">
        <h2 className="font-semibold text-base sm:text-xl text-center">
          📄 Ready to Get Started?
        </h2>
        <Image
          src={user}
          width={180}
          alt="user-register"
          className="transition-transform hover:scale-105 duration-300"
        />
      </div>
    </>
  );
}
