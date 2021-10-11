import * as React from "react";
import { ImageBackground, View, Image, ScrollView } from "react-native";
import {
  Input,
  Text,
  Button,
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
//import { useFormik } from "formik";
import { Formik } from "formik";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginForm from "./js/loginForm.js";
import SignUpForm from "./js/signupForm.js";
import Profile from "./js/profile.js";
import Adopting from "./js/about.js";
import Cat from "./js/cat.js";
import Dog from "./js/dog.js";
import Preadopting from "./js/preadoption.js";
import Postadopting from "./js/postadoption.js";
import StartQuiz from "./js/start_quiz.js";

import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import background from "./assets/background.jpg";
import Quiz from "./js/quiz.js";



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Firebase from "./config/firebase";
import logo from "./assets/Logo.jpg";
import { createStackNavigator } from '@react-navigation/stack';

// TODO: Replace the following with your app's Firebase project configuration
//const auth = Firebase.auth();

function HomeScreen({ navigation }) {

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ScrollView>
      <NativeBaseProvider>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
          }}
          alt="background_image"
        >
          <View
            style={{
              marginTop: 80,
              alignItems: "flex-end",
            }}
          >
            <Text
              color="white"
              fontSize={25}
              fontFamily="PaytoneOne_400Regular"
              marginRight={4}
            >
              Purrrfect Pets!{" "}
            </Text>
            <Text
              color="white"
              fontSize={15}
              paddingTop={5}
              marginRight={1}
              fontFamily="PaytoneOne_400Regular"
            >
              Match with and adopt a pet {"\n"}that is most suitable for you
            </Text>

            <StatusBar style="dark-content" />
            <Button
              onPress={() => navigation.navigate("Login")}
              backgroundColor="#f1c737"
              title="Login"
              marginTop={5}
              marginBottom={5}
              width={40}
              borderRadius={7}
              marginRight={7}
            >
              <Text
                fontSize="13"
                color="#545871"
                fontFamily="Roboto_400Regular"
              >
                Login
              </Text>
            </Button>
            <Button
              onPress={() => navigation.navigate("Signup")}
              backgroundColor="#f1c737"
              text="Go to Signup"
              width={40}
              borderRadius={7}
              marginBottom={150}
              marginRight={7}
            >
              <Text
                fontSize={13}
                color="#545871"
                fontFamily="Roboto_400Regular"
              >
                Sign Up
              </Text>
            </Button>
          </View>
        </ImageBackground>
        <View style={{ height: 500, backgroundColor: "#9e8fae" }}>
          <Text marginTop={6} textAlign="center" fontSize={24} color="white" fontFamily="PaytoneOne_400Regular">
            Planning to adopt a pet?{"\n"}Here is what you need to consider...
          </Text>
        </View>
      </NativeBaseProvider>
    </ScrollView>
  );
}

function SignUpScreen({ navigation }) {
  return <SignUpForm />;
}
function LogInScreen() {
  return <LoginForm />;
}

function ProfileScreen({ navigation }) {
  return <Profile />;
}

function AboutAdopting({ navigation }) {
  return <Adopting />;
}
function QuizScreen({ navigation }) {
  return <Quiz />;
}

function CatScreen({ navigation }) {
  return <Cat />;
}
function DogScreen({ navigation }) {
  return <Dog />;
}
function PreadoptScreen({ navigation }) {
  return <Preadopting />;
}
function PostadoptScreen({ navigation }) {
  return <Postadopting />;
}
function StartQuizScreen({ navigation }) {
  return <StartQuiz />;
}

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
      amber: {
        400: "#d97706",
      },
      lightpink: {
        500: "#F9EEEE",
      },
      darkblue: {
        500: "#535971",
      },
      lightblue: {
        500: "#DADCE8",
      },
      darkpink: {
        500: "#E19D98",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
  });
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Back" options={{ headerShown: false }} initialRoute>{() => (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home-outline" : "home-outline";
                }
                if (route.name === "Quiz") {
                  iconName = focused
                    ? "help-circle-outline"
                    : "help-circle-outline";
                }
                if (route.name === "Adopting") {
                  iconName = focused ? "paw-outline" : "paw-outline";
                }
                if (route.name === "Profile") {
                  iconName = focused ? "ios-person" : "person";
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: () => (
                  <Image
                    style={{ width: 67, height: 61 }}
                    source={logo}
                    resizeMode='contain' />), headerTitleStyle: { flex: 1, textAlign: 'center' },
                headerStyle: { height: 83 }
              }}
            />
            <Tab.Screen name="Quiz" options={{
              headerTitle: (Quiz) => (
                <Image
                  style={{ width: 67, height: 61 }}
                  source={logo}
                  resizeMode='contain' />), headerTitleStyle: { flex: 1, textAlign: 'center' },
              headerStyle: { height: 83 }
            }} component={QuizScreen} />
            <Tab.Screen name="Adopting" options={{
              headerTitle: () => (
                <Image
                  style={{ width: 67, height: 61 }}
                  source={logo}
                  resizeMode='contain' />), headerTitleStyle: { flex: 1, textAlign: 'center' },
              headerStyle: { height: 83 }
            }} component={AboutAdopting} />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerTitle: () => (
                  <Image
                    style={{ width: 67, height: 61 }}
                    source={logo}
                    resizeMode='contain' />), headerTitleStyle: { flex: 1, textAlign: 'center' },
                headerStyle: { height: 83 }
              }}
            />
          </Tab.Navigator>)}
        </Stack.Screen>
        <Stack.Screen name="Signup" options={{
          headerTitle: () => (
            <Image
              style={{ width: 67, height: 61 }}
              source={logo}
              resizeMode='contain' />), headerTitleStyle: { flex: 1, textAlign: 'center' },
          headerStyle: { height: 83 }
        }} component={SignUpScreen} />
        <Stack.Screen name="Login" options={{
          headerTitle: () => (
            <Image
              style={{ width: 67, height: 61 }}
              source={logo}
              resizeMode='contain' />), headerTitleStyle: { flex: 1, textAlign: 'center' },
          headerStyle: { height: 83 }
        }} component={LogInScreen} />
        <Stack.Screen name="Cat" component={CatScreen} />
        <Stack.Screen name="Dog" component={DogScreen} />
        <Stack.Screen name="Pre-adoption" component={PreadoptScreen} />
        <Stack.Screen name="Post-adoption" component={PostadoptScreen} />
        <Stack.Screen name="start_quiz" options={{
          headerTitle: () => (
            <Image
              style={{ width: 67, height: 61 }}
              source={logo}
              resizeMode='contain' />), headerTitleStyle: { flex: 1, textAlign: 'center' },
          headerStyle: { height: 83 }
        }} component={StartQuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
