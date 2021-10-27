import * as React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  Linking,
} from "react-native";
import {
  NativeBaseProvider,
  extendTheme,
  Input,
  Button,
  Box,
  AspectRatio,
  HStack,
  Center,
  Stack,
  Heading,
  Flex,
  VStack,
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

var petArray = [];
var printablePetArray = [];

/**
 * Save data attached to button 1
 * @param data: value from the onsubmit button
 */

function saveData1(data, petData1) {
  //alert(data);
  let petData = "";
  var petNameInput = String(petData1);
  //alert(petData1);

  var refName = Firebase.database().ref(petData1);
  //var refName = Firebase.database().ref("8/data/6/name");
  refName.on("value", function (snapshot) {
    const ref = snapshot.val();
    //alert("tHIS ONE:" + ref);
    petData = ref;
    if (petData != "") {
      petArray.push(petData);
      printablePetArray.push(petData);
    }
  });
  if (petData == "") {
    //alert("nah!");
  }

  //petArray.push(Firebase.database().ref(petNameString).val());

  //printablePetArray.push(Firebase.database().ref(petNameString).val());
  Firebase.database()
    .ref("2/data/" + Firebase.auth().currentUser.uid)
    .update({
      petArray: petArray,
    });
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
  //alert(petData2);
  let petData = "";
  var refName = Firebase.database().ref(petData2);
  //var refName = Firebase.database().ref("8/data/6/name");
  refName.on("value", function (snapshot) {
    const ref = snapshot.val();
    //alert("tHIS ONE:" + ref);
    petData = ref;
    if (petData != "") {
      petArray.push(petData);
      printablePetArray.push(petData);
    }
  });
  if (petData == "") {
    //alert("nah!");
  }

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
  if (navigation.navigate("start_quiz")) {
    alert("yay!");
  }
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
  var randomInt = Math.floor(Math.random() * 119);
  var randomInt2 = Math.floor(Math.random() * 119);
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
    "isShotsCurrent",
    "isSpecialNeeds",
    "IsDeclawed",
    "BreedPrimary",
    "isSpayedorNeutered",
    "isHouseTrained",
  ];
  var valueDB = listOfValues[position];
  var currentItem1 = "8/data/" + randomInt + "/" + valueDB;
  var currentItem2 = "8/data/" + randomInt2 + "/" + valueDB;
  var petData1 = "8/data/" + randomInt;
  var petData2 = "8/data/" + randomInt2;

  var item1 = Firebase.database().ref(currentItem1);
  var item2 = Firebase.database().ref(currentItem2);
  item1.on("value", function (snapshot) {
    snapshot.val();
    //alert(snapshot.val());
    const Name1 = snapshot.val();
    // var count = 0;
    if (Name1 == 0 && data == "") {
      setData("No Way!");
      //count++;
    } else if (Name1 == 1 && data == "") {
      setData("Yes!");
      //count++;
    } else if (Name1 != "" && data == "") {
      setData(Name1);
    }
  });

  item2.on("value", function (snapshot) {
    snapshot.val();
    //alert(snapshot.val());
    const Name1 = snapshot.val();
    if (Name1 == 0 && data2 == "") {
      setData2("No Way!");
    } else if (Name1 == 1 && data2 == "") {
      setData2("Yes!");
    } else if (Name1 != "" && data2 == "") {
      setData2(Name1);
    }
  });

  leadsRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();
    });
  });
  function addPosition(position) {
    if (position <= 11) {
      setPosition(position + 1);
    }
  }
  /* Card Componented taken from nativebase.io with modified style changes 
  REFERENCE: nativebase.io */
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
          ml={-1}
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
            backgroundColor="green.500"
            p={4}
            onPress={() =>
              saveData1(data, petData1, navigation) +
              addPosition(position) +
              setData("") +
              setData2("")
            }
          >
            <Text style={{ color: "white", fontFamily: "Roboto_400Regular" }}>
              {data}
            </Text>
          </Button>
          <Button
            size="sm"
            margin={1}
            p={4}
            backgroundColor="red.500"
            onPress={() =>
              saveData2(data2, petData2, navigation) +
              addPosition(position) +
              setData2("") +
              setData("")
            }
          >
            <Text style={{ color: "white", fontFamily: "Roboto_400Regular" }}>
              {data2}
            </Text>
          </Button>
        </Flex>
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
  //let items = [];
  const [items, setItems] = useState([]);
  /* Complex function to itterate through each pet's values -- self coded */
  ref1.on("value", function (snapshot) {
    //snapshot.forEach(function (childSnapshot) {
    //childData.push(JSON.parse(childSnapshot.val()));
    snapshot.forEach((child) => {
      if (items.length != 1) {
        setItems([
          ...items,
          {
            name: child.val().Name,
            age: child.val().Age,
            description: child.val().Description,
            petPhotos: child.val().PhotoFull,
          },
        ]);
      }
    });

    console.log(items);
  });
  /* for (var i = 0; i < petArray.length; i++) {
 //  
    /*add all pet data for each attribute of pet in pet array */
  // }
  // Majority of code for styles of the card has been taken from
  // https://docs.nativebase.io/building-card and used with a change in style
  // and content being pulled from firebase
  return (
    <ScrollView>
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
        {items.map((item) => (
          <Box
            rounded="lg"
            overflow="hidden"
            width="72"
            shadow={1}
            _text={{ color: "white", fontWeight: "700", fontSize: "xs" }}
            _light={{ backgroundColor: "red.500" }}
            _dark={{ backgroundColor: "red.500" }}
          >
            <Box>
              <AspectRatio ratio={16 / 9}>
                <Image
                  source={{
                    uri: item.petPhotos,
                  }}
                  alt="Image of pet from PetFinder"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading
                  size="md"
                  ml="-1"
                  _light={{ color: "white" }}
                  _dark={{ color: "white" }}
                >
                  Name: {item.name}
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{ color: "white" }}
                  _dark={{ color: "white" }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  Age: {item.age}
                </Text>
              </Stack>
              <Text fontWeight="400">Description: {item.description}</Text>
              <VStack space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Button
                    onPress={() =>
                      Linking.openURL("mailto:adopt@petfinder.com")
                    }
                  >
                    {" "}
                    Email Agency{" "}
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </Box>
        ))}
      </Box>
    </ScrollView>
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
      <ScrollView>
        <View
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "25%" }}
        >
          <CardComponent />
          <PetComponent />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
