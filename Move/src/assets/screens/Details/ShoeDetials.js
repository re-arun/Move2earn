import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import * as Progress from "react-native-progress";
import { IMAGEPATH } from "../../Icon/Icon";
import { SafeAreaView } from "react-native-safe-area-context";
const { height, width } = Dimensions.get("screen");
const attr = [
  {
    // image: require("../../images/ShowDetails/RedRec/RedRec.png"),
    image:IMAGEPATH.RED,
    text1: "Strength",
    color: "#CAE823",
    progress: require("../../images/myShoe/shoesshadow/shoesshadow.png"),
    number2: "0.3",

    number: " 9",
  },
  {
    // image: require("../../images/ShowDetails/RedRec/RedRec.png"),
    image:IMAGEPATH.GREEN,
    text1: "Luck",

    
    number2: "0.3",
    color:"#23D0E8",
    number: " 9",
  },
  {
    image:IMAGEPATH.ORANGE,
    text1: " Enduring",

   
    number2: "0.3",
    color:"#A787EC",
    number: " 9",
  },
  {
    image:IMAGEPATH.PINK,
    // imagee:IMAGEPATH.ATTCONTAINER,
    text1: "Beauty ",

    
    number2: "0.3",
    color:"#E86A23",
    number: " 9",
  },
  {
    image:IMAGEPATH.SKYBLUE,
    text1: "Comfort",
    color:"#DAA49C",
  
    number2: "0.3",

    number: " 9",
  },

];

const ShoeDetials = ({ navigation }) => {
  const { prog, setProg } = useState();
  return (
    <SafeAreaView style={{ height: height, width: width }}>
      <ImageBackground
        source={IMAGEPATH.SPLASH_BACKGROUND}
        style={{ height: height * 1, width: width * 1 }}
      >
        <ScrollView>
          <View
            style={{
              height: height * 1,
              width: width * 0.9,
              alignSelf: "center",
              // backgroundColor: "red",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
              <View style={{ height: height * 0.05, justifyContent: "center" }}>
                <Image source={IMAGEPATH.LEFT} />
              </View>
            </TouchableOpacity>
            <View
              style={{
                height: height * 0.37,
                width: width * 0.9,
                // backgroundColor: "green",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ left: 20 }}>
                <Image source={IMAGEPATH.BIGSHOES} />
              </View>
              <View style={{ width: 93, bottom: 30, left: 70 }}>
                <Image source={IMAGEPATH.BIGSHOESS} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "700",
                      fontSize: 18,
                      lineHeight: 23,
                    }}
                  >
                    SHOES-1
                  </Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <View>
                      <Image source={IMAGEPATH.BUTTON_RADIUS} />
                      <View
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          top: 13,
                        }}
                      >
                        <Text style={{ color: "white" }}>USE NOW</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Level */}
            <View
              style={{
                height: height * 0.2,
                width: width * 0.9,
                //   backgroundColor: "red",
                alignSelf: "center",
              }}
            >
              <ImageBackground
                source={IMAGEPATH.LEVCONTAINER}
                style={{
                  height: height * 0.2,
                  width: width * 1,
                  ImageResize: "contain",
                  alignSelf: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: height * 0.09,
                    // backgroundColor: "red",
                    width: width * 0.8,
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 30,
                      width: 83,
                      backgroundColor: "#EF5DA8",
                      borderRadius: 50,
                    }}
                  >
                    <View style={{ top: 5 }}>
                      <Text style={{ color: "white", textAlign: "center" }}>
                        Rank A
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 30,
                      width: 83,
                      backgroundColor: "#7879F1",
                      borderRadius: 50,
                    }}
                  >
                    <View style={{ top: 5 }}>
                      <Text style={{ color: "white", textAlign: "center" }}>
                        Flash
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 30,
                      width: 83,
                  
                    }}
                  ><Progress.Bar
                    progress={0.7}
                    width={83}
                    height={30}
                    color={"#3BD0C7"}
                    borderRadius={50}
                    indeterminate={true}
                  />

                    <View style={{  position:'absolute', alignSelf:'center', top:8}}>
                      <Text style={{ color: "white", textAlign: "center" , }}>
                        87/100
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    top: 5,
                    height: height * 0.05,
                    width: width * 0.8,
                    alignSelf: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // backgroundColor:'red'
                  }}
                >
                  <View>
                    <Text style={{ color: "white" }}>Level :</Text>
                  </View>
                  <View>
                    <Text style={{ color: "white" }}>9/30</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: height * 0.05,
                    width: width * 0.8,
                    alignSelf: "center",
                  }}
                >
                  <Progress.Bar
                    progress={0.4}
                    width={width * 0.8}
                    height={height * 0.012}
                    color={"#C5E224"}
                  />
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                height: height * 0.4,
                width: width * 0.9,
                // backgroundColor: "red",
                alignSelf: "center",
              }}
            >
              <ImageBackground
                source={IMAGEPATH.ATTCONTAINER}
                style={{
                  height: height * 0.4,
                  width: width * 1,
                  ImageResize: "contain",
                  alignSelf: "center",
                  //   justifyContent:'flex-end'
                  bottom: 50,
                }}
              >
                <View
                  style={{
                    height: height * 0.09,
                    width: width * 0.8,
                    alignSelf: "center",
                    // backgroundColor:'green'
                  }}
                ></View>
                <View
                  style={{
                    height: height * 0.04,
                    width: width * 0.8,
                    alignSelf: "center",
                    // backgroundColor: "green",
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Attributes
                  </Text>
                </View>

                {/* Flatlist */}

                <FlatList
                  data={attr}
                  showsVerticalScrollIndicator={false}
                  // horizontal={true}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{
                          // backgroundColor: "red",
                          height: height * 0.045,
                          width: width * 0.8,
                          alignSelf: "center",
                          // left:20,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            // backgroundColor: "green",
                            // alignSelf: "center",
                          }}
                        >
                          <View>
                            <Image source={item.image} />
                          </View>
                          <View>
                            <Text
                              style={{
                                color: "white",
                                fontSize: 12,
                                fontWeight: "400",
                              }}
                            >
                              {item.text1}
                            </Text>
                          </View>
                          <View> 
                            <Progress.Bar
                              progress={item.number2}
                              width={width * 0.55}
                              height={height * 0.012}
                              // style={{backgroundColor:'red'}}
                              color={item.color}
                            />
                          </View>
                          <View>
                            <Text
                              style={{
                                color: "white",
                                fontSize: 12,
                                fontWeight: "400",
                              }}
                            >
                              {item.number2}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ShoeDetials;

const styles = StyleSheet.create({
  borderStyle: {
    //resizeMode: 'contain',
    width: 102,
    height: 45,

    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    borderRadius: 100,
  },
  loginTextView: {
    height: height * 0.04,
    width: width * 0.4,
    // borderWidth: 1,
    alignSelf: "center",
    // justifyContent:'center'
    // backgroundColor:'red'
  },
  loginTextStyle: {
    fontSize: 14,
    color: "#FFFFFF",
    // fontFamily: 'Sen-regular',
    textAlign: "center",
    fontWeight: "700",
  },
});
