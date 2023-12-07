"use client";
import { Navbar, Sidebar } from "@/components";
import { VStack } from "@gluestack-ui/themed";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("username")) router.push("/login");
  }, []);
  return (
    <VStack>
      <Navbar />
      <Sidebar />
    </VStack>
  );
};
