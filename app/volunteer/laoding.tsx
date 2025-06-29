"use client"
import { useTheme } from "next-themes";
import { ClipLoader } from "react-spinners";
export default function Loading() {
      const { theme } = useTheme();
      const spinnerColor= theme==="dark"?"ffffff":"#3b82f6"

    return(
    <div className="flex items-center justify-center min-h-screen ">
    <ClipLoader  size={150} color={spinnerColor} />

    </div>)
}
