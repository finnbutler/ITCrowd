import React, { useState } from "react";
import {
  Dimensions,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import background from "../assets/quiz_background.jpg";
import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  VStack,
  Spacer,
  AspectRatio,
  Stack,
  Center,
  Image,
  Button,
  Flex,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import Firebase from "../config/firebase";
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";

function saveData1(data) {
  alert(data);
  const petName = data;
}
function saveData2(data) {
  alert(data);
  const petName = data;
}
function nextQuestion(currentPoint) {
  return questions[currentPoint];
}
function CardComponent() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  var leadsRef = Firebase.database().ref("8/data/0");
  var randomInt = Math.floor(Math.random() * 10);
  var randomInt2 = Math.floor(Math.random() * 10);
  var questions = [
    "What's better species?",
    "What's a cooler name?",
    "Old soul or young at heart?",
    "Do you like to listen to one song, or mix them together? ",
    "What's your favourite colour, (ps. ours is #2423fe)? ",
    "Would you rather a small party or a medium disco? Just asking for a friend? ",
    "Men or Women?",
    "Vaxed or Unvaxed, or anti-vaxer? Haha, we're joking. ",
    "Caring for someone living with a disability, or not?",
    "Do you like when the claws come out?",
    "What's a better breed?",
    "Do you want more pets?",
    "At home or away?",
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
  var currentPos = 10;
  var valueDB = listOfValues[currentPos];
  var currentItem1 = "8/data/" + randomInt + "/" + valueDB;
  var currentItem2 = "8/data/" + randomInt2 + "/" + valueDB;
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
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      width="100%"
      height="300px"
      textalign="center"
      shadow={1}
      _light={{ backgroundColor: "gray.50" }}
      _dark={{ backgroundColor: "gray.700" }}
    >
      <Box>
        <Center
          bg="red.500"
          _text={{ color: "white", fontWeight: "700", fontSize: "xs" }}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5"
        >
          QUIZ
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Heading size="md" ml="-1">
          Question 1
        </Heading>
        <Text
          fontSize="xs"
          _light={{ color: "violet.500" }}
          _dark={{ color: "violet.300" }}
          fontWeight="500"
          ml="-0.5"
          mt="-1"
        >
          {questions[currentPos]}
        </Text>
        <Flex
          direction="row"
          mb="2.5"
          mt="1.5"
          _text={{
            color: "coolGray.800",
          }}
        >
          <Button
            title={data}
            size="sm" //  onPress={() => console.log('hello world')}
            pt="1em"
            pl="2.4em"
            pr="2.4em"
            pb="1em"
            onPress={() => saveData1(data)}
          >
            <Text>{data}</Text>
          </Button>
          <Button
            size="sm"
            colorScheme="secondary"
            onPress={() => saveData2(data2)}
          >
            {" "}
            <Text>{data2}</Text>
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
}

export default function QuizScreen() {
  /*fetch("https://deco3801-91e98-default-rtdb.firebaseio.com/10/data")
    .then((response) => response.json())
    .then((data) => console.log(data));*/

  // Attach an asynchronous callback to read the data at our posts reference
  const numberOfUsers = 15;
  const randomIndex = Math.floor(Math.random() * numberOfUsers);
  const navigation = useNavigation();
  const [mode, setMode] = useState("Basic");

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={background}
        style={{
          flex: 1,
        }}
        alt="background_image"
      >
        <Text
          style={{
            textAlign: "center",
            paddingTop: 30,
            fontFamily: "PaytoneOne_400Regular",
            color: "white",
            fontSize: 25,
          }}
        >
          Quiz Time
        </Text>
        <Text
          style={{
            textAlign: "center",
            paddingTop: 20,
            fontFamily: "PaytoneOne_400Regular",
            color: "white",
            fontSize: 20,
          }}
        >
          Here, you can find your purrrfect{"\n"}pet with this fun game!
        </Text>
        <Button
          onPress={() => navigation.navigate("start_quiz")}
          backgroundColor="#9e8fae"
          title="Start"
          marginLeft="auto"
          marginRight="auto"
          marginTop={5}
          width={40}
          borderRadius={7}
        >
          <Text fontSize={15} color="white" fontFamily="Roboto_400Regular">
            Play Quiz
          </Text>
        </Button>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
