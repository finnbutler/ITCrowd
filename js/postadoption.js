import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { NativeBaseProvider, Image, Button } from "native-base";

import { useNavigation } from "@react-navigation/native";
import Geolocation from "react-native-geolocation-service";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

import sick_dog from "../assets/sick_dog.jpg";

import { style } from "styled-system";

import MapView from "react-native-maps";

const Postadoption = () => {
  const navigation = useNavigation();

  // contents boolean variable with useState function to be triggered by button click
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(true);

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
        <View>
          {/* Top image for the Emergency Help page */}
          <Image source={sick_dog} style={{ height: 250 }} alt="sick_dog" />

          {/* container for main contents */}
          <View style={styles.cardbox}>
            <View style={styles.header}>
              <Text
                style={{ fontSize: 20, fontFamily: "PaytoneOne_400Regular" }}
              >
                {" "}
                Emergency assistance
              </Text>
            </View>

            {/* drop-down button to make the corresponding contents visible */}
            <TouchableOpacity
              style={styles.card}
              onPress={() => setContent1(!content1)}
            >
              <Text style={styles.subt}>Common Concerns</Text>
            </TouchableOpacity>
            {content1 ? (
              <View style={styles.paragraph}>
                <Text style={styles.tex1}>
                  As a new pet owner, it can be difficult to determine what
                  changes in your pet’s behaviour are normal and which are signs
                  you should take them to a vet immediately. Dogs and cats each
                  have their own ways of telling their human family when they
                  are unwell, so it is important to keep an eye out for the
                  following symptoms.
                  {"\n"}
                </Text>
                <Text style={styles.tex2}>
                  {"\u2022"}{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    Change in eating and drinking habits:{" "}
                  </Text>
                </Text>
                <Text style={styles.tex3}>
                  <Text style={{ color: "#008000" }}>normal:</Text> missing 1-2
                  meals, particularly in warmer weather.{"\n"}
                  <Text style={{ color: "#FF4500" }}>concerning:</Text> 48 hours
                  without eating or drinking an excessive amount of water.{" "}
                  {"\n"}
                </Text>

                <Text style={styles.tex2}>
                  {"\u2022"}{" "}
                  <Text style={{ fontWeight: "bold" }}>Change in coat: </Text>
                </Text>
                <Text style={styles.tex3}>
                  <Text style={{ color: "#008000" }}>normal:</Text> some changes
                  are to be expected as your pet moves through phases of life
                  from a puppy or kitten to an adult and eventually a senior.
                  Don’t be concerned if your aging pet has greying hairs or
                  experiences some thinning.
                  {"\n"}
                  <Text style={{ color: "#FF4500" }}>concerning:</Text>{" "}
                  typically, a pet’s coat should look thick and shiny. If their
                  coat starts to become rough or thinning, this could be a
                  symptom of an allergy.
                  {"\n"}
                </Text>

                <Text style={styles.tex2}>
                  {"\u2022"}{" "}
                  <Text style={{ fontWeight: "bold" }}>Vomiting: </Text>
                </Text>
                <Text style={styles.tex3}>
                  <Text style={{ color: "#008000" }}>normal:</Text> it is not
                  concerning if an animal vomits, as this could be a once-off
                  response to drinking too much water or eating something that
                  upset their stomach.
                  {"\n"}
                  <Text style={{ color: "#FF4500" }}>concerning:</Text> if your
                  pet has been vomiting frequently throughout the day, or their
                  vomit includes blood, this could be the sign of a more serious
                  illness.
                  {"\n"}
                </Text>

                <Text style={styles.tex2}>
                  {"\u2022"}{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    Emergency symptoms:{" "}
                  </Text>
                </Text>
                <Text style={styles.tex3}>
                  if your pet has a serious injury (e.g. by being hit by a car),
                  is unconscious, has had a seizure, has potentially eaten
                  something toxic or is visibly in pain, you should take them to
                  an emergency vet clinic immediately.
                  {"\n"}
                </Text>

                <Text style={styles.tex1}>
                  If you have noticed any of these changes, please take your pet
                  to the nearest vet facility to be evaluated by a professional.
                  If you are still unsure or concerned about your pet’s
                  symptoms, it is recommended to give the vet clinic a call to
                  discuss the situation.
                  {"\n"}
                  {"\n"}
                </Text>
              </View>
            ) : null}

            {/* drop-down button to make the corresponding contents visible */}
            <TouchableOpacity
              style={styles.card}
              onPress={() => setContent2(!content2)}
            >
              <Text style={styles.subt}>Nearby Emergency facilities</Text>
            </TouchableOpacity>
            {content2 ? (
              <View style={styles.paragraph}>
                {/* <Text style={styles.tex1}>
                      If you need emergency assistance, please use the following map to locate your nearest emergency veterinary clinic. {"\n"}
                    </Text>
                    <Text style={styles.tex2}>
                        {'\u2022'} <Text style={{fontWeight:"bold", }}>include google map here </Text>
                        
                    </Text> */}

                <Text style={styles.tex1}>
                  If you need{" "}
                  <Text style={{ color: "#F2552C" }}>
                    emergency assistance{" "}
                  </Text>
                  , please use the following number to call your nearest
                  emergency veterinary clinic. {"\n"}
                </Text>

                <Text style={styles.tex2}>
                  {"\u2022"}{" "}
                  <Text
                    style={{ color: "#6495ed", fontWeight: "500" }}
                    onPress={() =>
                      Linking.openURL("https://goo.gl/maps/f3Vpipxqm4ewWuQGA")
                    }
                  >
                    {""} Woolloongabba Emergency Vet {"\n"}
                  </Text>
                  <Text>
                    {"    "}Tel: 07 3456 0500{"\n"}
                  </Text>
                  {"\u2022"}{" "}
                  <Text
                    style={{ color: "#6495ed", fontWeight: "500" }}
                    onPress={() =>
                      Linking.openURL("https://g.page/BVECCS?share")
                    }
                  >
                    {""} Brisbane Veterinary Emergency & Critical Care Service
                    (BVECCS) {"\n"}
                  </Text>
                  <Text>
                    {"    "}Tel: (07) 3264 8365{"\n"}
                  </Text>
                  {"\u2022"}{" "}
                  <Text
                    style={{ color: "#6495ed", fontWeight: "500" }}
                    onPress={() =>
                      Linking.openURL("https://goo.gl/maps/F8xW9CHsipM2xSaD8")
                    }
                  >
                    {""} Animal Referral Hospital Brisbane{"\n"}
                  </Text>
                  <Text>
                    {"    "}Tel: (07) 3172 0593{"\n"}
                  </Text>
                </Text>
              </View>
            ) : null}

            <View style={styles.paragraph}></View>
          </View>
        </View>

        {/* google map address to the nearest emergency centers */}
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
      </NativeBaseProvider>
    </ScrollView>
  );
};

//style sheet for View, texts, touchoubleobject, etc..
const styles = StyleSheet.create({
  cardbox: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
  },
  paragraph: {
    textAlign: "left",
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#545871",
  },
  header: {
    textAlign: "center",
    padding: 10,
  },
  subt: {
    fontSize: 14,
    fontWeight: "bold",
    width: 290,
  },
  tex1: {
    color: "#777",
    paddingTop: 5,
    paddingLeft: 5,
  },
  tex2: {
    color: "#777",
    paddingTop: 5,
    paddingLeft: 15,
  },
  tex3: {
    color: "#777",
    paddingLeft: 15,
  },
  card: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#DDDDDD",
  },
});

export default Postadoption;
