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
/* "Free Photo | Adorable white bulldog puppy portrait", Freepik. [Online]. 
Available: https://www.freepik.com/free-photo/adorable-white-bulldog-puppy-portrait_3532493.htm#page=1&query=bulldog&position=3&from_view=search. 
[Accessed: 28- Oct- 2021]. */
import background from "../assets/login_background.jpg";
import Firebase from "../config/firebase";
import "firebase/firestore";
import logo from "../assets/Logo.jpg";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../js/loginForm.js";
import { useNavigation } from "@react-navigation/native";
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
  const [phone_number, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");

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
    auth.createUserWithEmailAndPassword(email, password).then((res) => {
      Firebase.database()
        .ref("2/data/" + res.user.uid)
        .set({
          firstName: firstName,
          lastName: lastName,
          phone_number: phone_number,
          postcode: postcode,
        });
    });
  };

  return (
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
        <View style={{ marginTop: -150 }}>
          <StatusBar style="dark-content" />
          <Text style={{ marginBottom: 5, textAlign: "center" }}>Sign Up</Text>

          <Input
            inputStyle={{
              fontSize: 14,
            }}
            borderColor="grey"
            width="300px"
            margin="auto"
            marginBottom="10px"
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
            marginBottom="10px"
            leftIcon="email"
            placeholder="Enter Phone Number"
            autoCapitalize="none"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            autoFocus={true}
            value={phone_number}
            onChangeText={(text) => setPhone(text)}
          />

          <Input
            inputStyle={{
              fontSize: 14,
            }}
            borderColor="grey"
            width="300px"
            margin="auto"
            marginBottom="10px"
            placeholder="Enter Post Code"
            autoCapitalize="none"
            keyboardType="number-pad"
            textContentType="postalCode"
            autoFocus={true}
            value={postcode}
            onChangeText={(text) => setPostcode(text)}
          />

          <Input
            inputStyle={{
              fontSize: 14,
            }}
            borderColor="grey"
            width="300px"
            margin="auto"
            marginBottom="5px"
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
            width="300px"
            margin="auto"
            backgroundColor="#f1c737"
            marginBottom="10px"
            onPress={onSignup}
            text="Go to Signup"
          >
            <Text color="#545871" fontFamily="Roboto_400Regular">
              Sign Up
            </Text>
          </Button>
          <Text
            textAlign="center"
            color="#545871"
            fontFamily="Roboto_400Regular"
          >
            Already have an account?{" "}
            <Text
              textDecorationLine="underline"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
export default HomeScreen;
