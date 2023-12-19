"use client";
import {
  VStack,
  Text,
  HStack,
  Image,
  Box,
  MessageCircleIcon,
  Icon,
  FavouriteIcon,
  PlayIcon,
  DownloadIcon,
  ThreeDotsIcon,
} from "@gluestack-ui/themed";
import { useParams, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { DataStore } from "@/app/layout";
import { blogDetailBoder } from "@/utils";
export const BlogDetailsComponent = () => {
  const param = useParams();

  const dataBase = useContext(DataStore);

  const feed: any = dataBase?.myFeeds.filter(
    (blog: any) => blog.id === param.id
  );

  const myBlog = dataBase?.currentUserBlogs?.filter(
    (blog: any) => blog.id === param.id
  );
  const blog = feed?.length > 0 ? feed : myBlog;

  return (
    <Box justifyContent="center" alignItems="center" mt={50} mb={50}>
      <VStack space="xl">
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

        <Text fontSize={"$2xl"} fontWeight="$bold" color="#242424">
          {blog[0]?.title}
        </Text>

        <HStack space="md">
          <Image
            height={40}
            width={40}
            borderRadius={100}
            source={{
              uri: blog[0]?.author.profile,
            }}
          />
          <VStack>
            <Text fontSize={"$sm"} color="#242424">
              {blog[0]?.author?.name}
            </Text>
            <Text fontSize={"$sm"} color="#242424">
              {blog[0]?.time}
            </Text>
          </VStack>

          <Text color="#1A8917" fontSize={"$sm"}>
            Follow
          </Text>
        </HStack>

        <HStack {...blogDetailBoder} justifyContent="space-between" p={10}>
          <HStack space="md">
            <HStack alignItems="center">
              <Icon as={MessageCircleIcon} m="$2" w="$6" h="$6" />
              <Text>2</Text>
            </HStack>
            <HStack alignItems="center">
              <Icon as={DownloadIcon} m="$2" w="$6" h="$6" />
              <Text>7</Text>
            </HStack>
          </HStack>

          <HStack space="md">
            <HStack alignItems="center">
              <Icon as={FavouriteIcon} m="$2" w="$6" h="$6" />
              <Text>7</Text>
            </HStack>
            <HStack alignItems="center">
              <Icon as={PlayIcon} m="$2" w="$6" h="$6" />
              <Text>3</Text>
            </HStack>
            <HStack alignItems="center">
              <Icon as={ThreeDotsIcon} m="$2" w="$6" h="$6" />
              <Text></Text>
            </HStack>
          </HStack>
        </HStack>

        <Image
          height={400}
          width={700}
          source={{
            uri: blog[0]?.image,
          }}
        />
        <Text width={700}>{blog[0]?.desc}</Text>
      </VStack>
    </Box>
  );
};
