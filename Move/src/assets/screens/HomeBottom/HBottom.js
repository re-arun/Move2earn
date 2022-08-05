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
import React, { useState } from "react";
import * as Progress from "react-native-progress";
import { IMAGEPATH } from "../../Icon/Icon";

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
const MyShoes = ({ navigation }) => {
  const [check, setCheck] = useState("Shoes");

  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.bgImage}
        source={IMAGEPATH.SPLASH_BACKGROUND}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{ height: height * 0.05 }}></View>

        <View style={styles.v1}>
          <View style={styles.v11}>
            <View>
            <TouchableOpacity onPress={() =>navigation.navigate("Notification")}>

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
          <View style={styles.v14}>
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 22 }}></View>
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

        <View style={{ width: width * 0.9, alignSelf: "center" }}>
          {check == "Shoes" ? (
            <FlatList
              numColumns={2}
              data={image1}
              showsVerticalScrollIndicator={false}
              // horizontal={true}
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableOpacity>
                      <View style={styles.Shoes}>
                        <ImageBackground
                          source={item.ImageBackground}
                          style={{
                            height: 300,
                            width: 233,
                            // justifyContent:'center',
                            // alignItems:"center",
                            alignSelf: "center",
                          }}
                        >
                          <View
                            style={{
                              height: height * 0.2,
                              width: width * 0.4,
                              alignSelf: "center",
                              // backgroundColor:'red',
                              right: 30,
                              top: 40,
                              justifyContent: "center",
                              // backgroundColor:'cyan'
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
                              left: 35,
                            }}
                          >
                            <Image source={item.image} style={{}} />
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-around",
                              height: height * 0.14,
                              width: width * 0.45,
                              alignSelf: "center",
                              top: 30,
                              right: 5,
                              // backgroundColor:'green'
                            }}
                          >
                            <View
                              style={{
                                height: height * 0.14,
                                width: width * 0.25,
                                left: 5,

                                // backgroundColor:'red'
                              }}
                            >
                              <Text style={{ color: "white" }}>
                                {item.text1}
                              </Text>
                            </View>

                            <View
                              style={{
                                height: height * 0.022,
                                right: 10,
                                alignContent: "center",
                                // backgroundColor:'red'
                              }}
                            >
                              <Text style={{ color: "white" }}>
                                {item.text2}
                              </Text>
                            </View>
                            <View>
                              <Text style={{ color: "#1EB808", right: 20 }}>
                                {item.number2}
                              </Text>
                            </View>
                          </View>
                        </ImageBackground>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          ) : (
            <View>
              <FlatList
                numColumns={2}
                data={images2}
                showsVerticalScrollIndicator={false}
                // horizontal={true}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <TouchableOpacity>
                        <View style={styles.Shoes}>
                          <ImageBackground
                            source={item.ImageBackground}
                            style={{
                              height: 300,
                              width: 233,
                              // justifyContent:'center',
                              // alignItems:"center",
                              alignSelf: "center",
                            }}
                          >
                            <View
                              style={{
                                height: height * 0.2,
                                width: width * 0.4,
                                alignSelf: "center",
                                // backgroundColor:'red',
                                right: 15,
                                top: 40,
                                justifyContent: "center",
                                // backgroundColor:'cyan'
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
                              }}
                            >
                              <Image source={item.image} style={{}} />
                            </View>
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                                height: height * 0.14,
                                width: width * 0.45,
                                alignSelf: "center",
                                top: 30,
                                right: 5,
                                // backgroundColor:'green'
                              }}
                            >
                              <View
                                style={{
                                  height: height * 0.14,
                                  width: width * 0.25,
                                  left: 5,

                                  // backgroundColor:'red'
                                }}
                              >
                                <Text style={{ color: "white" }}>
                                  {item.text1}
                                </Text>
                              </View>

                              <View
                                style={{
                                  height: height * 0.022,
                                  right: 10,
                                  alignContent: "center",
                                  // backgroundColor:'red'
                                }}
                              >
                                <Text style={{ color: "white" }}>
                                  {item.text2}
                                </Text>
                              </View>
                              <View>
                                <Text style={{ color: "#1EB808", right: 20 }}>
                                  {item.number2}
                                </Text>
                              </View>
                            </View>
                          </ImageBackground>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
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
    //backgroundColor: "red",
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
    //backgroundColor: 'pink',
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
