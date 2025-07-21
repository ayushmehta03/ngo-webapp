import Image from "next/image";

interface DignitaryProps {
  id: string;
  title: string;
  src: string;
}

const DignitaryCard = ({ id, title, src }: DignitaryProps) => {
  return (
    <div
      key={id}
      className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out"
    >
      <div className="relative w-full h-52">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 468px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-center text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default DignitaryCard;