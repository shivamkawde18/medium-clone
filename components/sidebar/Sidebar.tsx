import { Box, HStack, VStack, Text } from "@gluestack-ui/themed";
import React from "react";

export const Sidebar = () => {
  const boder = {
    borderRightWidth: 1,
    borderLeftWidth: 1,
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
    <VStack position="absolute" right={0} mt={70}>
      <VStack {...boder} width={500} height="100vh" padding={20}>
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
          <HStack
            borderRadius={100}
            backgroundColor="#F2F2F2"
            borderColor="#f2f2f2"
            padding={12}
            width={"fit-content"}
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#242424">Programming</Text>
          </HStack>
          <HStack
            borderRadius={100}
            backgroundColor="#F2F2F2"
            borderColor="#f2f2f2"
            padding={12}
            width={"fit-content"}
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#242424">Programming</Text>
          </HStack>
          <HStack
            borderRadius={100}
            backgroundColor="#F2F2F2"
            borderColor="#f2f2f2"
            padding={12}
            width={"fit-content"}
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#242424">Programming</Text>
          </HStack>
          <HStack
            borderRadius={100}
            backgroundColor="#F2F2F2"
            borderColor="#f2f2f2"
            padding={12}
            width={"fit-content"}
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#242424">Programming</Text>
          </HStack>
          <HStack
            borderRadius={100}
            backgroundColor="#F2F2F2"
            borderColor="#f2f2f2"
            padding={12}
            width={"fit-content"}
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#242424">Programming</Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
