import React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  handlePress,
} from "react-native";
export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      lastName: lastName,
      firstName: firstName,
    });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}
const LoginForm = () => {
  return (
    <View>
      <Text>Create an account </Text>

      <ScrollView onBlur={Keyboard.dismiss}>
        <TextInput placeholder="First name*" />
        <TextInput placeholder="Last name" />

        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput placeholder="Enter your password" secureTextEntry={true} />
        <TextInput
          placeholder="Retype your password to confirm*"
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handlePress}>
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LoginForm;
