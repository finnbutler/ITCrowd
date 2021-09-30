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
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import background from "./assets/background.jpg"
import Quiz from "./js/quiz.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Firebase from "./config/firebase";
import logo from "./assets/Logo.jpg";

// TODO: Replace the following with your app's Firebase project configuration
const auth = Firebase.auth();
function HomeScreen({ navigation }) {
  
  // const response = await fetch('/api/names');
  // const names = await response.json();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [loginError, setLoginError] = useState("");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        await auth.signInWithEmailAndPassword(email, password);
        alert("Login Correct!");
      }
    } catch (error) {
      alert("ERROR!");
      setLoginError(error.message);
    }
  };
  const unsubscribeAuth = auth.onAuthStateChanged(async (authenticatedUser) => {
    try {
      await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
      return <ProfileScreen></ProfileScreen>;
    } catch (error) {
      console.log(error);
    }
  });

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
      <View style={{ width: 'auto', height: 83, backgroundColor: 'white', alignItems:'center', paddingTop: 23}}>
          <Image source={logo} style={{ width: 65, height: 58}} alt="logo_image"/>
        </View>
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
      }}
      alt="background_image"
    >
      
        
        <View style={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginRight: 10,
        }}
        >
          <Text
            color="white"
            fontSize="22"
            fontFamily="PaytoneOne_400Regular"
            marginTop="50px"
            marginRight="17px"
          >
            Purrrfect Pets!{" "}
          </Text>
          <Text color="white" fontSize="14" paddingTop="5" textAlign='center' fontFamily='PaytoneOne_400Regular' flexShrink="1">
            Match with and adopt a pet {"\n"}that is most suitable for you
          </Text>

          <StatusBar style="dark-content" />
          <Input
            inputStyle={{
              fontSize: 14,
            }}
            containerStyle={{
              backgroundColor: "#fff",
              marginBottom: 20,
            }}
            leftIcon="email"
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            inputStyle={{
              fontSize: 14,
            }}
            containerStyle={{
              backgroundColor: "#fff",
              marginBottom: 20,
            }}
            leftIcon="lock"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            textContentType="password"
            rightIcon={rightIcon}
            value={password}
            onChangeText={(text) => setPassword(text)}
            handlePasswordVisibility={handlePasswordVisibility}
          />
          <Button
            onPress={onLogin}
            backgroundColor="#f1c737"
            title="Login"
            marginTop='5'
            marginBottom='5'
            width='40'
            borderRadius="7"
            marginRight="17"
          >
            <Text fontSize='13' color="#545871" fontFamily="Roboto_400Regular">
              Login In
            </Text>
          </Button>
          <Button
            onPress={() => navigation.navigate("Signup")}
            backgroundColor="#f1c737"
            text="Go to Signup"
            width='40'
            borderRadius="7"
            marginRight="17"
            marginBottom='20'
          >
            <Text fontSize='13' color="#545871" fontFamily="Roboto_400Regular">
              Sign Up
            </Text>
          </Button>
        </View>
    </ImageBackground>
    <View style={{height: 500, backgroundColor: '#9e8fae'}}>

    </View>
    </NativeBaseProvider>
    </ScrollView>
  );
}

function SignUpScreen({ navigation }) {
  return <SignUpForm />;
}
// function LogInScreen({ navigation }) {
//   return <LoginForm />;
// }

function ProfileScreen({ navigation }) {
  return <Profile />;
}

function AboutAdopting({ navigation }) {
  return <Adopting />;
}
function QuizScreen({ navigation }) {
  return <Quiz />;
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
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "home-outline" : "home-outline";
            }
            if (route.name === "Quiz") {
              iconName = focused ? "help-circle-outline" : "help-circle-outline";
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
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
        <Tab.Screen name="Adopting" component={AboutAdopting} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        {/* <Tab.Screen name="Login" component={SignUpScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}