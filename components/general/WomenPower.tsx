import Image from "next/image"
import image1 from "../../public/1.jpeg"
import image2 from "../../public/2.jpeg"
import image3 from "../../public/3.jpeg"
import image4 from "../../public/4.jpeg"
import { Card, CardContent } from "../ui/card"
import { AspectRatio } from "../ui/aspect-ratio"

export default function WomenPower() {
  const titles = [
    "Hands-On Reeling Training",
    "Cocoon Drying and Inspection",
    "Cocoon Sorting by Trainees",
    "Golden Yield: Silk Cocoons",
  ];

  const images = [image1, image2, image3, image4];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-12 py-10">
      {images.map((img, index) => (
        <div
          key={index}
          className="group w-full h-[400px] rounded-xl bg-white dark:bg-gray-950 bg-clip-padding transition-transform hover:scale-105 mx-auto"
        >
          <div className="relative rounded-xl p-[2px] transition duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500">
            <Card className="h-full w-full overflow-hidden rounded-xl bg-white dark:bg-gray-950 shadow-lg flex flex-col">
              <div className="relative w-full h-48 mb-6">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={img}
                    alt={`image-${index + 1}`}
                    fill
                    unoptimized
                    className="rounded-t-md object-cover"
                  />
                </AspectRatio>
              </div>

              <CardContent className="p-4 flex flex-col justify-between flex-grow">
                
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
