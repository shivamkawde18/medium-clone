"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import StyledJsxRegistry from "./registry";
import { HomeComponent } from "@/components";
import { createContext, useContext, useEffect, useState } from "react";
import { MY_FEEDS, getCurrentUserBlogs } from "./utils";

const inter = Inter({ subsets: ["latin"] });

export const DataStore = createContext({});
export default function RootLayout({
  children,
  text,
}: {
  children: React.ReactNode;
  text: any;
}) {
  const [myFeeds, setMyfeeds] = useState(MY_FEEDS);
  const [currentUserBlogs, setCurrentUserBlogs] = useState();
  useEffect(()=>{
setCurrentUserBlogs(getCurrentUserBlogs())
  },[])
  return (
    <html lang="en" className="gs">
      <body className={inter.className}>
        <DataStore.Provider
          value={{
            myFeeds,
            setMyfeeds,
            currentUserBlogs,
            setCurrentUserBlogs
          }}
        >
          <Providers>
            <HomeComponent />

            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </Providers>
        </DataStore.Provider>
      </body>
    </html>

    // <Providers>
    //   <HomeComponent />
    //   <StyledJsxRegistry>{children}</StyledJsxRegistry>
    // </Providers>
  );
}
