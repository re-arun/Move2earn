import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
 FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IMAGEPATH } from "../../Icon/Icon";
import { color } from "react-native-reanimated";
import Dashboard from "../Dashboard/Dashboard";
import Genderr from "../SelectGender/SelectGender";
import MyShoes from "./HBottom";
import ShoeDetials from "../Details/ShoeDetials";
const { height, width } = Dimensions.get("screen");

const Running = [
  {
    ImageBackground: IMAGEPATH.FSQURECONTAINER,
    shoes: IMAGEPATH.SHOES,
    left: IMAGEPATH.RIGHTICON,
    date: "10 jun",
    distance: "2.3 KM",
    time: "00:03:31",
    speed: "0.7 km/h",
  },
  {
    ImageBackground: IMAGEPATH.FSQURECONTAINER,
    shoes: IMAGEPATH.SHOES,
    left: IMAGEPATH.RIGHTICON,
    date: "10 jun",
    distance: "2.3 KM",
    time: "00:03:31",
    speed: "0.7 km/h",
  },
  {
    ImageBackground: IMAGEPATH.FSQURECONTAINER,
    shoes: IMAGEPATH.SHOES,
    left: IMAGEPATH.RIGHTICON,
    date: "10 jun",
    distance: "2.3 KM",
    time: "00:03:31",
    speed: "0.7 km/h",
  },
  {
    ImageBackground: IMAGEPATH.FSQURECONTAINER,
    shoes: IMAGEPATH.SHOES,
    left: IMAGEPATH.RIGHTICON,
    date: "10 jun",
    distance: "2.3 KM",
    time: "00:03:31",
    speed: "0.7 km/h",
  },
];

const Cycling = [
  {
    ImageBackground: IMAGEPATH.FSQURECONTAINER,
    cycle: IMAGEPATH.CYCLE,
    left: IMAGEPATH.RIGHTICON,
    date: "10 jun",
    distance: "2.3 KM",
    time: "00:03:31",
    speed: "0.7 km/h",
  },
  {
    ImageBackground: IMAGEPATH.FSQURECONTAINER,
    shoes: IMAGEPATH.SHOES,
    left: IMAGEPATH.RIGHTICON,
    date: "10 jun",
    distance: "2.3 KM",
    time: "00:03:31",
    speed: "0.7 km/h",
  },
  {
    ImageBackground: IMAGEPATH.FSQURECONTAINER,
    shoes: IMAGEPATH.SHOES,
    left: IMAGEPATH.RIGHTICON,
    date: "10 jun",
    distance: "2.3 KM",
    time: "00:03:31",
    speed: "0.7 km/h",
  },
];

const Walking = [
  {
    ImageBackground: IMAGEPATH.FSQURECONTAINER,
    shoes: IMAGEPATH.WALKING_ICON,
    left: IMAGEPATH.RIGHTICON,
    date: "10 jun",
    distance: "2.3 KM",
    time: "00:03:31",
    speed: "0.7 km/h",
  },
];

const Bottom = ({ navigation }) => {
  const [check, setCheck] = useState("Running");

  return (
    <SafeAreaView>
      <ImageBackground
        source={IMAGEPATH.SPLASH_BACKGROUND}
        style={{ height: height , width: width}}
      >

      
       
  
       
        
                         
      
        <View>
          {check == "Running" ? (
            <View style={{height:height*0.8, width:width*1}}>
            
             <Dashboard />
             
            </View>
          ) : check == "Cycling" ? (
            <View style={{height:height*0.8, width:width*1}}>
            <ShoeDetials />
            
            </View>
          ) : (
            <View style={{height:height*0.8, width:width*1}}>
             <MyShoes/>
            </View>
          )}
        </View>
   
        <ImageBackground source={IMAGEPATH.BOTTOMTAB} style={{height:height*0.1, width:width*1, }} >
        <View style={{ flexDirection: "row", justifyContent: "space-around"  }}>
          <View style={{ height: height * 0.15, width: width * 0.2 , justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={() => setCheck("Running")}>
              <Image  source={IMAGEPATH.BI1}/>
            </TouchableOpacity>
            {check == "Running" ? (
              <View style={styles.bar}>
             
              </View>
            ) : (
              <View style={styles.bar}></View>
            )}
          </View>
          <View style={{ height: height * 0.15, width: width * 0.2 ,justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={() => setCheck("Cycling")}>
            <Image source={IMAGEPATH.BI2C} />
            <Image  source={IMAGEPATH.BI2} style={{position:"absolute", alignSelf:'center', top:20,}}/>
            </TouchableOpacity>
            {check == "Cycling" ? (
              <View style={styles.bar}>
              
              </View>
            ) : (
              <View style={styles.bar}></View>
            )}
          </View>
          <View style={{ height: height * 0.15, width: width * 0.2 ,justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={() => setCheck("Walking")}>
            <Image  source={IMAGEPATH.BI3}/>
            </TouchableOpacity>

            <View style={styles.bar}>
              {check == "Walking" ? (
                <View style={styles.bar}>
              
              </View>
              ) : null}
            </View>
          </View>
        </View>
</ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  FIMD: { height: height * 0.13, width: width * 1,  },
  FlatView: {
    height: height * 0.13,
    width: width * 0.9,
    // backgroundColor: "green",
    alignSelf: "center",
  },
  FlatView2: {
    height: height * 0.13,
    width: width * 0.9,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  FShoeView: {
    // backgroundColor: "cyan",
    width: width * 0.25,
    height: height * 0.1,
  },
  FItemContainer: {
    alignSelf: "center",
    height: height * 0.1,
    width: width * 0.4,
  },
  FTextView: {
    // backgroundColor: "red",
    width: width * 0.15,
    height: height * 0.1,
    justifyContent: "space-between",
  },
  FSpeedView: {
    // backgroundColor: "pink",
    width: width * 0.2,
    height: height * 0.1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  FRArrowView: {
    // backgroundColor: "red",
    width: width * 0.2,
    height: height * 0.1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  safe: {
    height: height * 0.01,
    width: width * 1,
    backgroundColor: "white",
  },
  main: {
    height: height * 1,
    width: width * 0.8,
    //backgroundColor: 'brown',
  },
  image: {
    height: 44,
    width: 54,
  },
  v1: {
    height: height * 0.12,
    width: width * 1,
    // backgroundColor: "green",
    flexDirection: "row",
  },
  v11: {
    height: height * 0.09,
    width: width * 0.16,
    //  backgroundColor: 'yellow',
    // alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  v12: {
    height: height * 0.08,
    width: width * 0.426,
    // backgroundColor: 'pink',
  },

  a1: {
    height: height * 0.07,
    width: width * 0.3,
    // backgroundColor:'green',
    alignSelf: "center",
    justifyContent: "center",
  },

  bgImage: {
    height: height * 1,
    width: width * 1,
  },
  v121: {
    backgroundColor: "white",

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 30,
    width: 30,
  },

  v122: {
    height: height * 0.03,
    width: width * 0.2,
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    height: height * 0.04,
    width: width * 0.19,
    // backgroundColor:'red',
    alignItems: "center",
    justifyContent: "center",
  },
  Shoes: {
    flexDirection: "row",
    height: height * 0.27,
    width: width * 0.48,
    // marginLeft: width * 0.076,
    // backgroundColor: "green",
    justifyContent: "space-evenly",
    // alignSelf:'center'
    // alignContent:"center"
  },
  Cycle: {
    flexDirection: "row",
    height: height * 0.276,
    width: width * 0.51,
    //backgroundColor:'red',
    // justifyContent: 'center',
    alignSelf: "center",
  },
});
