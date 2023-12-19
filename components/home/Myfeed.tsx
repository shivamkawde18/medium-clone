"use client";
import { VStack, Pressable } from "@gluestack-ui/themed";
import React, { useContext } from "react";
import { Blog } from "../blog/Blog";
import { DataStore } from "@/app/layout";
import { useRouter } from "next/navigation";

export default function Myfeed() {
  const router = useRouter();
  const dataBase = useContext(DataStore);

  return (
    <VStack
      height={600}
      position="absolute"
      top={0}
      mt={50}
      overflow="scroll"
      $sm={{ position: "relative", mt: 0, top: 0 }}
      $base={{ position: "relative", mt: 0, top: 0 }}
      $md={{ position: "relative", mt: 0, top: 0 }}
      $lg={{
        position: "absolute",
        mt: 50,
        top: 0,
      }}
    >
      <VStack
        justifyContent="center"
        space="md"
        mr={100}
        ml={150}
        mt={50}
        $lg={{
          mr: 100,
          ml: 150,
          mt: 50,
        }}
        $md={{
          mr: 0,
          ml: 0,
          mt: 0,
        }}
        alignSelf="center"
        $sm={{
          mr: 0,
          ml: 0,
          mt: 0,
        }}
        $base={{
          mr: 0,
          ml: 0,
          mt: 0,
        }}
      >
        {dataBase?.myFeeds?.map((blog: any, index: number) => {
          return (
            <Pressable
              onPress={() => {
                router.push(`/blog/${blog.id}`);
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
