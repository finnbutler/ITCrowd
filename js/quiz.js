import React from "react";
import {
  Text,
  Button,
  NativeBaseProvider,
  Box,
  View,
  Image,
  ButtonGroup,
  StatusBar,
} from "native-base";

const QuizScreen = () => {
  return (
    <Box bg="darkblue.500" height="100%">
      <NativeBaseProvider>
        <Text color="white" textAlign="center" mt="1.5em" fontSize="3em">
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
          color="white"
          textAlign="left"
          mb="1.5em"
          mt="1.5em"
          fontSize="3em"
          pl="1em"
        >
          Your Pets
        </Text>
        <StatusBar></StatusBar>
      </NativeBaseProvider>
    </Box>
  );
};
export default QuizScreen;
