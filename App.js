import * as React from "react";
import { ImageBackground, View } from "react-native";
import {
  Text,
  Button,
  NativeBaseProvider,
  extendTheme,
  Input,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
//import { useFormik } from "formik";
import { Formik } from "formik";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginForm from "./js/loginForm.js";
import SignUpForm from "./js/signupForm.js";
import Profile from "./js/profile.js";
import Test from "./js/test.js";
import AboutAdopting from "./js/about.js";
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

// TODO: Replace the following with your app's Firebase project configuration
const auth = Firebase.auth();
function HomeScreen({ navigation }) {
  // const response = await fetch('/api/names');
  // const names = await response.json();

  // console.log(names);
  // https://itcrowdproject.uqcloud.net/?PET_PHOTO
  /* let [fontsLoaded, error] = useFonts({
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
  );*/
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
  return (
    <NativeBaseProvider>
      <View>
        <StatusBar style="dark-content" />
        <Text>Login</Text>
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
          backgroundColor="#f57c00"
          title="Login"
          tileColor="#fff"
          titleSize={20}
          containerStyle={{
            marginBottom: 24,
          }}
        >
          {" "}
          <Text color="#545871" fontFamily="Roboto_400Regular">
            Login In
          </Text>
        </Button>
        <Button
          onPress={() => navigation.navigate("Signup")}
          text="Go to Signup"
          color="#fff"
        >
          {" "}
          <Text color="#545871" fontFamily="Roboto_400Regular">
            Sign Up
          </Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}

function SignUpScreen({ navigation }) {
  return <SignUpForm />;
}
function LogInScreen({ navigation }) {
  return <LoginForm />;
}

function ProfileScreen({ navigation }) {
  return <Profile />;
}

function AboutAdpoting({ navigation }) {
  return <AboutAdopting />;
}
function QuizScreen({ navigation }) {
  return <Quiz />;
}
function TestScreen({ navigation }) {
  return <Test />;
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
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            }
            if (route.name === "Quiz") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            if (route.name === "AboutAdopting") {
              iconName = focused ? "ios-pet" : "ios-pet";
            }
            if (route.name === "Profile") {
              iconName = focused ? "ios-account" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
        <Tab.Screen name="About Adopting" component={AboutAdpoting} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Login" component={SignUpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
