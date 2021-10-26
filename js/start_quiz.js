import * as React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  RefreshControl,
  ScrollView
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
var printablePetArray = [];

/**
 * Save data attached to button 1
 * @param data: value from the onsubmit button
 */

function saveData1(data, petData1) {
  alert(currentPos);
  alert(data);
  var petData = "";
  var petNameInput = String(petData1);
  alert(petData1);

  var refName = Firebase.database().ref(petData1);
  //var refName = Firebase.database().ref("8/data/6/name");
  refName.on("value", function (snapshot) {
    const ref = snapshot.val();
    alert("tHIS ONE:" + ref);
    petData = ref;
  });
  if (petData == "") {
    alert("nah!");
  }
  petArray.push(petData);
  printablePetArray.push(petData);
  //petArray.push(Firebase.database().ref(petNameString).val());

  //printablePetArray.push(Firebase.database().ref(petNameString).val());
  Firebase.database()
    .ref("2/data/" + Firebase.auth().currentUser.uid)
    .update({
      petArray: petArray,
    });
  currentPos++;
  //this.props.navigation.state.params.refresh();
  //navigate("Child", { refresh: refreshFunction });

  /* add data to users pets */
  //CardComponent();
}
/**
 * Save data attached to button 2
 * @param data: value from the onsubmit button
 */

function saveData2(data, petData2, navigation) {
  alert(currentPos);
  alert(petData2);
  let petData = "";
  var refName = Firebase.database().ref(petData2);
  //var refName = Firebase.database().ref("8/data/6/name");
  refName.on("value", function (snapshot) {
    const ref = snapshot.val();
    alert("tHIS ONE:" + ref);
    petData = ref;
  });
  if (petData == "") {
    alert("nah!");
  }
  petArray.push(petData);
  printablePetArray.push(petData);
  /*var pushItem = Firebase.database().ref(petName);
  pushItem.on("value", function (snapshot) {
    var pushable = snapshot.val();
    alert(pushable);
    printablePetArray.push(pushable);
  });*/
  Firebase.database()
    .ref("2/data/" + Firebase.auth().currentUser.uid)
    .update({
      petArray: petArray,
    });
  currentPos = currentPos + 1;
  if (navigation.navigate("start_quiz")) {
    alert("yay!");
  }
  /* add data to users pets */
  //CardComponent();
}
function getPos(currentPoint) {
  return currentPoint;
}
//Modified from NativeBase Card Component, with signification style changes
/**
 * Component to display the UI for the questions asked to the user
 * also generates questions attached to firebase data
 * @returns void
 */
function CardComponent() {
  const navigation = useNavigation();
  const [name, setRefName] = useState("");
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [position, setPosition] = useState(0);
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
    "Pet Living with a disability?",
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
  var petData1 = "8/data/" + randomInt;
  var petData2 = "8/data/" + randomInt2;

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
  });

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
  });

  leadsRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();
    });
  });
  /* Card Componented taken from nativebase.io with modified style changes 
  REFERENCE: */
  return (
    
    <Box
      rounded="lg"
      width="300px"
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
          Question {position}
        </Heading>
        <Text
          style={{
            color: "#545871",
            fontSize: 15,
            fontFamily: "PaytoneOne_400Regular",
            textAlign: "center",
          }}
        >
          {questions[position]}
        </Text>
        <Flex direction="row" justifyContent="center">
          <Button
            title={data}
            size="sm" //  onPress={() => console.log('hello world')}
            margin={1}
            p={4}
            onPress={() => saveData1(data, petData1, navigation) + setPosition(position + 1)}
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
            onPress={() => saveData2(data2, petData2, navigation) + setPosition(position + 1)}
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
        </Text>
      </Stack>
    </Box>
  );
}
function PetComponent() {
  var count = 0;
  const [petArray, setPetArray] = useState([]);
  var ref1 = Firebase.database().ref(
    "2/data/" + Firebase.auth().currentUser.uid + "/petArray"
  );
  let childData = [];
  ref1.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      childData.push(JSON.stringify(childSnapshot.val()));
    });
  });

  /* for (var i = 0; i < petArray.length; i++) {
 //  
    /*add all pet data for each attribute of pet in pet array */
  // }
  return (<ScrollView>
    <Box>
      {" "}
      <Text
        style={{
          color: "#545871",
          fontSize: 15,
          fontFamily: "PaytoneOne_400Regular",
          textAlign: "center",
        }}
      >
        {" "}
        Your Pets{" "}
      </Text>
      <Box
        rounded="lg"
        width="300px"
        height="150px"
        shadow={1}
        _light={{ backgroundColor: "red.500" }}
        _dark={{ backgroundColor: "red.500" }}
      >
        <Text> {childData} </Text>
        <Button> Email Agency </Button>
      </Box>
    </Box></ScrollView>
  );
}
/* Self-authored component */
function NoLogin() {
  return (
    <Text
      style={{
        color: "red.500",
        textAlign: Center,
        fontSize: 15,
        fontFamily: "PaytoneOne_400Regular",
        textAlign: "center",
      }}
    >
      Please head to the Login Screen!{" "}
    </Text>
    
  );
}
export default function StartQuizScreen() {
  const numberOfUsers = 15;
  const randomIndex = Math.floor(Math.random() * numberOfUsers);
  const [mode, setMode] = useState("Basic");
  const navigation = useNavigation();
  var user = Firebase.auth().currentUser;

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  if (!user) {
    return <NoLogin />;
  }
  return (
    <NativeBaseProvider>
      <View
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "25%" }}
      >
        <CardComponent />
        <PetComponent />
      </View>
    </NativeBaseProvider>
  );
}
