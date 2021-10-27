import React, { useState } from "react";
import { ImageBackground, Text,  StyleSheet, View, TouchableOpacity, ScrollView, Button} from "react-native";
import { NativeBaseProvider, Image } from "native-base";
import {  useFonts, PaytoneOne_400Regular,} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import profile from "../assets/pic.jpg";
import email from "../assets/email (1).png";
import phone from "../assets/phone-call.png";
import date from "../assets/date-of-birth.png";
import location from "../assets/pin.png";
import Firebase from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue } from "firebase/database";

const ProfileScreen = () => {
  const user = Firebase.auth().currentUser;
  const [postcode, setpostcode] = useState("");
  const [phone_number, setNumber] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const navigation = useNavigation();
  const signOut = async () => {
    await Firebase.auth().signOut();
    navigation.navigate("Login");
  };
  if (!user) {
    return <NoLogin />;
  }
  var ref1 = Firebase.database().ref("2/data/" + user.uid + "/postcode");
  ref1.on("value", function (snapshot) {
    const data = snapshot.val();
    if (postcode == "") {
      setpostcode(data);
    }
  });

  var ref2 = Firebase.database().ref("2/data/" + user.uid + "/firstName");
  ref2.on("value", function (snapshot) {
    const data = snapshot.val();
    if (first_name == "") {
      setFirst(data);
    }
  });

  var ref3 = Firebase.database().ref("2/data/" + user.uid + "/lastName");
  ref3.on("value", function (snapshot) {
    const data = snapshot.val();
    if (last_name == "") {
      setLast(data);
    }
  });

  var ref4 = Firebase.database().ref("2/data/" + user.uid + "/phone_number");
  ref4.on("value", function (snapshot) {
    const data = snapshot.val();
    if (phone_number == "") {
      setNumber(data);
    }
  });

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function NoLogin() {
    return "Please head to the Login Screen!";
  }
  return (
    <ScrollView>
      <NativeBaseProvider>
        <View style={styles.logo}>
          <ImageBackground
            source={profile}
            resizeMode="cover"
            style={{ opacity: 0.5 }}
            alt="background_image"
          >
            <Image
              source={profile}
              alt="logo"
              style={{
                width: 120,
                height: 120,
                borderRadius: 150,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20,
              }}
            />
            {/* <View style={themedStyle.add}>
    <TouchableOpacity onPress={this.handleEditAvatarNavigation}>
      <Icon name='edit-outline' width={20} height={20} fill='#111' />
    </TouchableOpacity>
  </View> */}
            <Text style={styles.heading}>
              {first_name} {last_name}, 22
            </Text>
            <Text style={styles.heading}>A University Student</Text>
          </ImageBackground>
        </View>
        <View style={styles.profile}>
          <View
            style={{
              flexDirection: "column",
              borderRadius: 10,
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            <View style={styles.info}>
              {/* <Image
                source={email}
                style={{ width: 25, height: 25, marginRight: 40 }}
                alt="email_icon"
              /> */}
              <Text style={styles.paragraph}>
                Email Address{"\n"}
                {user.email}
              </Text>
            </View>
            <View style={styles.info}>
              <Image
                source={phone}
                style={{ width: 25, height: 25, marginRight: 40 }}
                alt="phone_icon"
              />
              <Text style={styles.paragraph}>
                Phone Number{"\n"}
                {phone_number}
              </Text>
            </View>
            <View style={styles.info}>
              <Image
                source={location}
                style={{ width: 25, height: 25, marginRight: 40 }}
                alt="location_icon"
              />
              <Text style={styles.paragraph}>
                Postcode{"\n"}
                {postcode}
              </Text>
            </View>
          </View>
          <Button
            onPress={signOut}
            title="Sign Out!"
            color="#841584"
            accessibilityLabel="This is a signout button!"
          />
        </View>
      </NativeBaseProvider>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "auto",
  },
  heading: {
    textAlign: "center",
    fontFamily: "PaytoneOne_400Regular",
    color: "white",
    paddingTop: 15,
    fontSize: 19,
    marginBottom: 15,
  },
  paragraph: {
    textAlign: "left",
    fontSize: 15,
    color: "#545871",
  },
  profile: {
    backgroundColor: "#e8e9ed",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    justifyContent: "flex-start",
    fontFamily: "Roboto_400Regular",
    flexDirection: "row",
    padding: 30,
    width: 290,
    borderBottomWidth: 2,
    borderBottomColor: "#e8e9ed",
    backgroundColor: "#ffffff",
  },
});
export default ProfileScreen;
