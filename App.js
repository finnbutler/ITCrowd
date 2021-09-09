import * as React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import {
  Text,
  Button,
  NativeBaseProvider,
  Box,
  Image,
  Center,
  Icon,
  extendTheme,
  VStack,
  FormControl,
  Input,
  TextInput,
} from "native-base";
//import { useFormik } from "formik";
import { Formik } from "formik";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import profile from "./assets/pic.jpg";
import email from "./assets/email (1).png";
import phone from "./assets/phone-call.png";
import date from "./assets/date-of-birth.png";
import location from "./assets/pin.png";
import background from "./assets/background_pic.jpg";
import { createGlobalStyle } from "styled-components";
import LoginForm from "./loginForm";
import SignUpForm from "./signupForm";
import ProfileS from "./profile";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
function HomeScreen({ navigation }) {
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

    // </Box>
  );
}

function SignUpScreen({ navigation }) {
  return <SignUpForm />;
}
function LogInScreen({ navigation }) {
  return <LoginForm />;
}

function ProfileScreen({ navigation }) {
  <ProfileS />;
}
const styles = StyleSheet.create({
  logo: {
    paddingTop: 20,
    justifyContent: "center",
    backgroundColor: "#60BEEB",
    width: window.width,
    paddingBottom: 20,
  },
  container: {
    textAlign: "center",
  },
  heading: {
    fontFamily: "PaytoneOne_400Regular",
    color: "#FFFFFF",
    paddingTop: 25,
    fontSize: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  profile: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "left",
  },
  info: {
    fontFamily: "Roboto_400Regular",
    flexDirection: "row",
    textAlign: "left",
    padding: 30,
    width: 700,
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#89CFF0",
  },
});
function AboutAdpoting({ navigation }) {
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
function Quiz({ navigation }) {
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
}

const Drawer = createDrawerNavigator();

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
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Sign Up" component={SignUpScreen} />
          <Drawer.Screen name="Log In" component={LogInScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="About Adopting" component={AboutAdpoting} />
          <Drawer.Screen name="Quiz" component={Quiz} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
