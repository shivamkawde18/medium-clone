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
import { useRouter } from "next/navigation";
import React from "react";
import { useSearchParams } from "next/navigation";
export const BlogDetailsComponent = () => {
  const searchParams = useSearchParams();
  // const blog = router.query.blog;

  const dataJson = searchParams.get("data");
  const data = JSON.parse(dataJson ? dataJson : "");
  console.log(data, "helow");

  const boder = {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // padding: 40,
    borderLeftColor: "#ebebeb",
    borderRightColor: "#ebebeb",
    borderTopColor: "#ebebeb",
    borderBottomColor: "#ebebeb",
    // width: 500,
  };
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
          {data.title}
        </Text>

        <HStack space="md">
          <Image
            height={40}
            width={40}
            borderRadius={100}
            source={{
              uri: data.author.profile,
            }}
          />
          <VStack>
            <Text fontSize={"$sm"} color="#242424">
              {data.author.name}
            </Text>
            <Text fontSize={"$sm"} color="#242424">
             {data.time}
            </Text>
          </VStack>
          {/* <HStack
            borderRadius={100}
            borderColor="#242424"
            borderWidth={1}
            padding={5}
            width={70}
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#242424" fontSize={"$sm"}>
              follow
            </Text>
          </HStack> */}

          <Text color="#1A8917" fontSize={"$sm"}>
            Follow
          </Text>
        </HStack>

        <HStack {...boder} justifyContent="space-between" p={10}>
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
            uri: data.image,
          }}
        />
        <Text width={700}>
          This is an interview experience that happened to my friend not long
          ago. The interviewer wanted him to implement the Promise.all function.
          Unfortunately, my friend didn't play well on the spot and couldn't
          answer the question. After the interview, the interviewer rudely said
          to him: “Your foundation of JavaScript is not solid enough, and you
          have less-than-adequate knowledge of many JavaScript principles.” I’m
          actually puzzled by this behaviour of the interviewer. Does the
          inability to implement Promise.all mean that the basics have not been
          mastered? That's strange, don't you think? In what follows, I try to
          demystify Promise.all and other important Promise methods. So let’s
          get started
        </Text>
      </VStack>
    </Box>
  );
};
