import React from "react";
import { VStack, HStack, Image, Text } from "@gluestack-ui/themed";
import { IPeopleYouMayKnowProps } from "@/types";
export const PeopleYouMayKnow = (props: IPeopleYouMayKnowProps) => {
  return (
    <HStack alignItems="center" justifyContent="space-between" width={300}>
      <HStack space="md">
        <Image
          height={40}
          width={40}
          borderRadius={100}
          source={{
            uri: props.image,
          }}
        />
        <VStack>
          <Text fontWeight="$bold" fontSize={"$md"} color="#242424">
            {props.name}
          </Text>
          <Text fontSize={"$sm"} color="#242424">
            {props.designation}
          </Text>
        </VStack>
      </HStack>
      <HStack
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
      </HStack>
    </HStack>
  );
};
