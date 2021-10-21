import * as React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import {
  NativeBaseProvider,
  extendTheme,
  Input,
  Button,
  Box,
  Center,
  Stack,
  Heading,
  Flex,
} from "native-base";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import Firebase from "../config/firebase";
import "firebase/auth";
import background from "../assets/login_background.jpg";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
var currentPos = 0;
var petArray = [];
/**
 * Save data attached to button 1
 * @param data: value from the onsubmit button
 */
function saveData1(data, petName) {
  currentPos++;
  alert(currentPos);
  alert(data);
  const petData = data;
  petArray.push(data);
  Firebase.database()
    .ref("2/data/" + Firebase.auth().currentUser.uid)
    .set({
      petArray: petArray,
    });

  //this.props.navigation.navigate("start_quiz");
  /* add data to users pets */
  //CardComponent();
}
/**
 * Save data attached to button 2
 * @param data: value from the onsubmit button
 */
function saveData2(data, petName) {
  currentPos++;
  alert(currentPos);
  alert(data);
  const petData = data;
  petArray.push(data);
  Firebase.database()
    .ref("2/data/" + Firebase.auth().currentUser.uid)
    .set({
      petArray: petArray,
    });

  //navigation.navigate("start_quiz");
  /* add data to users pets */
  //CardComponent();
}
function nextQuestion(currentPoint) {
  return questions[currentPoint];
}
//Modified from NativeBase Card Component, with signification style changes
/**
 * Component to display the UI for the questions asked to the user
 * also generates questions attached to firebase data
 * @returns void
 */
function CardComponent() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  var leadsRef = Firebase.database().ref("8/data/0");
  var randomInt = Math.floor(Math.random() * 10);
  var randomInt2 = Math.floor(Math.random() * 10);
  var questions = [
    "Which species is superior?",
    "Which name is more cool?",
    "Old soul or young at heart?",
    "Do you like to listen to one song, or mix them together?",
    "What's your favourite colour? (ours is #f72fe3)",
    "Would you rather a small party or a medium disco?",
    "Men or Women?",
    "Vaxed or Unvaxed, or anti-vaxer? Haha, we're joking. ",
    "Caring for someone living with a disability, or not?",
    "Do you like when the claws come out?",
    "What's a better breed?",
    "Do you want more pets?",
    "Spending time at home or away?",
  ];
  var listOfValues = [
    "Species",
    "Name",
    "Age",
    "BreedIsMixed",
    "ColourPrimary",
    "Size",
    "Sex",
    "IsShotsCurrent",
    "IsSpecialNeeds",
    "IsDeclawed",
    "BreedPrimary",
    "IsSpayedorNeutered",
    "IsHouseTrained",
  ];
  var valueDB = listOfValues[currentPos];
  var currentItem1 = "8/data/" + randomInt + "/" + valueDB;
  var currentItem2 = "8/data/" + randomInt2 + "/" + valueDB;
  var petName1 = "8/data/" + randomInt + "/name";
  var petName2 = "8/data/" + randomInt2 + "/name";

  var item1 = Firebase.database().ref(currentItem1);
  var item2 = Firebase.database().ref(currentItem2);
  item1.on("value", function (snapshot) {
    snapshot.val();
    // alert(snapshot.val());
    const Name1 = snapshot.val();
    var count = 0;
    if (Name1 == 0 && data == "") {
      setData("No Way!");
      count++;
    }
    if (Name1 == 1 && data == "") {
      setData("Yes!");
      count++;
    }
    if (data == "" && count == 0) {
      setData(Name1);
    }
    //alert(Name1);
  });
  //alert(data);

  item2.on("value", function (snapshot) {
    snapshot.val();
    //alert(snapshot.val());
    const Name1 = snapshot.val();
    if (Name1 == 0) {
      setData2("No Way!");
    }
    if (Name1 == 1) {
      setData2("Yes!");
    }
    if (data2 == "") {
      setData2(Name1);
    }
    //alert(Name1);
  });

  leadsRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();
      //  alert(childData);
    });
  });
  /* Card Componented taken from nativebase.io with modified style changes 
  REFERENCE: */
  return (
    <Box
      rounded="lg"
      width="60%"
      height="300px"
      shadow={1}
      _light={{ backgroundColor: "gray.50" }}
      _dark={{ backgroundColor: "gray.700" }}
    >
      <Stack p="4" space={5}>
        <Heading
          size="md"
          ml="-1"
          color="#545871"
          fontFamily="PaytoneOne_400Regular"
          textAlign="center"
        >
          Question {currentPos}
        </Heading>
        <Text
          style={{
            color: "#545871",
            fontSize: 15,
            fontFamily: "PaytoneOne_400Regular",
            textAlign: "center",
          }}
        >
          {questions[currentPos]}
        </Text>
        <Flex direction="row">
          <Button
            title={data}
            size="sm" //  onPress={() => console.log('hello world')}
            margin={1}
            p={4}
            onPress={() => saveData1(data, petName1)}
          >
            <Text style={{ color: "white", fontFamily: "Roboto_400Regular" }}>
              {data}
            </Text>
          </Button>
          <Button
            size="sm"
            margin={1}
            p={4}
            colorScheme="secondary"
            onPress={() => saveData2(data2, petName2)}
          >
            <Text style={{ color: "white", fontFamily: "Roboto_400Regular" }}>
              {data2}
            </Text>
          </Button>
        </Flex>
        <Text
          style={{
            color: "#545871",
            fontSize: 15,
            fontFamily: "PaytoneOne_400Regular",
            textAlign: "center",
          }}
        >
          Your Pets
          {petArray}
        </Text>
      </Stack>
    </Box>
  );
}
/* Self-authored component */
export default function StartQuizScreen() {
  const numberOfUsers = 15;
  const randomIndex = Math.floor(Math.random() * numberOfUsers);
  const [mode, setMode] = useState("Basic");
  const navigation = useNavigation();

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NativeBaseProvider>
      <View
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "25%" }}
      >
        <CardComponent />
      </View>
    </NativeBaseProvider>
  );
}
