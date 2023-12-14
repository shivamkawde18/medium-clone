"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import StyledJsxRegistry from "./registry";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { MY_FEEDS, getCurrentUserBlogs } from "./utils";
import { useRouter } from "next/navigation";
import { HomeComponent } from "@/components/home/Home";

const inter = Inter({ subsets: ["latin"] });

export const DataStore = createContext({});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [myFeeds, setMyfeeds] = useState(MY_FEEDS);
  const [currentUserBlogs, setCurrentUserBlogs] = useState();
  const [userName, setUserName] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    setCurrentUserBlogs(getCurrentUserBlogs());
    setUserName(localStorage.getItem("username"));
  }, []);
  useLayoutEffect(() => {
    if (!localStorage.getItem("username")) router.push("/login");
  }, []);
  return (
    <html lang="en" className="gs">
      <body className={inter.className}>
        <DataStore.Provider
          value={{
            myFeeds,
            setMyfeeds,
            currentUserBlogs,
            setCurrentUserBlogs,
            userName,
            setUserName,
          }}
        >
          <Providers>
            <HomeComponent />
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </Providers>
        </DataStore.Provider>
      </body>
    </html>
  );
}
