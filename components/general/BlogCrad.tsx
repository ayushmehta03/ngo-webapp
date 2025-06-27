import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IAppProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    createdAt: Date;
  };
}

export default function BlogCard({ data }: IAppProps) {
  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden shadow-lg transition hover:shadow-xl dark:border-gray-800 dark:bg-gray-950  group w-full max-w-[400px] h-[420px] flex flex-col">
      <div className="relative w-full h-48">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            unoptimized
            className="rounded-t-md object-cover"
          />
        </AspectRatio>
      </div>

      <CardContent className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2  transition mb-2">
            {data.title}
          </h3>
    <p className="text-1xl p-2 text-gray-900 font-semibold  dark:text-white line-clamp-1  transition mb-2 ">
        Author:  {data.content}
    </p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Posted on {formattedDate}
          </p>
         
        </div>
      </CardContent>
    </Card>
  );
}
