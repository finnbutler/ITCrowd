import * as React from "react";
import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
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
// import LoginForm from "./loginForm";
// import SignUpForm from "./signupForm";
// import ProfileS from "./profile";
// import AboutAdopting from "./aboutAdopting";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import background from "./assets/background.jpg"
// import Quiz from "./quiz";
function HomeScreen({ navigation }) {
  // const response = await fetch('/api/names');
  // const names = await response.json();

  // console.log(names); 
  // https://itcrowdproject.uqcloud.net/?PET_PHOTO
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
      }}
    >
      <NativeBaseProvider>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginRight: "200px",
          }}
        >
          <Text
            color="white"
            fontSize="80"
            fontFamily="PaytoneOne_400Regular"
            marginTop="150px"
            marginRight="50px"
          >
            Purrrfect Pets!{" "}
          </Text>
          <Text color="white" fontSize="30" paddingTop="10" textAlign='center' marginRight="120px" fontFamily='PaytoneOne_400Regular' flexShrink="1">
            Match with and adopt a pet {"\n"}that is most suitable for you
          </Text>
          <Button
            mt="2em"
            mraginTop="500px"
            padding="25px 150px"
            borderRadius="30px"
            backgroundColor="#f1c737"
            marginRight="150px"
            fontFamily="Roboto_400Regular"
            onPress={() => navigation.navigate("Login")}
            title="Login In!"
          >
            <Text color="#545871" fontFamily='Roboto_400Regular'>Login In </Text>
          </Button>
          <Button
            mt="2em"
            padding="25px 150px"
            borderRadius="30px"
            marginRight="150px"
            backgroundColor="#f1c737"
            onPress={() => navigation.navigate("Sign Up")}
            title="Sign up"
          >
            <Text color="#545871" fontFamily='Roboto_400Regular'>Sign Up</Text>
          </Button>
        </View>
      </NativeBaseProvider>
    </ImageBackground>
  )}

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
  <AboutAdopting />;
}
function QuizScreen({ navigation }) {
  <Quiz />;
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
          <Drawer.Screen name="Quiz" component={QuizScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
