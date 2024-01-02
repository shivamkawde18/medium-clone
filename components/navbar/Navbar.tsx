"use client";
import {
  Box,
  HStack,
  Icon,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Pressable,
  SearchIcon,
} from "@gluestack-ui/themed";
import React, { useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { DataStore } from "@/app/layout";
import {
  MY_FEEDS,
  NAVBAR_ICONS,
  getCurrentUserBlogs,
  navBarBorder,
} from "@/utils";
import { TooltipComponent } from "../common";
export const Navbar = () => {
  const dataBase = useContext(DataStore);
  const router = useRouter();
  const getFeedsByInputOnHome = (text: string) => {
    const searchData = MY_FEEDS.filter(
      (blog: any) =>
        blog.tag.toLowerCase().includes(text.toLowerCase()) ||
        blog.desc.toLowerCase().includes(text.toLowerCase()) ||
        blog.title.toLowerCase().includes(text.toLowerCase())
    );
    dataBase?.setMyfeeds(searchData);
  };
  const getFeedsByInputOnMyBlogs = (text: string) => {
    const searchData = getCurrentUserBlogs().filter(
      (blog: any) =>
        blog.tag.toLowerCase().includes(text.toLowerCase()) ||
        blog.desc.toLowerCase().includes(text.toLowerCase()) ||
        blog.title.toLowerCase().includes(text.toLowerCase())
    );
    dataBase?.setCurrentUserBlogs(searchData);
  };
  const logOut = () => {
    localStorage.removeItem("username");
    dataBase?.setUserName("");
    router.push("/login");
  };

  const pathName = usePathname();
  return (
    <Box {...navBarBorder}>
      <HStack justifyContent="space-between" alignItems="center" p={10}>
        <HStack>
          <Pressable
            onPress={() => {
              router.push("/");
            }}
          >
            <Image
              height={15}
              width={100}
              source={{
                uri: "data:image/png;base64,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",
              }}
            />
          </Pressable>
        </HStack>
        <HStack alignItems="center" space="xl">
          {!pathName.includes("/blog") ? (
            <Input
              padding={10}
              variant="rounded"
              borderColor="#F2F2F2"
              shadowColor="#242424"
              backgroundColor="#F2F2F2"
            >
              <InputField
                placeholder="Search"
                fontWeight="$normal"
                fontSize={"$sm"}
                onChange={(e: any) => {
                  const text = e.currentTarget.value;
                  pathName === "/"
                    ? getFeedsByInputOnHome(text)
                    : getFeedsByInputOnMyBlogs(text);
                }}
              />
              <InputSlot>
                <InputIcon>
                  {" "}
                  <Icon as={SearchIcon} />
                </InputIcon>
              </InputSlot>
            </Input>
          ) : (
            <></>
          )}
          <Pressable
            onPress={() => {
              router.push("/create-blog");
            }}
          >
            <Image
              height={40}
              width={40}
              source={{
                uri: "data:image/png;base64,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",
              }}
            />
          </Pressable>

          <Pressable
            onPress={() => {
              router.push("/my-blog");
            }}
          >
            <Image
              height={30}
              width={30}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9LpIsAJFBcCfqBWihkYSIslH-N9BObnSq4Vj7Cf1Anj5t_s8ugCvZV_rIp47Zd94jUI&usqp=CAU",
              }}
            />
          </Pressable>
          <TooltipComponent
            icon={NAVBAR_ICONS.profileIcon}
            onPressImage={() => {}}
            toolTipText={dataBase?.userName}
          />
          <Pressable
            onPress={() => {
              router.push("/login");
            }}
          >
            <Image
              height={30}
              width={30}
              source={{ uri: NAVBAR_ICONS.logoutIcon }}
            />
          </Pressable>
        </HStack>
      </HStack>
    </Box>
  );
};
