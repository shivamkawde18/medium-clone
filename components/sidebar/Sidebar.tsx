"use client";
import { DataStore } from "@/app/layout";
import {
  MY_FEEDS,
  RECOMMENDEED_TOPIC,
  getCurrentUserBlogs,
  peopleYouMayKnow,
  sidebarBorder,
} from "@/utils";
import { HStack, VStack, Text, Pressable } from "@gluestack-ui/themed";
import { usePathname } from "next/navigation";

import React, { useContext, useState } from "react";
import { PeopleYouMayKnow } from "../common";
export const Sidebar = () => {
  const pathname = usePathname();

  const getCurrentUserFilteredBlogs = (topic: string) => {
    const currentUserBlogs = getCurrentUserBlogs();
    const recommendedBlogs = currentUserBlogs?.filter(
      (blog: any) => blog.tag.toLowerCase() === topic.toLowerCase()
    );

    dataBase?.setCurrentUserBlogs(recommendedBlogs);
  };

  const getFeedsFiterBlogs = (topic: string) => {
    const recommendedBlogs = MY_FEEDS?.filter(
      (blog: any) => blog.tag.toLowerCase() === topic.toLowerCase()
    );

    dataBase?.setMyfeeds(recommendedBlogs);
  };

  const dataBase = useContext(DataStore);
  const [isSelected, setSelected] = useState<number>();
  return (
    <VStack>
      <VStack {...sidebarBorder} width={500} padding={30} space="xl">
        <Text
          textAlign="center"
          fontWeight="$bold"
          fontSize="$lg"
          color="#111"
          mb={10}
        >
          Recommended topics
        </Text>
        <HStack flexWrap="wrap" space="md">
          {RECOMMENDEED_TOPIC.map((topic, index) => {
            return (
              <HStack
                key={topic + index}
                borderRadius={100}
                backgroundColor={index === isSelected ? "#1A8917" : "#F2F2F2"}
                borderColor="#f2f2f2"
                padding={8}
                //@ts-ignore
                width={"fit-content"}
                alignItems="center"
                justifyContent="center"
              >
                <Pressable
                  onPress={(e) => {
                    setSelected(index);
                    pathname === "/"
                      ? getFeedsFiterBlogs(topic)
                      : getCurrentUserFilteredBlogs(topic);
                  }}
                >
                  <Text
                    color={index === isSelected ? "#fff" : "#242424"}
                    fontSize={"$sm"}
                  >
                    {topic}
                  </Text>
                </Pressable>
              </HStack>
            );
          })}
        </HStack>

        <VStack space="xl">
          <Text>Who to follow</Text>

          {peopleYouMayKnow.map((people, index) => {
            return (
              <PeopleYouMayKnow
                designation={people.designation}
                image={people.image}
                name={people.name}
                key={index + people.name}
              />
            );
          })}
        </VStack>

        <Text fontSize={"$sm"} color="#1A8917">
          See more suggestions
        </Text>
      </VStack>
    </VStack>
  );
};
