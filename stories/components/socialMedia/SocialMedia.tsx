import { config } from "@gluestack-ui/config";
import {
  Button,
  Text,
  HStack,
  Image,
  GluestackUIProvider,
  StyledProvider,
} from "@gluestack-ui/themed";

export interface SocialMediaComponentProps {
  text: string;
  image: string;
}
export const SocialMedia = (props: SocialMediaComponentProps) => {
  return (
    <GluestackUIProvider config={config}>
      <Button
        variant="outline"
        borderColor="#242424"
        onPress={() => alert("coming soon")}
      >
        <HStack space="sm" alignItems="center" padding={10}>
          <Text color="#242424" fontSize={"$md"} fontWeight="$medium">
            {props.text}
          </Text>
          <Image
            height={20}
            width={20}
            source={{
              uri: props.image,
            }}
          />
        </HStack>
      </Button>
    </GluestackUIProvider>
  );
};
