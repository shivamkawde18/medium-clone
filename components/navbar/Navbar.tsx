import {
  Box,
  EditIcon,
  HStack,
  Icon,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Pressable,
  SearchIcon,
  Tooltip,
  TooltipContent,
  TooltipText,
} from "@gluestack-ui/themed";
import React, { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { DataStore } from "@/app/layout";
import { MY_FEEDS, getCurrentUserBlogs } from "@/app/utils";
export const Navbar = () => {
  const dataBase = useContext(DataStore);
  const router = useRouter();
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

  const getFeedsByInputOnHome = (text: string) => {
    const searchData = MY_FEEDS.filter(
      (blog: any) =>
        blog.tag.toLowerCase().includes(text.toLowerCase()) ||
        blog.desc.toLowerCase().includes(text.toLowerCase()) ||
        blog.title.toLowerCase().includes(text.toLowerCase())
    );
    dataBase.setMyfeeds(searchData);
  };
  const getFeedsByInputOnMyBlogs = (text: string) => {
    const searchData = getCurrentUserBlogs().filter(
      (blog: any) =>
        blog.tag.toLowerCase().includes(text.toLowerCase()) ||
        blog.desc.toLowerCase().includes(text.toLowerCase()) ||
        blog.title.toLowerCase().includes(text.toLowerCase())
    );
    dataBase.setCurrentUserBlogs(searchData);
  };
  const pathName = usePathname();
  return (
    <Box {...boder}>
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
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                  const text = e.currentTarget.value;
                  // const searchData = MY_FEEDS.filter(
                  //   (blog: any) =>
                  //     blog.tag.toLowerCase().includes(text.toLowerCase()) ||
                  //     blog.desc.toLowerCase().includes(text.toLowerCase()) ||
                  //     blog.title.toLowerCase().includes(text.toLowerCase())
                  // );
                  // dataBase.setMyfeeds(searchData);

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
            {/* <Icon as={EditIcon} w="$7" h="$7" /> */}
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

          <Tooltip
            placement="bottom"
            trigger={(triggerProps) => {
              return (
                <Pressable onPress={() => {}} {...triggerProps}>
                  <Image
                    height={30}
                    width={30}
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                  ></Image>
                </Pressable>
              );
            }}
          >
            <TooltipContent backgroundColor="#242424">
              <TooltipText>{dataBase.userName} </TooltipText>
            </TooltipContent>
          </Tooltip>
          <Tooltip
            placement="bottom"
            trigger={(triggerProps) => {
              return (
                <Pressable
                  onPress={() => {
                    localStorage.removeItem("username");
                    dataBase.setUserName("");
                    router.push("/login");
                  }}
                >
                  <Image
                    height={30}
                    width={30}
                    source={{
                      uri: "https://icons.veryicon.com/png/o/internet--web/website-icons/logout-8.png",
                    }}
                    {...triggerProps}
                  ></Image>
                </Pressable>
              );
            }}
          >
            <TooltipContent backgroundColor="#242424">
              <TooltipText>logout </TooltipText>
            </TooltipContent>
          </Tooltip>
        </HStack>
      </HStack>
    </Box>
  );
};
