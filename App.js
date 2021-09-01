import * as React from "react";
import { View } from "react-native";
import {
  Button,
  NativeBaseProvider,
  Box,
  Image,
  Center,
  Icon,
} from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => navigation.navigate("Login")} title="Login In!">
          Login In
        </Button>
      </View>
    </NativeBaseProvider>
  );
}

function LoginScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Login In!"
        />
      </View>
    </NativeBaseProvider>
  );
}
function APIScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box
        bg="primary.400"
        p={4}
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Calling Our API!
      </Box>
      <Center
        bg="primary.400"
        _text={{
          color: "white",
          fontWeight: "bold",
        }}
        height={200}
        width={{
          base: 200,
          lg: 400,
        }}
      >
        <Image
          size={150}
          resizeMode={"contain"}
          borderRadius={100}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="Alternate Text"
        />
        <Center w="40px" h="40px" bg="primary.400">
          <Icon as={<MaterialIcons name="pets" />} color="white" size={6} />
        </Center>
      </Center>
    </NativeBaseProvider>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="API" component={APIScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
