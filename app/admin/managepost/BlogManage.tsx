"use client"
export const dynamic = "force-dynamic"; 

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import deletePost from "./action";
import { useTransition } from "react";
import toast from "react-hot-toast";

interface IAppProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    createdAt: Date;
  };
}

export default function BlogManage({ data }: IAppProps) {
  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [isPending,startTransition]=useTransition();
  const handleDelete=()=>{
    startTransition(async()=>{
        try{
            await deletePost(data.id)
            toast.success("Post Deletd Successfully")
        }catch(err){
            toast.error("Failed to delete the post")
        }
    })
  }
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">
            Posted on {formattedDate}
          </p>
    
        </div>
        <div className="flex justify-between items-center mt-auto">

         <Button  variant="ghost" className="hover:bg-gradient-to-r from-blue-500 to bg-purple-500" disabled={isPending} onClick={handleDelete}>
{isPending?"Deleting...":"Delete Post"}
         </Button>
        </div>
      </CardContent>
    </Card>
  );
}
