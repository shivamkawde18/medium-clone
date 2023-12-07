"use client";
import { VStack } from "@gluestack-ui/themed";

import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import makeGraphQLRequest from "@/api/graphQL/request";
import { userPublicationsQuery } from "@/api/graphQL/queries";

export const HomeComponent = () => {
  const router = useRouter();
const fin=async ()=>{
  const { data: myblogPosts } = await makeGraphQLRequest(userPublicationsQuery, {
    username: "shivamkawde",
    first: 3,
  });
  console.log(myblogPosts)
}
fin()
  
  useEffect(() => {
    if (!localStorage.getItem("username")) router.push("/login");
  }, []);
  return (
    <main>
      <VStack>
        <Navbar />
        <Sidebar />
      </VStack>
    </main>
  );
};
