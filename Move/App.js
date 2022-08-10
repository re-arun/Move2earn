import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";
import React, { useState } from "react";
import { IMAGEPATH } from "./src/assets/Icon/Icon";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Genderr from "./src/assets/screens/SelectGender/SelectGender";
import Notification from "./src/assets/screens/Notification/Notification";
import MyShoes from "./src/assets/screens/ShoeCycle/ShoesCycle";
import Home from "./src/assets/screens/Dashboard/Home";
import ShoeDetials from "./src/assets/screens/Details/ShoeDetials";
import Sportlog from "./src/assets/screens/SportLog/Sportlog";
import Gender from "./src/assets/screens/HomeBottom/BottomT";
import Bottom from "./src/assets/screens/HomeBottom/bottomHome";
const { height, width } = Dimensions.get("screen");

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function Move(props) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Gender"
      >
    
      
        {/* <Stack.Screen name="Modall" component={SelectGender} /> */}
      
        {/* <Stack.Screen
          name="Genderr"
          component={Genderr}
          
        /> */}
           
           <Stack.Screen
          name="Gender"
          component={Gender}
          
        />
    
         <Stack.Screen
          name="Notification"
          component={Notification}
         
        />
       
        <Stack.Screen
          name="Home"
          component={Home}
        
        />
            <Stack.Screen
          name="MyShoes"
          component={MyShoes}
        
        />
       
          <Stack.Screen
          name="ShoeDetails"
          component={ShoeDetials}
         
        />
          <Stack.Screen
          name="SportLog"
          component={Sportlog}
         
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Move;
const styles = StyleSheet.create({
  textStyle: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "400",
    // textAlign:"center"
  },
  textStyle3: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "center",
  },
  textStyle1: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  FIrstNUmber: {
    height: height * 0.07,
    width: width * 0.15,
    // borderWidth: 1,
    alignSelf: "center",
  },
  FIrstNUmber1: {
    height: height * 0.05,
    width: width * 0.1,
    // borderWidth: 1,
    alignSelf: "center",
  },
  FIrstNUmber2: {
    height: height * 0.07,
    width: width * 0.03,
    // borderWidth: 1,
    alignSelf: "center",
  },
  heightMainView: {
    height: height * 0.08,
    // borderWidth: 1,
    width: width * 0.6,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bgView: {
    height: height * 0.25,
    //  borderWidth:1,
    width: width * 0.7,
    alignSelf: "center",
    justifyContent: "center",
  },

  firstButton: {
    height: height * 0.03,
    // borderWidth:1,
    width: width * 0.15,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonmainView: {
    height: height * 0.09,
    // borderWidth:1,
    width: width * 0.45,
    alignSelf: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  buttonmainView1: {
    height: height * 0.08,
    // borderWidth:1,
    width: width * 0.45,
    alignSelf: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  borderStyle: {
    //resizeMode: 'contain',
    height: 69,
    width: 330,
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
  },
  loginTextView: {
    height: height * 0.04,
    width: width * 0.4,
    // borderWidth: 1,
    alignSelf: "center",
    // justifyContent:'center'
  },
  loginTextStyle: {
    fontSize: 20,
    color: "#FFFFFF",
    // fontFamily: 'Sen-regular',
    textAlign: "center",
    fontWeight: "700",
  },
  loginButtonVIew: {
    height: height * 0.1,
    width: width * 0.88,
    //  borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  loginButtonVIew1: {
    height: height * 0.08,
    width: width * 0.85,
    //  borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  radio: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  img1: {
    height: height * 0.39,
    width: width * 0.45,

    justifyContent: "center",
    alignSelf: "center",

    // borderRadius: 15,
    // borderWidth: 0.49,
    borderColor: "grey",
    //  resizeMode: 'contain',
    alignItems: "center",
  },
  img: {
    height: height * 0.35,
    width: width * 0.43,
    justifyContent: "center",
    alignSelf: "center",
    // borderRadius: 15,
    // borderWidth: 0.49,
    borderColor: "grey",
    alignItems: "center",
    // backgroundColor:'green',
    resizeMode: "contain",
  },
  btn1: {
    height: height * 0.25,
    width: width * 0.46,
    alignContent: "center",
    // alignSelf:'center',
    justifyContent: "center",
    //borderRadius: 95
  },
  btn2: {
    // flexDirection: 'row',
    alignItems: "center",
    //  backgroundColor: 'black',
    height: height * 0.25,
    width: width * 0.46,
    alignSelf: "center",
    // justifyContent: 'center'
  },
  image: {
    // backgroundColor:'yellow',
    height: height * 0.29,
    width: width * 0.3,
    justifyContent: "center",
    //borderWidth:2,
    borderColor: "grey",
    resizeMode: "contain",
    alignItems: "center",
    alignSelf: "center",
    // alignItems:"flex-end"
  },
  image1: {
    // backgroundColor:'green',
    height: height * 0.25,
    width: width * 0.4,
    justifyContent: "center",
    //borderWidth:2,
    borderColor: "grey",
    // resizeMode: 'contain',
    alignSelf: "center",
  },
  btn: {
    flexDirection: "row",
    // alignItems: 'center',
    // backgroundColor:'blue',
    height: height * 0.07,
    width: width * 0.99,
    // alignSelf:'center',
    // justifyContent:'center'
    justifyContent: "space-evenly",
  },
  headingTextView: {
    // borderWidth: 1,
    borderColor: "white",
    height: height * 0.08,
    width: width * 0.7,
    alignSelf: "center",
  },
  headingTextView1: {
    // borderWidth: 1,
    borderColor: "white",
    height: height * 0.08,
    width: width * 0.92,
    alignSelf: "center",
  },
  paraTextView: {
    //  borderWidth: 1,
    borderColor: "white",
    height: height * 0.06,
    width: width * 0.75,
    alignSelf: "center",
  },
  textColor1: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
    // fontFamily: 'Sen-regualr',
    lineHeight: 23,
    textAlign: "center",
  },
  textColor: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    // fontFamily: 'Saira SemiCondensed-regular',
    textAlign: "center",
  },
  ProgressViewMain: {
    alignSelf: "center",
    height: height * 0.65,
    width: width * 0.99,
    // borderWidth: 1,
    borderColor: "white",
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    // justifyContent:'center'
  },
  ImageBackground: {
    height: "100%",
    width: "100%",
  },
  fakeVIew3: {
    height: height * 0.04,
    // backgroundColor:'red'
  },
  fakeVIew2: {
    height: height * 0.09,
    // backgroundColor:'green'
  },
  backView: {
    height: height * 0.04,
    width: width * 0.15,
    // borderWidth:1,
    borderColor: "white",
    alignItems: "center",
  },
  fakeVIew1: {
    height: height * 0.12,
    // backgroundColor:'cyan',
  },
  StepContainer: {
    flexDirection: "row",
    // backgroundColor: 'yellow',
    width: width * 0.9,
    justifyContent: "center",
    alignSelf: "center",
  },
});
