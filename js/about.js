import * as React from "react";
import { View } from "react-native";
import { Text, Button, NativeBaseProvider, Box } from "native-base";

export default function AboutAdopting() {
  return (
    <Box
      bg="darkblue.500"
      color="lightblue.500"
      height="100%"
      overflowY="hidden"
    >
      <NativeBaseProvider>
        <View
          style={{ sflex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text color="white" mt="2em" fontSize="3em">
            Let's learn about adopting!
          </Text>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Understanding requirements"
          >
            Understanding requirements
          </Button>

          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="What to expect"
          >
            What to expect
          </Button>

          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Emergencies"
          >
            Emergencies
          </Button>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="How to train"
          >
            How to train
          </Button>

          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Medical help"
          >
            Medical help
          </Button>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Community support"
          >
            Community support
          </Button>
        </View>
      </NativeBaseProvider>
    </Box>
  );
}

//export default AboutAdopting;