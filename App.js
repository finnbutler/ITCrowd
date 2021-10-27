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
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginForm from "./js/loginForm.js";
import SignUpForm from "./js/signupForm.js";
import Profile from "./js/profile.js";
import Adopting from "./js/about.js";
import Cat from "./js/cat.js";
import Misconcept from "./js/preadoption.js";
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
import logo from "./assets/Logo.jpg";
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Replace the following with your app's Firebase project configuration

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
            height: "auto",
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
                fontSize={13}
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
          <Text
            marginTop={6}
            textAlign="center"
            fontSize={24}
            color="white"
            fontFamily="PaytoneOne_400Regular"
          >
            Welcome to purrrfect pets! The world's first pet matching quiz, with
            real pets, in real time.
          </Text>
        </View>
      </NativeBaseProvider>
    </ScrollView>
  );
}

function SignUpScreen() {
  return <SignUpForm />;
}
function LogInScreen() {
  return <LoginForm />;
}

function ProfileScreen() {
  return <Profile />;
}

function AboutAdopting() {
  return <Adopting />;
}
function QuizScreen() {
  return <Quiz />;
}

function CatScreen() {
  return <Cat />;
}

function MisconceptScreen() {
  return <Misconcept />;
}
function PostadoptScreen() {
  return <Postadopting />;
}
function StartQuizScreen() {
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
        <Stack.Screen name="Back" options={{ headerShown: false }} initialRoute>
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = focused ? "home-outline" : "home-outline";
                  }
                  if (route.name === "Adopting") {
                    iconName = focused
                      ? "help-circle-outline"
                      : "help-circle-outline";
                  }
                  if (route.name === "About") {
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
                      style={{ width: 60, height: 55 }}
                      source={logo}
                      resizeMode="contain"
                    />
                  ),
                  headerTitleStyle: { marginLeft:"auto", marginRight: "auto"  },
                  headerStyle: { height: 102 },
                }}
              />
              <Tab.Screen
                name="Adopting"
                options={{
                  headerTitle: (Quiz) => (
                    <Image
                      style={{ width: 60, height: 55 }}
                      source={logo}
                      resizeMode="contain"
                    />
                  ),
                  headerTitleStyle: { marginLeft:"auto", marginRight: "auto"  },
                  headerStyle: { height: 102 },
                }}
                component={QuizScreen}
              />
              <Tab.Screen
                name="About"
                options={{
                  headerTitle: () => (
                    <Image
                      style={{ width: 60, height: 55 }}
                      source={logo}
                      resizeMode="contain"
                    />
                  ),
                  headerTitleStyle: { marginLeft:"auto", marginRight: "auto" },
                  headerStyle: { height: 102 },
                }}
                component={AboutAdopting}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  headerTitle: () => (
                    <Image
                      style={{ width: 60, height: 55 }}
                      source={logo}
                      resizeMode="contain"
                    />
                  ),
                  headerTitleStyle: {marginLeft:"auto", marginRight: "auto" },
                  headerStyle: { height: 102 },
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Signup"
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 60, height: 55 }}
                source={logo}
                resizeMode="contain"
              />
            ),
            headerTitleStyle: { marginLeft:"auto", marginRight: "auto"  },
            headerStyle: { height: 102 },
          }}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Login"
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 60, height: 55 }}
                source={logo}
                resizeMode="contain"
              />
            ),
            headerTitleStyle: { marginLeft:"auto", marginRight: "auto"  },
            headerStyle: { height: 102 },
          }}
          component={LogInScreen}
        />

        <Stack.Screen
          name="Basic Knowledge"
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 60, height: 55 }}
                source={logo}
                resizeMode="contain"
              />
            ),
            headerTitleStyle: { marginLeft:"auto", marginRight: "auto"  },
            headerStyle: { height: 102 },
          }}
          component={CatScreen}
        />
        <Stack.Screen
          name="Common Misconception"
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 60, height: 55 }}
                source={logo}
                resizeMode="contain"
              />
            ),
            headerTitleStyle: { marginLeft:"auto", marginRight: "auto"  },
            headerStyle: { height: 102 },
          }}
          component={MisconceptScreen}
        />
        <Stack.Screen
          name="Emergency Help"
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 60, height: 55 }}
                source={logo}
                resizeMode="contain"
              />
            ),
            headerTitleStyle: { marginLeft:"auto", marginRight: "auto" },
            headerStyle: { height: 102 },
          }}
          component={PostadoptScreen}
        />

        <Stack.Screen
          name="start_quiz"
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 60, height: 55 }}
                source={logo}
                resizeMode="contain"
              />
            ),
            headerTitleStyle: { marginLeft:"auto", marginRight: "auto"  },
            headerStyle: { height: 102 },
          }}
          component={StartQuizScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
