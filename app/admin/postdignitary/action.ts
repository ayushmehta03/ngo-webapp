'use server';

import { prisma } from "@/app/utilis/db";
import cloudinary from "@/lib/cloudinary";
import type { UploadApiResponse } from "cloudinary";
import { revalidatePath } from "next/cache";

export async function handleDignitary(prevState: any, formData: FormData) {
  const title = formData.get("title") as string | null;
  const file = formData.get("file") as File | null;

  if (!title) {
    return { success: false, message: "Title is required" };
  }

  if (!file || !file.size) {
    return { success: false, message: "No file uploaded" };
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ folder: "blog" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }).end(buffer);
    });

    const imagUrl = (uploadResult as UploadApiResponse).secure_url;

    await prisma.dignitaryVisit.create({
      data: {
        title,
        imagUrl,
      },
    });

    revalidatePath("/admin/manage/post");
    return { success: true, message: "Upload successful" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Upload failed. Try again." };
  }
}

export async function editPost(postId: string, updatedData: { title?: string }) {
  try {
    await prisma.dignitaryVisit.update({
      where: { id: postId },
      data: updatedData,
    });
    revalidatePath("/admin/manage/post");
  } catch (err) {
    throw new Error("Failed to update title");
  }
}

export default async function deletePost(postId: string) {
  try {
    await prisma.dignitaryVisit.delete({
      where: { id: postId },
    });
    revalidatePath("/admin/manage/post");
  } catch (error) {
    throw new Error("Failed to delete post");
  }
}
