import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View, ImageBackground } from "react-native";
import background from "../assets/quiz_background.jpg";
import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  VStack,
  Spacer,
  AspectRatio,
  Stack,
  Center,
  Image,
  Button,
  Flex,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import Firebase from "../config/firebase";
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { useNavigation } from '@react-navigation/native';

export default function QuizScreen() {
  /*fetch("https://deco3801-91e98-default-rtdb.firebaseio.com/10/data")
    .then((response) => response.json())
    .then((data) => console.log(data));*/

  // Attach an asynchronous callback to read the data at our posts reference
  const numberOfUsers = 15;
  const randomIndex = Math.floor(Math.random() * numberOfUsers);
  const navigation = useNavigation();
  const [mode, setMode] = useState("Basic");

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={background}
        style={{
          flex: 1,
        }}
        alt="background_image">
        <Text style={{textAlign: "center", paddingTop:30, fontFamily:"PaytoneOne_400Regular", color:"white", fontSize:25}}>Quiz Time</Text>
        <Text style={{textAlign: "center", paddingTop:20, fontFamily:"PaytoneOne_400Regular", color:"white", fontSize:20}}>
          Here, you can find your purrrfect{"\n"}pet with this fun game!
        </Text>
        <Button
              onPress={() => navigation.navigate("start_quiz")}
              backgroundColor="#9e8fae"
              title="Start"
              marginLeft="auto"
              marginRight="auto"
              marginTop={5}
              width={40}
              borderRadius={7}
            >
              <Text
                fontSize={15}
                color="white"
                fontFamily="Roboto_400Regular"
              >
                Play Quiz
              </Text>
            </Button>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
