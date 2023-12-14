"use client";

import {
  Box,
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Text,
  VStack,
  Image,
} from "@gluestack-ui/themed";
import { LOGIN_SOCIAL_MEDIA } from "../utils";
import { log } from "console";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { DataStore } from "../layout";
export default function Home() {
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
  const [username, setUserName] = useState("");
  const dataBase = useContext(DataStore);

  return (
    <main>
      <VStack alignItems="center" justifyContent="center" height="100vh">
        <Box
          display="flex"
          justifyContent="center"
          width={500}
          borderRadius={20}
          padding={20}
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
            {LOGIN_SOCIAL_MEDIA.map((account) => {
              return (
                <Button
                  variant="outline"
                  borderColor="#242424"
                  onPress={() => alert("coming soon")}
                >
                  <HStack
                    space="sm"
                    alignItems="center"
                    // {...boder}
                    width="fit-content"
                    padding={10}
                  >
                    <Text color="#242424" fontSize={"$md"} fontWeight="$medium">
                      {account.text}
                    </Text>
                    <Image
                      height={20}
                      width={20}
                      source={{
                        uri: account.image,
                      }}
                    />
                  </HStack>
                </Button>
              );
            })}
          </VStack>
        </Box>
      </VStack>
    </main>
  );
}

//   return (
//     <Box
//       flexDirection="column"
//       borderWidth={1}
//       borderColor="$borderDark700"
//       flex={1}
//       m="$2"
//       p="$4"
//       rounded="$md"
//     >
//       <Box alignItems="center" display="flex" flexDirection="row">
//         <Image
//           src={`/${iconSvg}`}
//           alt="document"
//           width={22}
//           height={22}
//           priority
//         />
//         <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
//           {name}
//         </Text>
//       </Box>
//       <Text color="$textDark400" mt="$2">
//         {desc}
//       </Text>
//     </Box>
//   );
// };

// const Container = () => {
//   return (
//     <Box flex={1} bg="$black" h="100vh">
//       <Box
//         position="absolute"
//         sx={{
//           '@base': {
//             h: 500,
//             w: 500,
//           },
//           '@lg': {
//             h: 700,
//             w: 700,
//           },
//         }}
//       >
//         <Image src="/gradient.svg" alt="Gradient" fill priority />
//       </Box>
//       <Box
//         flex={1}
//         sx={{
//           '@base': {
//             my: '$16',
//             mx: '$5',
//           },
//           '@lg': {
//             my: '$24',
//             mx: '$32',
//           },
//         }}
//         alignItems="center"
//       >
//         <Box
//           bg="#64748B33"
//           py="$2"
//           px="$6"
//           rounded="$full"
//           alignItems="center"
//           sx={{
//             '@base': {
//               flexDirection: 'column',
//             },
//             '@sm': {
//               flexDirection: 'row',
//             },
//             '@md': { alignSelf: 'flex-start' },
//           }}
//         >
//           <Text color="$white" fontWeight="$normal">
//             Get started by editing
//           </Text>
//           <Text color="$white" fontWeight="$medium" ml="$2">
//             <code>pages.tsx</code>
//           </Text>
//         </Box>
//         <Box
//           flex={1}
//           justifyContent="center"
//           alignItems="center"
//           sx={{
//             '@base': {
//               h: 20,
//               w: 300,
//             },
//             '@lg': {
//               h: 160,
//               w: 400,
//             },
//           }}
//         >
//           <Image src="/logo.svg" fill alt="logo" priority />
//         </Box>

//         <Box
//           sx={{
//             '@base': {
//               flexDirection: 'column',
//             },
//             '@md': {
//               flexDirection: 'row',
//             },
//           }}
//         >
//           <FeatureCard
//             iconSvg="document-data.svg"
//             name="Docs"
//             desc="Find in-depth information about gluestack features and API."
//           />
//           <FeatureCard
//             iconSvg="lightbulb-person.svg"
//             name="Learn"
//             desc="Learn about gluestack in an interactive course with quizzes!"
//           />
//           <FeatureCard
//             iconSvg="rocket.svg"
//             name="Deploy"
//             desc="Instantly drop your gluestack site to a shareable URL with vercel."
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };
