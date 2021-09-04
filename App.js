import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Button,
  NativeBaseProvider,
  Box,
  Image,
  Center,
  Icon,
  extendTheme,
} from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import profile from "./assets/pic.jpg";
import email from "./assets/email (1).png";
import phone from "./assets/phone-call.png";
import date from "./assets/date-of-birth.png";
import location from "./assets/pin.png";

function HomeScreen({ navigation }) {
  return (
    <Box bg="darkblue.500" height="100%">
      <NativeBaseProvider>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button
            onPress={() => navigation.navigate("Login")}
            title="Login In!"
          >
            Login In
          </Button>
          <Button
            onPress={() => navigation.navigate("Login")}
            title="Login In!"
          >
            Sign Up
          </Button>
        </View>
      </NativeBaseProvider>
    </Box>
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
        <Button
          onPress={() => navigation.navigate("Profile")}
          title="User Profile"
        />
      </View>
    </NativeBaseProvider>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={profile}
            style={{
              width: 300,
              height: 300,
              borderRadius: 150,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Text style={styles.heading}>John Doe, 22</Text>
          <Text style={styles.heading}>A University Student</Text>
        </View>

        <View style={styles.profile}>
          <View style={styles.info}>
            <Image
              source={email}
              style={{ width: 50, height: 50, marginRight: 50 }}
            />
            <Text style={styles.paragraph}>
              Email Address{"\n"}johndoe@gmail.com
            </Text>
          </View>
          <View style={styles.info}>
            <Image
              source={phone}
              style={{ width: 50, height: 50, marginRight: 50 }}
            />
            <Text style={styles.paragraph}>Phone Number{"\n"}0412356700</Text>
          </View>

          <View style={styles.info}>
            <Image
              source={date}
              style={{ width: 50, height: 50, marginRight: 50 }}
            />
            <Text style={styles.paragraph}>Date of Birth{"\n"}04/08/2002</Text>
          </View>

          <View style={styles.info}>
            <Image
              source={location}
              style={{ width: 50, height: 50, marginRight: 50 }}
            />
            <Text style={styles.paragraph}>Postcode{"\n"}4067</Text>
          </View>
        </View>
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
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
      amber: {
        400: "#d97706",
      },
      lightpink: {
        500: "#F9EEEE",
      },
      darkblue: {
        500: "#535971",
      },
      lightblue: {
        500: "#DADCE8",
      },
      darkpink: {
        500: "#E19D98",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="API" component={APIScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
