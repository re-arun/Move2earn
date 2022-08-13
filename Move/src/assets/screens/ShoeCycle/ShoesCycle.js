import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
  TextComponent,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React, { useState } from "react";
import * as Progress from "react-native-progress";
import { IMAGEPATH } from "../../Icon/Icon";
import { Route, useRoute } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
const image1 = [
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/Shoes/Shoes.png"),
    image: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    text1: "Shoes Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
];

const images2 = [
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },

  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
  {
    ImageBackground: require("../../images/myShoe/Scontainer/Scontainer.png"),
    image1: require("../../images/myShoe/cycle/cycle.png"),
    image: require("../../images/myShoe/CycleShadow/cycleShadow.png"),
    text1: "Cycle Name",
    // number1: "9",
    text2: "Level:",
    number2: " 9",
  },
];
const MyShoes = (props) => {
  const route =useRoute();
  const [check, setCheck] = useState("Shoes");
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.bgImage}
        source={IMAGEPATH.SPLASH_BACKGROUND}
      >
        <StatusBar barStyle="dark-content"></StatusBar>
        <View style={{ height: height * 0.05 }}></View>

        <View style={styles.v1}>
          <View style={styles.v11}>
            <View>
              <TouchableOpacity
               onPress={() => props.navigation.navigate("MyShoes")}
              >
                <Image source={IMAGEPATH.PROFILE_Icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.v12}>
            <View style={styles.a1}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.v121}>
                  <Image
                    source={IMAGEPATH.DOLLAR}
                    style={{ height: 15, width: 15 }}
                  />
                </View>
                <View style={styles.v122}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    30/100
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: "center",
                height: height * 0.01,
                width: width * 0.3,
                // backgroundColor: "indigo",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Progress.Bar
                progress={0.3}
                width={100}
                height={5}
                color="green"
              />
            </View>
          </View>

          <View style={styles.v12}>
            <View style={styles.a1}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.v121}>
                  <Image
                    source={IMAGEPATH.DOLLAR}
                    style={{ height: 15, width: 15 }}
                  />
                </View>
                <View style={styles.v122}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    30/100
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: "center",
                height: height * 0.01,
                width: width * 0.2,
                // backgroundColor: "indigo",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Progress.Bar
                progress={0.3}
                width={100}
                height={5}
                color="green"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: "red",
            height: height * 0.04,
            width: width * 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "green",
              height: height * 0.0015,
              width: width * 0.9,
              alignSelf: "center",
            }}
          ></View>
        </View>
        {/* <View style={{ height: 22, backgroundColor:'green' }}></View> */}
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <TouchableOpacity onPress={() => setCheck("Shoes")}>
              <Text style={{ color: "white" }}>MY SHOES</Text>
            </TouchableOpacity>

            <View style={styles.bar}>
              {check == "Shoes" ? (
                <Image source={IMAGEPATH.GRADBOTTOM} />
              ) : null}
            </View>
          </View>
          <View style={{ height: height * 0.03, width: width * 0.2 }}>
            <TouchableOpacity onPress={() => setCheck("Cycle")}>
              <Text style={{ color: "white" }}>MY CYCLE</Text>
            </TouchableOpacity>
            {check == "Cycle" ? (
              <View style={styles.bar}>
                <Image source={IMAGEPATH.GRADBOTTOM} />
              </View>
            ) : (
              <View style={styles.bar}></View>
            )}
          </View>
        </View>

        <View
          style={{
            width: width * 0.9,
            // backgroundColor: "pink",
            height: height * 0.7,
            // justifyContent: "space-evenly",
            alignSelf: "center",
          }}
        >
          {check == "Shoes" ? (
            <FlatList
              numColumns={2}
              data={image1}
              showsVerticalScrollIndicator={false}
              // horizontal={true}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      width: width * 0.45,
                      height: height * 0.3,
                      justifyContent: "space-evenly",
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 2,
                        borderTopColor: "rgb(199,112,193)",
                        borderRightColor: "rgb(147,182,203)",
                        borderLeftColor: "rgb(147,182,203)",
                        borderBottomColor: "rgb(176,244,165)",
                        borderRadius: 15,
                        alignSelf: "center",
                        shadowColor:"rgba(0, 0, 0, 0.25)",
                     
                      }}
                    >
                    <TouchableOpacity>
                      <LinearGradient
                        colors={[
                          "rgba(255, 255, 255, 0.2)",
                          "rgba(255, 255, 255, 0)",
                          "rgba(0, 0, 0, 0.25);",
                        ]}
                        style={styles.LinearGradien}
                      >
                      <View style={{height:height*0.26,width:width*0.4}}>
                        <View
                          style={{
                            height: height * 0.2,
                            width: width * 0.4,
                       
                            // backgroundColor:'red',
                          
                            justifyContent: "center",
                            
                          }}
                        >
                          <Image
                            source={item.image1}
                            style={{
                              // height: 100,
                              alignSelf: "center",
                              resizeMode: "contain",
                            }}
                          />
                        </View>
                        <View
                          style={{
                            // backgroundColor:'red',
                            left: 20,
                     bottom:30,
                          }}
                        >
                          <Image source={item.image} style={{ resizeMode:'contain',}} />
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            height: height * 0.14,
                            width: width * 0.42,
                            alignSelf: "center",
                      // backgroundColor:'green'
                            
                            // backgroundColor:'green'
                          }}
                        >
                          <View
                            style={{
                              height: height * 0.14,
                              width: width * 0.23,
                              left: 5,

                              // backgroundColor:'red'
                            }}
                          >
                            <Text style={{ color: "white" }}>{item.text1}</Text>
                          </View>

                          <View
                            style={{
                              height: height * 0.022,
                              
                              alignContent: "center",
                              // backgroundColor:'red'
                            }}
                          >
                            <Text style={{ color: "white" }}>{item.text2}</Text>
                          </View>
                          <View>
                            <Text style={{ color: "#1EB808", right: 8 }}>
                              {item.number2}
                            </Text>
                          </View>
                        </View></View>
                      </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          ) : (
            <FlatList
              numColumns={2}
              data={images2}
              showsVerticalScrollIndicator={false}
              // horizontal={true}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      width: width * 0.45,
                      height: height * 0.3,
                      justifyContent: "space-evenly",
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 2,
                        borderTopColor: "rgb(199,112,193)",
                        borderRightColor: "rgb(147,182,203)",
                        borderLeftColor: "rgb(147,182,203)",
                        borderBottomColor: "rgb(176,244,165)",
                        borderRadius: 15,
                        alignSelf: "center",
                      }}
                    >
                    <TouchableOpacity>
                      <LinearGradient
                        colors={[
                          "rgba(255, 255, 255, 0.2)",
                          "rgba(255, 255, 255, 0)",
                          "rgba(0, 0, 0, 0.25);",
                        ]}
                        style={styles.LinearGradien}
                      >
                      <View style={{height:height*0.26,width:width*0.4}}>
                        <View
                          style={{
                            height: height * 0.2,
                            width: width * 0.4,
                       
                            // backgroundColor:'red',
                          
                            justifyContent: "center",
                            
                          }}
                        >
                          <Image
                            source={item.image1}
                            style={{
                              // height: 100,
                              alignSelf: "center",
                              resizeMode: "contain",
                            }}
                          />
                        </View>
                        <View
                          style={{
                            // backgroundColor:'red',
                            // left: 20,
                     bottom:30,
                          }}
                        >
                          <Image source={item.image} style={{ resizeMode:'contain',}} />
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            height: height * 0.14,
                            width: width * 0.42,
                            alignSelf: "center",
                      // backgroundColor:'green'
                            
                            // backgroundColor:'green'
                          }}
                        >
                          <View
                            style={{
                              height: height * 0.14,
                              width: width * 0.23,
                              left: 5,

                              // backgroundColor:'red'
                            }}
                          >
                            <Text style={{ color: "white" }}>{item.text1}</Text>
                          </View>

                          <View
                            style={{
                              height: height * 0.022,
                              
                              alignContent: "center",
                              // backgroundColor:'red'
                            }}
                          >
                            <Text style={{ color: "white" }}>{item.text2}</Text>
                          </View>
                          <View>
                            <Text style={{ color: "#1EB808", right: 8 }}>
                              {item.number2}
                            </Text>
                          </View>
                        </View></View>
                      </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default MyShoes;

const styles = StyleSheet.create({
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
    //backgroundColor:'red',
    alignItems: "center",
    justifyContent: "center",
  },
  Shoes: {
    flexDirection: "row",
    height: height * 0.3,
    width: width * 0.5,
    // marginLeft: width * 0.076,
    backgroundColor: "green",
    justifyContent: "center",
    // alignSelf:'center'
    // alignContent:"center"
    alignItems: "center",
  },
  Cycle: {
    flexDirection: "row",
    height: height * 0.276,
    width: width * 0.51,
    //backgroundColor:'red',
    // justifyContent: 'center',
    alignSelf: "center",
  },
  LinearGradien: {
    // flex: 1,
    height: height * 0.26,
    alignSelf: "center",
    width: width * 0.4,
    borderRadius: 15,
  },
});
