"use client";
import { HStack, VStack } from "@gluestack-ui/themed";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import makeGraphQLRequest from "@/api/graphQL/request";
import { DataStore } from "@/app/layout";


export const HomeComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (!localStorage.getItem("username")) router.push("/login");
  }, []);
  const dataBase =useContext(DataStore)
  console.log(dataBase,"myyyy")
  return (
    <main>
      <VStack>
        {pathname === "/login" ? (
          <></>
        ) : (
          <>
            <Navbar />
            <HStack justifyContent="flex-end">
              {" "}
              <Sidebar  />
            </HStack>
          </>
        )}
      </VStack>
    </main>
  );
};
