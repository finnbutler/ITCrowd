import * as React from "react";
import { ImageBackground, View } from "react-native";
import {
  Text,
  Button,
  NativeBaseProvider,
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
import LoginForm from "./js/loginForm.js";
import SignUpForm from "./js/signupForm.js";
import Profile from "./js/profile.js";
import AboutAdopting from "./js/about.js";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import background from "./assets/background.jpg";
import Quiz from "./js/quiz.js";
import Test from "./js/test";
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
            marginLeft: "25em",
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
          <Text
            color="white"
            fontSize="30"
            paddingTop="10"
            textAlign="center"
            marginRight="120px"
            fontFamily="PaytoneOne_400Regular"
            flexShrink="1"
          >
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
            <Text color="#545871" fontFamily="Roboto_400Regular">
              Login In{" "}
            </Text>
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
            <Text color="#545871" fontFamily="Roboto_400Regular">
              Sign Up
            </Text>
          </Button>
        </View>
      </NativeBaseProvider>
    </ImageBackground>
<<<<<<< Updated upstream
=======
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
        alert("Password correect!");
      }
    } catch (error) {
      alert("ERROR!");
      setLoginError(error.message);
    }
    Firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("We are authenticated now!");
      }

      // Do other things
    });
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
>>>>>>> Stashed changes
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
          <Drawer.Screen name="Test" component={TestScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
