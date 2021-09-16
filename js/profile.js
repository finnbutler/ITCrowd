import React from 'react';
import { ImageBackground,Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Image} from "native-base";
import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
import profile from "../assets/pic.jpg";
import email from "../assets/email (1).png";
import phone from "../assets/phone-call.png";
import date from "../assets/date-of-birth.png";
import location from "../assets/pin.png";

const ProfileScreen = () => {

let [fontsLoaded, error] = useFonts({
  Roboto_400Regular,
  PaytoneOne_400Regular
})
if (!fontsLoaded) {
  return <AppLoading />
}
return (
  <NativeBaseProvider>
      <View style={styles.logo}>
      <ImageBackground
      source={profile}
      resizeMode="cover"
      imageStyle= 
{{opacity:0.5}}
      >
        <Image
          source={profile}
          alt="logo"
          style={{
            width: 300,
            height: 300,
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
        <Text style={styles.heading}>John Doe, 22</Text>
        <Text style={styles.heading}>A University Student</Text>
        </ImageBackground>
      </View>
      <View style={styles.profile}>
        <View style={{flexDirection:'column', borderRadius: 10, marginTop: 40, marginBottom: 40}}>
        <View style={styles.info}>
          <Image
            source={email}
            style={{ width: 50, height: 50, marginRight: 100 }}
          />
          <Text style={styles.paragraph}>
            Email Address{"\n"}johndoe@gmail.com
          </Text>
        </View>
        <View style={styles.info}>
          <Image
            source={phone}
            style={{ width: 50, height: 50, marginRight: 100}}
          />
          <Text style={styles.paragraph}>Phone Number{"\n"}0412356700</Text>
        </View>
        <View style={styles.info}>
          <Image
            source={date}
            style={{ width: 50, height: 50, marginRight: 100}}
          />
          <Text style={styles.paragraph}>Date of Birth{"\n"}04/08/2002</Text>
        </View>
        <View style={styles.info}>
          <Image
            source={location}
            style={{ width: 50, height: 50, marginRight: 100}}
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
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  width: 'auto',
  
},
heading: {
  textAlign: 'center',
  fontFamily: 'PaytoneOne_400Regular',
  color: 'white',
  paddingTop: 25,
  fontSize: 25,
  marginBottom: 30,
},
paragraph: {
  textAlign: 'left',
  fontSize: 20,
  color: '#545871',
},
profile: {
  backgroundColor: '#e8e9ed',
  alignItems: 'center',
  justifyContent: 'center',
},
info: {
  justifyContent: 'flex-start',
  fontFamily: 'Roboto_400Regular',
  flexDirection: 'row',
  padding: 30,
  width: 700,
  borderBottomWidth: 2,
  borderBottomColor: '#e8e9ed',
  backgroundColor: '#ffffff',
},
});
export default ProfileScreen;