"use client";
import { HStack, VStack, Image, Text, Box } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
interface IBlogProps {
  author_name: string;
  title: string;
  desc: string;
  image: string;
  profile_pic: string;
  time: string;
  tag: string;
}
export const Blog = (props: IBlogProps) => {
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
    <VStack {...boder} width={600} p={30} space="md">
      <HStack space="md" alignItems="center">
        <Image
          height={30}
          width={30}
          borderRadius={100}
          source={{
            uri: props.profile_pic,
          }}
        />
        <HStack alignItems="center">
          <Text fontSize={"$sm"} color="#242424">
            {props.author_name} .
          </Text>
        </HStack>

        <HStack alignItems="center" space="sm">
          <Image
            height={20}
            width={20}
            borderRadius={100}
            source={{
              uri: "https://i.pinimg.com/474x/44/7e/3b/447e3bacbc5176a11c93b24f952e593c.jpg",
            }}
          />
          <Text fontSize={"$sm"}>Member only</Text>
        </HStack>
      </HStack>
      <HStack justifyContent="space-between">
        <VStack space="sm" justifyContent="space-between">
          <Text fontSize={"$md"} fontWeight="$bold" color="#242424">
            {props.title}{" "}
          </Text>
          <Text width={400}>{props.desc} </Text>
        </VStack>
        <Image
          height={100}
          width={100}
       
          source={{
            uri: props.image,
          }}
        />
      </HStack>

      <HStack>
        <HStack space="md">
          <Box
            borderRadius={100}
            backgroundColor="#F2F2F2"
            borderColor="#f2f2f2"
            padding={8}
            width={"fit-content"}
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#242424" fontSize={"$sm"}>
              {props.tag}
            </Text>
          </Box>
          <Text alignSelf="center">{props.time}</Text>
        </HStack>
      </HStack>
    </VStack>
  );
};
