"use client";
import { DataStore } from "@/app/layout";
import { getCurrentUserBlogs } from "@/app/utils";
import {
  Input,
  VStack,
  Text,
  ButtonText,
  Button,
  InputField,
  Box,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import React, { useContext, useState } from "react";
export const NewBlog = () => {
  const dataBase = useContext(DataStore);
  const boder = {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // padding: 40,
    borderLeftColor: "#ebebeb",
    borderRightColor: "#ebebeb",
    borderTopColor: "#ebebeb",
    borderBottomColor: "#ebebeb",
    // width: 500,
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");

  return (
    <VStack pl={150} mt={100} position="absolute" top={0}>
      <Box
        display="flex"
        justifyContent="center"
        width={500}
        borderRadius={20}
        padding={60}
        // backgroundColor="red"
        borderColor="#242424"
        shadowColor="red"
        {...boder}
        shadowOpacity="$10"
      >
        <Text
          fontWeight="$bold"
          color="#242424"
          size="3xl"
          textAlign="center"
          marginBottom={12}
        >
          Create Blog 🚀
        </Text>
        <VStack space="md">
          <Input
            variant="outline"
            size="md"
            borderColor="#242424"
            shadowColor="#242424"
            isRequired
          >
            <InputField
              placeholder="Enter title"
              value={title}
              onChange={(e: any) => {
                setTitle(e.currentTarget.value);
              }}
            />
          </Input>

          <Input
            variant="outline"
            size="md"
            borderColor="#242424"
            shadowColor="#242424"
            isRequired
          >
            <InputField
              placeholder="Enter tag"
              value={tag}
              onChange={(e: any) => {
                setTag(e.currentTarget.value);
              }}
            />
          </Input>

          <Input
            variant="outline"
            size="md"
            borderColor="#242424"
            shadowColor="#242424"
            isRequired
          >
            <InputField
              placeholder="Past image url"
              value={image}
              onChange={(e: any) => {
                setImage(e.currentTarget.value);
              }}
            />
          </Input>
          <Textarea
            size="md"
            borderColor="#242424"
            shadowColor="#242424"
            isRequired
            w={380}
          >
            <TextareaInput
              placeholder="Enter description ..."
              value={desc}
              onChange={(e: any) => {
                setDesc(e.currentTarget.value);
              }}
            />
          </Textarea>

          <Button
            width={100}
            variant="outline"
            backgroundColor="#1A8917"
            onPress={() => {
              const username = localStorage.getItem("username");
              const currentDate = new Date();

              // Get the current hours, minutes, and seconds
              let hours = currentDate.getHours();
              const minutes = currentDate.getMinutes();
              const seconds = currentDate.getSeconds();

              // Determine whether it's AM or PM
              const amOrPm = hours >= 12 ? "PM" : "AM";

              // Convert to 12-hour format
              hours = hours % 12 || 12;

              const blog = {
                title,
                tag,
                image,
                desc,
                username,
                time: `${hours} ${amOrPm} `,
              };
              //  const jsonArr=JSON.parse(localStorage.getItem("allBlogs"))
              // Get the JSON string from localStorage
              const storedItemsJSON = localStorage.getItem("allBlogs");

              // Check if the value is not null before parsing
              const storedItems = storedItemsJSON
                ? JSON.parse(storedItemsJSON)
                : null;
              console.log(storedItems);
              localStorage.setItem(
                "allBlogs",
                JSON.stringify(
                  storedItems === null ? [blog] : [...storedItems, blog]
                )
              );
              setDesc("");
              setTag("");
              setImage("");
              setTitle("");
              const updatedBlogList = getCurrentUserBlogs();
              dataBase.setCurrentUserBlogs(updatedBlogList);
            }}
          >
            <ButtonText fontSize={"$md"} fontWeight="$medium" color="#fff">
              create
            </ButtonText>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};
