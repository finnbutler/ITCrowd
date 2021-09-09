import * as React from "react";
import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import {
  Text,
  Button,
  NativeBaseProvider,
  Box,
  Image,
  Center,
  Icon,
  extendTheme,
  VStack,
  FormControl,
  Input,
} from "native-base";
import { useFormik } from "formik";
import { Formik } from "formik";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import profile from "./assets/pic.jpg";
import email from "./assets/email (1).png";
import phone from "./assets/phone-call.png";
import date from "./assets/date-of-birth.png";
import location from "./assets/pin.png";
import background from "./assets/background.jpg";
import { createGlobalStyle } from "styled-components";
import LoginForm from "./loginForm";
import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
import { marginBottom } from "styled-system";
function HomeScreen({ navigation }) {
  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NativeBaseProvider>
      <ImageBackground source={background} resizeMode="cover" style={{
        justifyContent: "flex-start"
      }}>
        <View style={{ alignItems: "flex-end", marginRight: "200px", marginBottom: "400px" }}>
          <Text color="white" fontSize="80" fontFamily='PaytoneOne_400Regular' marginRight="50px" marginTop="150px">
            Purrrfect Pets
          </Text>
          <Text color="white" fontSize="30" paddingTop="10" textAlign='center' marginRight="120px" fontFamily='PaytoneOne_400Regular' flexShrink="1">
            Match with and adopt a pet {"\n"}that is most suitable for you
          </Text>
          <Button
            mt="3em"
            title="Login In"
            padding="25px 150px"
            borderRadius="30px"
            backgroundColor="#f1c737"
            flex="1"
            marginRight="150px"
            justifyContent="center"
            onPress={() => navigation.navigate("Login")}
          >
            <Text color="#545871" fontFamily='Roboto_400Regular'>Login In</Text>
          </Button>
          <Button
            mt="3em"
            marginRight="150px"
            padding="25px 150px"
            borderRadius="30px"
            backgroundColor="#f1c737"
            flex="1"
            justifyContent="center"
            onPress={() => navigation.navigate("Sign Up")}
            title="Sign Up"
          >
            <Text color="#545871" fontFamily='Roboto_400Regular'>Sign Up</Text>
          </Button>

        </View>
      </ImageBackground>
      <View style={{ backgroundColor: "#bbadc6", width: "auto" }} >
        <Text fontSize="72" textAlign="center" color="white" fontFamily="PaytoneOne_400Regular">Details of Purrrfect Pets</Text>
      </View>
    </NativeBaseProvider>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <Box bg="lightpink.500" height="100%">
      <NativeBaseProvider>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text color="lightblue.500" mt="2em" fontSize="2em">
            Hello! Please tell us a bit about yourself!
          </Text>
          <VStack width="90%" mx={3}>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>
                First Name
              </FormControl.Label>
              <Input
                placeholder="John"
                onChangeText={(value) => setData({ ...formData, name: value })}
              />
              <FormControl.HelperText _text={{ fontSize: "xs" }}>
                Name should contain atleast 3 character.
              </FormControl.HelperText>
              <FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
                Error Name
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>
          <VStack width="90%" mx={3}>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Last Name
              </FormControl.Label>
              <Input
                placeholder="Smith"
                onChangeText={(value) => setData({ ...formData, name: value })}
              />
              <FormControl.HelperText _text={{ fontSize: "xs" }}>
                Name should contain atleast 3 character.
              </FormControl.HelperText>
              <FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
                Error Name
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>
          <VStack width="90%" mx={3}>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Date Of Birth
              </FormControl.Label>
              <Input
                placeholder="John"
                onChangeText={(value) => setData({ ...formData, name: value })}
              />
              <FormControl.HelperText _text={{ fontSize: "xs" }}>
                Name should contain atleast 3 character.
              </FormControl.HelperText>
              <FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
                Error Name
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>
          <VStack width="90%" mx={3}>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Phone
              </FormControl.Label>
              <Input
                placeholder="John"
                onChangeText={(value) => setData({ ...formData, name: value })}
              />
              <FormControl.HelperText _text={{ fontSize: "xs" }}>
                Name should contain atleast 3 character.
              </FormControl.HelperText>
              <FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
                Error Name
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>
          <VStack width="90%" mx={3}>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
              <Input
                placeholder="John"
                onChangeText={(value) => setData({ ...formData, name: value })}
              />
              <FormControl.HelperText _text={{ fontSize: "xs" }}>
                Name should contain atleast 3 character.
              </FormControl.HelperText>
              <FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
                Error Name
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>
          <VStack width="90%" mx={3}>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>City</FormControl.Label>
              <Input
                placeholder="John"
                onChangeText={(value) => setData({ ...formData, name: value })}
              />
              <FormControl.HelperText _text={{ fontSize: "xs" }}>
                Name should contain atleast 3 character.
              </FormControl.HelperText>
              <FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
                Error Name
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>
        </View>
      </NativeBaseProvider>
    </Box>
  );
}
function LogInScreen({ navigation }) {
  return <LoginForm />;
}

function ProfileScreen({ navigation }) {
  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={profile}
            alt="logo"
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
const styles = StyleSheet.create({
  logo: {
    paddingTop: 20,
    justifyContent: 'center',
    backgroundColor: '#bbadc6',
    width: 'auto',
    paddingBottom: 20,

  },
  container: {
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'PaytoneOne_400Regular',
    color: '#FFFFFF',
    paddingTop: 25,
  },
  paragraph: {
    fontSize: 17,
  },
  profile: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  info: {
    fontFamily: 'Roboto_400Regular',
    flexDirection: 'row',
    textAlign: 'left',
    padding: 30,
    width: 700,
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#89CFF0',
  },
});
function AboutAdpoting({ navigation }) {
  return (
    <Box
      bg="darkblue.500"
      color="lightblue.500"
      height="100%"
      overflowY="hidden"
    >
      <NativeBaseProvider>
        <View
          style={{ sflex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text color="white" mt="2em" fontSize="3em">
            Let's learn about adopting!
          </Text>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Understanding requirements"
          >
            Understanding requirements
          </Button>

          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="What to expect"
          >
            What to expect
          </Button>

          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Emergencies"
          >
            Emergencies
          </Button>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="How to train"
          >
            How to train
          </Button>

          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Medical help"
          >
            Medical help
          </Button>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Community support"
          >
            Community support
          </Button>
        </View>
      </NativeBaseProvider>
    </Box>
  );
}
function Quiz({ navigation }) {
  return (
    <Box bg="darkblue.500" height="100%">
      <NativeBaseProvider>
        <Text color="white" textAlign="center" mt="1.5em" fontSize="3em">
          Purrrfect Match Game{" "}
        </Text>
        <View
          style={{
            sflex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size={"xl"}
          />
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size={"xl"}
          />
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size={"xl"}
          />
        </View>
        <View
          style={{
            sflex: 1,
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Medical help"
          >
            Clubbing
          </Button>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Medical help"
          >
            At Home
          </Button>
          <Button
            mt="2em"
            padding="1em 5em"
            borderRadius="30px"
            backgroundColor="black"
            onPress={() => navigation.navigate("")}
            title="Medical help"
          >
            With Friends
          </Button>
        </View>
      </NativeBaseProvider>
    </Box>
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
          <Drawer.Screen name="Sign Up" component={SignUpScreen} />
          <Drawer.Screen name="Log In" component={LogInScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="About Adopting" component={AboutAdpoting} />
          <Drawer.Screen name="Quiz" component={Quiz} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
