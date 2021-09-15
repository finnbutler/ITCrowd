import React from "react";
import { Text, Button, NativeBaseProvider, Box, View } from "native-base";

const QuizScreen = () => {
  return (
    <Box bg="darkblue.500" height="100%">
      <NativeBaseProvider>
        <Text color="white" textAlign="center" mt="1.5em" fontSize="3em">
          Purrrfect Match Game{" "}
        </Text>
        <View
          style={{
            sflex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size={"xl"}
          />
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size={"xl"}
          />
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size={"xl"}
          />
        </View>
        <View
          style={{
            sflex: 1,
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Medical help"
          >
            Clubbing
          </Button>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Medical help"
          >
            At Home
          </Button>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Medical help"
          >
            With Friends
          </Button>
        </View>
      </NativeBaseProvider>
    </Box>
  );
};
export default QuizScreen;
