import * as React from "react";
import { ImageBackground, View, Image } from "react-native";
import {
  Text,
  Button,
  NativeBaseProvider,
  extendTheme,
  Input,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import background from "../assets/login_background.jpg";
import Firebase from "../config/firebase";
import "firebase/firestore";
import logo from "../assets/Logo.jpg";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../js/loginForm.js';
import { useNavigation } from '@react-navigation/native';

// TODO: Replace the following with your app's Firebase project configuration
const auth = Firebase.auth();

function HomeScreen() {
  const navigation = useNavigation();
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

  const onSignup = async () => {
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
        alert("You sign up successfully! You can login now");
      }
    } catch (error) {
      alert(error.message);
      setLoginError();
    }
  };

  return (
    <NativeBaseProvider>
      <View
          style={{
            width: "auto",
            height: 83,
            backgroundColor: "white",
            alignItems: "center",
            paddingTop: 23,
          }}
        >
          <Image
            source={logo}
            style={{ width: 65, height: 58 }}
            alt="logo_image"
          />
        </View>
      <ImageBackground
      source={background}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
      }}
      alt="background_image">
      <View style={{marginTop: -150}}>
        <StatusBar style="dark-content" />
        <Text style={{ marginBottom: 5, textAlign: "center"}}>Sign Up</Text>

        <Input
          inputStyle={{
            fontSize: 14,
          }}
          borderColor="grey"
          width="300px"
          margin="auto"
          marginBottom="10px"
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
          borderColor="grey"
          width="300px"
          margin="auto"
          marginBottom="10px"
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
          borderColor="grey"
          width="300px"
          margin="auto"
          marginBottom="5px"
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
          borderColor="grey"
          width="300px"
          margin="auto"
          marginBottom="10px"
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
        {/* <Button
          width="300px"
          margin="auto"
          marginBottom="10px"
          onPress={onLogin}
          backgroundColor="#f1c737"
          title="Login"
          titleSize={20}
          containerStyle={{
            marginBottom: 24,
          }}
        >
          <Text color="#545871" fontFamily="Roboto_400Regular">
            Login
          </Text>
        </Button> */}
        <Button
          width="300px"
          margin="auto"
          backgroundColor="#f1c737"
          marginBottom="10px"
          onPress={(onSignup)}
          text="Go to Signup"
        >
          <Text color="#545871" fontFamily="Roboto_400Regular">
            Sign Up
          </Text>
        </Button>
        <Text textAlign="center" color="#545871" fontFamily="Roboto_400Regular">
            Already have an account? <Text textDecorationLine= 'underline'  onPress={() => navigation.navigate("Login")}>Login</Text> 
        </Text>
      </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
function LogInScreen() {
  return <Login />;
 }
export default HomeScreen;
