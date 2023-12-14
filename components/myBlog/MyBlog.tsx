"use client";

import React, { useContext } from "react";
import { Blog } from "../Blog";
import { Pressable, VStack } from "@gluestack-ui/themed";
import { DataStore } from "@/app/layout";
import { createQueryString } from "@/app/utils";
import { useRouter } from "next/navigation";
export const MyBlogComponent = () => {
  // const jsonStoreBlogs = localStorage.getItem("allBlogs");
  // const blogs = jsonStoreBlogs ? JSON.parse(jsonStoreBlogs) : null;
  // const user = localStorage.getItem("username");
  // const filteredList = blogs.filter((blog: any) => blog.username === user);
  const dataBase = useContext(DataStore);
  const router = useRouter();
  console.log(dataBase?.currentUserBlogs, "om");
  return (
    <main>
      <VStack
        ml={120}
        overflow="scroll"
        height={500}
        mt={100}
        position="absolute"
        top={0}
      >
        {dataBase?.currentUserBlogs?.map((blog: any) => {
          return (
            <Pressable
              onPress={() => {
                router.push(`/blog/${blog.id}`);
              }}
            >
              <Blog
                image={blog.image}
                desc={blog.desc}
                tag={blog.tag}
                time={blog.time}
                title={blog.title}
                profile_pic="data:image/jpeg;base64,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"
                author_name={
                  localStorage.getItem("username") !== null
                    ? localStorage.getItem("username")
                    : "DefaultUsername"
                }
              />
            </Pressable>
          );
        })}
      </VStack>
    </main>
  );
};
