"use client";
import {
  HStack,
  VStack,
  Image,
  Text,
  Box,
  Pressable,
} from "@gluestack-ui/themed";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Blog } from "../Blog";
import { MY_FEEDS, createQueryString } from "@/app/utils";
import { DataStore } from "@/app/layout";
import { useRouter } from "next/navigation";

export default function Myfeed(props: any) {
  const router = useRouter();
  const [feeds, setFeeds] = useState();
  const dataBase = useContext(DataStore);
  console.log(dataBase, props, "yeee");
  const boder = {
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    // padding: 40,
    borderLeftColor: "#ebebeb",
    borderRightColor: "#ebebeb",
    // borderTopColor: "#ebebeb",
    borderBottomColor: "#ebebeb",
    // width: 500,
  };
 
  return (
    <VStack height={600} position="absolute" top={0} mt={50}>
      <VStack justifyContent="center" space="md" mr={100} ml={120} mt={50}>
        {dataBase?.myFeeds?.map((blog: any, index: number) => {
          return (
            <Pressable
              onPress={() => {
                router.push(
                  `/blog/${blog.id}` +
                    "?" +
                    createQueryString("data", JSON.stringify(blog))
                );
              }}
            >
              <Blog
                image={blog.image}
                title={blog.title}
                desc={blog.desc}
                tag={blog.tag}
                profile_pic={blog.author.profile}
                author_name={blog.author.name}
                time={blog.time}
                key={index + blog.title}
              />
            </Pressable>
          );
        })}
      </VStack>
    </VStack>
  );
}
