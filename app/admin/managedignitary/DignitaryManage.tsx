'use client';

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { deletePost, editPost } from "./action";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";

interface IAppProps {
  data: {
    id: string;
    title: string;
    imagUrl: string;
    createdAt: Date;
  };
}

export default function DignitaryManage({ data }: IAppProps) {
  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [isPending, startTransition] = useTransition();
  const [newTitle, setNewTitle] = useState("");

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deletePost(data.id);
        toast.success("Post Deleted Successfully");
      } catch (err) {
        toast.error("Failed to delete the post");
      }
    });
  };

  const changeTitle = () => {
    startTransition(async () => {
      try {
        await editPost(data.id, { title: newTitle });
        toast.success("Title updated successfully");
      } catch (err) {
        toast.error("Failed to update the title");
      }
    });
  };

  return (
    <Card className="shadow-md hover:shadow-xl transition w-full rounded-xl overflow-hidden bg-white dark:bg-gray-900 border dark:border-gray-800 flex flex-col">
      <div className="relative w-full">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={data.imagUrl}
            alt={data.title}
            fill
            unoptimized
            className="object-cover"
          />
        </AspectRatio>
      </div>

      <CardContent className="p-4 flex flex-col gap-3 flex-grow">
        <div>
          <p className="text-xs text-muted-foreground mb-1">
            Posted on {formattedDate}
          </p>
          <p className="font-semibold text-base line-clamp-2">{data.title}</p>
        </div>

        <Input
          className="text-sm"
          placeholder="Edit post title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <div className="flex justify-between items-center gap-2 mt-auto">
          <Button
            onClick={changeTitle}
            disabled={isPending || newTitle.trim() === ""}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          >
            {isPending ? "Updating..." : "Update"}
          </Button>
          <Button
            variant="destructive"
            disabled={isPending}
            onClick={handleDelete}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
