import * as React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { NativeBaseProvider, Input, Button, } from "native-base";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import Firebase from "../config/firebase";
import logo from "../assets/Logo.jpg";
import background from "../assets/login_background.jpg";
import { NavigationContainer } from "@react-navigation/native";

// export async function registration(email, password, lastName, firstName) {
//   try {
//     await firebase.auth().createUserWithEmailAndPassword(email, password);
//     const currentUser = firebase.auth().currentUser;

//     const db = firebase.firestore();
//     db.collection("users").doc(currentUser.uid).set({
//       email: currentUser.email,
//       lastName: lastName,
//       firstName: firstName,
//     });
//   } catch (err) {
//     Alert.alert("There is something wrong!!!!", err.message);
//   }
// }
// const LoginForm = () => {
//   return (
//     <View>
//       <Text>Create an account </Text>

//       <ScrollView onBlur={Keyboard.dismiss}>
//         <TextInput placeholder="First name*" />
//         <TextInput placeholder="Last name" />

//         <TextInput
//           placeholder="Enter your email"
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />

//         <TextInput placeholder="Enter your password" secureTextEntry={true} />
//         <TextInput
//           placeholder="Retype your password to confirm*"
//           onChangeText={(password2) => setConfirmPassword(password2)}
//           secureTextEntry={true}
//         />
//         <TouchableOpacity onPress={handlePress}>
//           <Text>Sign Up</Text>
//         </TouchableOpacity>

//         <Text>Already have an account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
//           <Text>Sign In</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };
const LoginScreen = ({navigation}) => {

  const auth = Firebase.auth();
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

  

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    //<NavigationContainer>   
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

        <View style={{ marginTop: -250 }}>
          <Text style={{ marginBottom: 20, color: "#545871", textAlign: "center", 
          fontSize: 20, fontFamily: "PaytoneOne_400Regular"}}>
            Login
            </Text>
          <Input
            inputStyle={{
              fontSize: 14,
            }}
            borderColor="grey"
            width={300}
            margin="auto"
            marginBottom="10px"
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
            margin="auto"
            marginBottom="20px"
            borderColor="grey"
            width={300}
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
            margin="auto"
            marginBottom="10px"
            onPress={onLogin}
            backgroundColor="#f1c737"
            title="Login"
            width={40}
            borderRadius={7}
          >
            <Text
              marginBottom="10px"
              fontSize="13"
              color="#545871"
              fontFamily="Roboto_400Regular"
            >
              Login
            </Text>
          </Button>
          <Text style={{color: "#545871", fontFamily: "Roboto_400Regular", textAlign: "center"}}>Do not have an account? <TouchableOpacity onPress={()=> navigation.navigate("Signup")}><Text style={{textDecorationLine: 'underline'}}>Sign up</Text></TouchableOpacity></Text>
        </View>
      </ImageBackground>
    </NativeBaseProvider>//</NavigationContainer> 
  );
};


export default LoginScreen;
