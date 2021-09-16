import React from "react";
import { Formik } from "formik";
import { View, TextInput, Button, Text } from "react-native";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
export default function LoginForm() {
  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const URL = "https://itcrowdproject.uqcloud.net/?PET_PHOTO";
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json.PID))
      .catch((error) => alert(error))
      .finally(setLoading(false));
  });
  return (
    <View>
      <Text
        color="white"
        fontSize="80"
        fontFamily="PaytoneOne_400Regular"
        marginTop="150px"
        marginRight="50px"
      >
        Welcome back login in to find your Purrrfect Pets!{" "}
      </Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          alert("Submitted");
          //console.log("submitted");
          alert(values);
        }}
        // Query database here for users! https://itcrowdproject.uqcloud.net/?USERS search through pair
      >
        {(props) => (
          <View>
            <TextInput
              padding="5em"
              placeholder="Username"
              onChangeText={props.handleChange("username")}
              value={props.values.username}
            />
            <TextInput
              padding="5em"
              placeholder="Password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
            <Button
              padding="5em"
              title="submit"
              color="lightpink"
              onPreess={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

//xport default LoginForm;
