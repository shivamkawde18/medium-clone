"use client";
import { HomeComponent, Navbar, Sidebar } from "@/components";
import Myfeed from "@/components/home/Myfeed";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { createContext, useContext } from "react";
import { MY_FEEDS } from "./utils";
import { VStack } from "@gluestack-ui/themed";
import { DataStore } from "./layout";

// export const DataStore = createContext({});
export default function Root() {

  // const [myFeeds, setMyfeeds] = useState(MY_FEEDS);
  return (
    <>
    
        <Myfeed />

    </>
  );
}
