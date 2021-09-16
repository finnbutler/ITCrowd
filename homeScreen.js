import React from "react";
import { Formik } from "formik";
import {
  View,
  TextInput,
  Button,
  Text,
  ImageBackground,
  NativeBaseProvider,
} from "react-native";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import background from "./assets/background_pic.jpg";
import AppLoading from "expo-app-loading";

export default function HomeScreen() {
  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
        //  opacity: 0.85
      }}
    >
      <NativeBaseProvider>
        <View
          style={{
            alignItems: "center",
            justifyContent: "right",
            marginRight: "0px",
          }}
        >
          <Text
            color="white"
            fontSize="5em"
            fontFamily="PaytoneOne_400Regular"
            marginTop="200px"
          >
            Purrrfect Pets!{" "}
          </Text>

          <Button
            mt="2em"
            mraginTop="500px"
            padding="1em 6em"
            borderRadius="30px"
            backgroundColor="#07DAC0"
            fontFamily="Roboto_400Regular"
            onPress={() => navigation.navigate("Login")}
            title="Login In!"
          >
            Login In
          </Button>
          <Button
            mt="2em"
            padding="1em 6em"
            borderRadius="30px"
            backgroundColor="#07DAC0"
            onPress={() => navigation.navigate("Sign Up")}
            title="Login In!"
          >
            Sign Up
          </Button>
        </View>
      </NativeBaseProvider>
    </ImageBackground>
  );
}
