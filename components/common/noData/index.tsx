import { loginBorder } from "@/utils";
import { HStack, VStack } from "@gluestack-ui/themed";

export const NoData = () => {
  return <VStack {...loginBorder}  p={50} ml={200} justifyContent="flex-end">No data found</VStack>;
};
