"use client";
import { VStack } from "@gluestack-ui/themed";

import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import makeGraphQLRequest from "@/api/graphQL/request";
import { userPublicationsQuery } from "@/api/graphQL/queries";
import Myfeed from "./Myfeed";

export const HomeComponent = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("username")) router.push("/login");
  }, []);
  const [isCreateBlog, setCreateBlog] = useState(false);
  return (
    <main>
      <VStack>
        {
          isCreateBlog&&<>hii</>
        }
        <Navbar isCreateBlog={isCreateBlog} setCreateBlog={setCreateBlog} />
        <Myfeed />
        <Sidebar />
      </VStack>
    </main>
  );
};
