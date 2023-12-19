import React from "react";
import { Image, Button, Text, HStack } from "@gluestack-ui/themed";
import { ISocialMediaProps } from "@/types";

export const SocialMediaLogin = (props: ISocialMediaProps) => {
  return (
    <Button
      variant="outline"
      borderColor="#242424"
      onPress={() => alert("coming soon")}
    >
      <HStack
        space="sm"
        alignItems="center"
        //@ts-ignore
        width="fit-content"
        padding={10}
      >
        <Text color="#242424" fontSize={"$md"} fontWeight="$medium">
          {props.text}
        </Text>
        <Image
          height={20}
          width={20}
          source={{
            uri: props.socialMediaIcon,
          }}
        />
      </HStack>
    </Button>
  );
};
