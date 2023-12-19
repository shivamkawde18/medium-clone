"use client";
import React, { useContext, useState } from "react";

import {
  VStack,
  Box,
  Text,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { LOGIN_SOCIAL_MEDIA, loginBorder } from "@/utils";
import { SocialMediaLogin } from "../common";
import { DataStore } from "@/app/layout";
import { useRouter } from "next/navigation";

export const LoginComponet = () => {
  const [username, setUserName] = useState("");
  const router = useRouter();
  const dataBase = useContext(DataStore);
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      //@ts-ignore
      height="100vh"
    >
      <Box
        display="flex"
        justifyContent="center"
        width={500}
        borderRadius={20}
        padding={20}
        borderColor="#242424"
        shadowColor="red"
        {...loginBorder}
        shadowOpacity="$10"
      >
        <Text
          fontWeight="$bold"
          color="#242424"
          size="3xl"
          textAlign="center"
          marginBottom={12}
        >
          Medium
        </Text>

        <VStack space="md">
          <Input
            variant="outline"
            size="md"
            borderColor="#242424"
            shadowColor="#242424"
          >
            <InputField
              placeholder="Enter username"
              onChange={(e: any) => {
                setUserName(e.currentTarget.value);
              }}
            />
          </Input>
          <Button
            width={100}
            variant="outline"
            borderColor="#242424"
            onPress={() => {
              localStorage.setItem("username", username);
              dataBase?.setUserName(username);

              router.push("/");
            }}
          >
            <ButtonText fontSize={"$md"} fontWeight="$medium" color="#242424">
              Login
            </ButtonText>
          </Button>
          {LOGIN_SOCIAL_MEDIA.map((account, index) => {
            return (
              <SocialMediaLogin
                text={account.text}
                socialMediaIcon={account.image}
                key={index + account.text}
              />
            );
          })}
        </VStack>
      </Box>
    </VStack>
  );
};
