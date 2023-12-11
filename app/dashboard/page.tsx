"use client";
import { Navbar, Sidebar } from "@/components";
import { VStack } from "@gluestack-ui/themed";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("username")) router.push("/login");
  }, []);
  return <VStack>shivam</VStack>;
};
export default Dashboard;
