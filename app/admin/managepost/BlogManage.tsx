"use client"
export const dynamic = "force-dynamic"; 
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import deletePost, { editPost } from "./action";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";

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
    const[newTitle,setnewTile]=useState("");

 const changeTitle=()=>{
  startTransition(async()=>{
    try{
      await editPost(data.id,{title:newTitle})
      toast.success("Title updated successfully")
    } catch(err){
      toast.error("Failed to update the title")
    }
  })



 }
  return (
    <Card className="overflow-hidden shadow-lg transition hover:shadow-xl dark:border-gray-800 dark:bg-gray-950  group w-full max-w-[400px] h-[440px] flex flex-col">
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
        <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
            Posted on {formattedDate}
          </p>
    <p>{data.title}</p>
        </div>
        <Input className="mb-4" placeholder="Edit Title for your post" required value={newTitle}  onChange={(e) => setnewTile(e.target.value)} type="text"/>

        <div className="flex justify-between  items-center  ">
       
         <Button
           onClick={changeTitle}
            disabled={isPending}
           className="text-white  hover:bg-gradient-to-r from-blue-500 to bg-purple-500"
>
         {isPending ? "Updating..." : "Update Title"}
         </Button>
           <Button  variant="ghost" className="  hover:bg-gradient-to-r from-blue-500 to bg-purple-500" disabled={isPending} onClick={handleDelete}>
{isPending?"Deleting...":"Delete Post"}
         </Button>
        </div>
        
      </CardContent>
    </Card>
  );
}

