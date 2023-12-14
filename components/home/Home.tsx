"use client";
import { HStack, VStack } from "@gluestack-ui/themed";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const HomeComponent = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <main>
      <VStack>
        {pathname === "/login" ? (
          <></>
        ) : (
          <>
            <Navbar />
            {!pathname.includes("/blog") ? (
              <HStack justifyContent="flex-end">
                <Sidebar />
              </HStack>
            ) : (
              <></>
            )}
          </>
        )}
      </VStack>
    </main>
  );
};
