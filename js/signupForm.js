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

import Firebase from "../config/firebase";
import "firebase/firestore";

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
        await auth.createUserWithEmailAndPassword(email, password);
        const currentUser = auth.currentUser;

        const db = Firebase.firestore();
        db.collection("users").doc(currentUser.uid).set({
          email: currentUser.email,
          lastName: lastName,
          firstName: firstName,
        });
        currentUser.updateProfile({
          displayName: "Finnasdasdd",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        });
      }
    } catch (error) {
      alert(error.message);
      setLoginError();
    }
  };

  return (
    <NativeBaseProvider>
      <View>
        <StatusBar style="dark-content" />
        <Text>Sign Up</Text>

        <Input
          inputStyle={{
            fontSize: 14,
          }}
          containerStyle={{
            backgroundColor: "#fff",
            marginBottom: 20,
          }}
          leftIcon="email"
          placeholder="Enter First Name"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <Input
          inputStyle={{
            fontSize: 14,
          }}
          containerStyle={{
            backgroundColor: "#fff",
            marginBottom: 20,
          }}
          leftIcon="email"
          placeholder="Enter Last Name"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

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
          s
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
export default HomeScreen;
