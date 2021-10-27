import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NativeBaseProvider, Image } from "native-base";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import profile from "../assets/pic.jpg";
import email from "../assets/email (1).png";
import phone from "../assets/phone-call.png";
import date from "../assets/date-of-birth.png";
import location from "../assets/pin.png";
import Firebase from "../config/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const ProfileScreen = () => {
  const user = Firebase.auth().currentUser;
  const [postcode, setpostcode] = useState("");
  const [phone_number, setNumber] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");

  var ref1 = Firebase.database().ref("2/data/" + user.uid + "/petArray");
  ref1.on("value", function (snapshot) {
    const pet1 = snapshot.val();
    if (pet1[0] == "") {
      setpostcode(pet1[0]);
    }
  });
  ref1[2].on("value", function (snapshot) {
    const pet2 = snapshot.val();
    if (postcode == "") {
      setpostcode(data);
    }
  });
  ref1[3].on("value", function (snapshot) {
    const pet3 = snapshot.val();
    if (postcode == "") {
      setpostcode(data);
    }
  });
  ref1[4].on("value", function (snapshot) {
    const pet4 = snapshot.val();
    if (postcode == "") {
      setpostcode(data);
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
