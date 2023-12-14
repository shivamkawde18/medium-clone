"use client"
import Myfeed from "@/components/home/Myfeed";
import { useRouter } from "next/navigation";
import { useEffect,useLayoutEffect } from "react";

export default function Root() {
  
  return (
    <>
      <Myfeed />
    </>
  );
}
