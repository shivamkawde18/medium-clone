import { Input, VStack ,Text,ButtonText,Button,InputField,Box} from '@gluestack-ui/themed'
import React from 'react'

export const NewBlog = () => {
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
  return (
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
             
              />
            </Input>
            <Button
              width={100}
              variant="outline"
              borderColor="#242424"
            
            >
              <ButtonText fontSize={"$md"} fontWeight="$medium" color="#242424">
                Login
              </ButtonText>
            </Button>
       
          </VStack>
        </Box>
      </VStack>
  )
}
