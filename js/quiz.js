import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

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

export default function QuizScreen() {
  /*fetch("https://deco3801-91e98-default-rtdb.firebaseio.com/10/data")
    .then((response) => response.json())
    .then((data) => console.log(data));*/

  // Attach an asynchronous callback to read the data at our posts reference
  const numberOfUsers = 15;
  const randomIndex = Math.floor(Math.random() * numberOfUsers);

  const [mode, setMode] = useState("Basic");

  return (
    <NativeBaseProvider>
      <Box bg="white" flex="1" safeAreaTop>
        <Basic />
      </Box>
    </NativeBaseProvider>
  );
}

function Basic() {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Afreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujita Mathur",
      timeStamp: "11:11 PM",
      recentText: "A dog cat ",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "A cat dog ",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "A dog ",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "A Cat",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];

  const [listData, setListData] = useState(data);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = ({ item, index }) => (
    <Box>
      <Pressable onPress={() => console.log("You touched me")} bg="white">
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
            <Avatar size="48px" source={{ uri: item.avatarUrl }} />
            <VStack>
              <Text color="coolGray.800" _dark={{ color: "warmGray.50" }} bold>
                {item.fullName}
              </Text>
              <Text color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                {item.recentText}
              </Text>
            </VStack>
            <Spacer />
            <Text
              fontSize="xs"
              color="coolGray.800"
              _dark={{ color: "warmGray.50" }}
              alignSelf="flex-start"
            >
              {item.timeStamp}
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="2">
      <Pressable
        w="70"
        ml="auto"
        cursor="pointer"
        bg="coolGray.200"
        justifyContent="center"
        onPress={() => closeRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack alignItems="center" space={2}>
          <Icon
            as={<Entypo name="dots-three-horizontal" />}
            size="xs"
            color="coolGray.800"
          />
          <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
            More
          </Text>
        </VStack>
      </Pressable>
      <Pressable
        w="70"
        cursor="pointer"
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack alignItems="center" space={2}>
          <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  function CardComponent() {
    const [data, setData] = useState("");
    const [data2, setData2] = useState("");
    var leadsRef = Firebase.database().ref("8/data/0");
    var leadsRefName = Firebase.database().ref("8/data/1/Name");

    leadsRefName.on("value", function (snapshot) {
      snapshot.val();
      // alert(snapshot.val());
      const Name1 = snapshot.val();
      if (data == "") {
        setData(Name1);
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
            What's a cooler name?
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
            >
              <Text>{data}</Text>
            </Button>
            <Button
              size="sm"
              colorScheme="secondary" // onPress={() => console.log('hello world')}
            >
              {" "}
              <Text>{data2}</Text>
            </Button>
          </Flex>
        </Stack>
      </Box>
    );
  }
  return (
    <Box bg="white" safeArea flex="1">
      <NativeBaseProvider>
        <Center mt="200" flex={1} px="3">
          <CardComponent />
        </Center>
      </NativeBaseProvider>
      <Heading mt="350" p="4" pb="3" size="lg">
        My Pets
      </Heading>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </Box>
  );
}
