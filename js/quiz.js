import React from "react";
import {
  Text,
  Button,
  NativeBaseProvider,
  Box,
  ScrollView,
  View,
  Image,
  ButtonGroup,
  StatusBar,
  VStack,
  Divider,
  Heading,
  Icon,
  AspectRatio,
  Center,
  HStack,
  Stack,
} from "native-base";

const QuizScreen = () => {
  return (
    <NativeBaseProvider>
      <ScrollView
        _contentContainerStyle={{
          px: "20px",
          mb: "4",
        }}
      >
        <Box bg="darkblue.500" height="100%">
          <Text
            color="darkblue.500"
            textAlign="center"
            mt="1.5em"
            fontSize="3em"
          >
            Purrrfect Match Game{" "}
          </Text>
          <Text
            color="white"
            textAlign="center"
            mb="1.5em"
            mt="1.5em"
            fontSize="3em"
          >
            [Insert Random Question from database here]
          </Text>
          <View
            style={{
              sflex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Button
              colorScheme="green"
              _text={{
                color: "white",
              }}
              mr="2em"
              onPress={() => console.log("hello world")}
            >
              Yes
            </Button>
            <Button
              colorScheme="danger"
              _text={{
                color: "white",
              }}
              onPress={() => console.log("hello world")}
            >
              No
            </Button>
          </View>
          <Text
            color="darkblue.500"
            textAlign="left"
            mb="1.5em"
            mt="1.5em"
            fontSize="3em"
            pl="1em"
          >
            Your Pets
          </Text>
          <Box
            rounded="lg"
            overflow="hidden"
            width="72"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={16 / 9}>
                <Image
                  source={{
                    uri: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52780452/1/?bust=1629952658&width=600",
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="violet.500"
                _text={{ color: "white", fontWeight: "700", fontSize: "xs" }}
                position="absolute"
                bottom={0}
                px="3"
                py="1.5"
              >
                PHOTOS
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  The Garden City
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{ color: "violet.500" }}
                  _dark={{ color: "violet.300" }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  The Silicon Valley of India.
                </Text>
              </Stack>
              <Text fontWeight="400">
                Bengaluru (also called Bangalore) is the center of India's
                high-tech industry. The city is also known for its parks and
                nightlife.
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    6 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};
export default QuizScreen;
