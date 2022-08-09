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
import LinearGradient from "react-native-linear-gradient";
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
    shoes: IMAGEPATH.CYCLE,
    left: IMAGEPATH.RIGHTICON,
    date: "10 jun",
    distance: "2.3 KM",
    time: "00:03:31",
    speed: "0.7 km/h",
  },
  {
    ImageBackground: IMAGEPATH.FSQURECONTAINER,
    shoes: IMAGEPATH.CYCLE,
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

const Sporting = ({ navigation }) => {
  const [check, setCheck] = useState("Running");

  return (
    <SafeAreaView>
      <ImageBackground
        source={IMAGEPATH.SPLASH_BACKGROUND}
        style={{ height: height, width: width }}
      >
        <View
          style={{
            height: height * 0.1,
            width: width * 0.9,
            // backgroundColor: "red",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: width * 0.32, alignSelf: "center" }}>
              <Image source={IMAGEPATH.LEFTICON} />
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "700",
                  lineHeight: 34.5,
                  fontSize: 22,
                }}
              >
                Sport Log
              </Text>
            </View>
          </View>
        </View>
        {/* First Container */}
        <View
          style={{
            height: height * 0.2,
            width: width * 0.9,
            // backgroundColor: "red",
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              borderWidth: 3,
              borderTopColor: "rgb(199,112,193)",
              borderRightColor: "rgb(147,182,203)",
              borderLeftColor: "rgb(147,182,203)",
              borderBottomColor: "rgb(176,244,165)",
              borderRadius: 15,
              alignSelf: "center",
            }}
          >
            <LinearGradient
              colors={["#2B2F2F", "#2B2F2F"]}
              style={{
                height: height * 0.18,
                alignSelf: "center",
                width: width * 0.4,
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  height: height * 0.1,
                  //   backgroundColor: "green",
                  flexDirection: "row",
                  width: width * 0.45,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 35,
                    fontWeight: "700",
                    textAlign: "center",
                    fontFamily: "sen-Regular",
                  }}
                >
               7.2
                </Text>
                <Text style={{ color: "white", lineHeight: 23, fontSize: 10, fontFamily: "sen-Regular", }}>
                 
                 Km
                </Text>
              </View>
              <View
                style={{
                  width: width * 0.42,
                  height: height * 0.05,
                  //   backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    lineHeight: 23,
                    fontSize: 16,
                    fontFamily: "sen-Regular",
                  }}
                >
                  Total Kms
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              borderWidth: 3,
              borderTopColor: "rgb(199,112,193)",
              borderRightColor: "rgb(147,182,203)",
              borderLeftColor: "rgb(147,182,203)",
              borderBottomColor: "rgb(176,244,165)",
              borderRadius: 15,
              alignSelf: "center",
            }}
          >
            <LinearGradient
              colors={["#2B2F2F", "#2B2F2F"]}
              style={{
                height: height * 0.18,
                alignSelf: "center",
                width: width * 0.4,
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  height: height * 0.1,
                  //   backgroundColor: "green",
                  flexDirection: "row",
                  width: width * 0.45,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 35,
                    fontWeight: "700",
                    textAlign: "center",
                    fontFamily: "sen-Regular",
                  }}
                >
                  34
                </Text>
                <Text style={{ color: "white", lineHeight: 23, fontSize: 10, fontFamily: "sen-Regular", }}>
                  time
                </Text>
              </View>
              <View
                style={{
                  width: width * 0.42,
                  height: height * 0.05,
                  //   backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    lineHeight: 23,
                    fontSize: 16,
                    fontFamily: "sen-Regular",
                  }}
                >
                  Total Run
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View
          style={{
            height: height * 0.14,
            width: width * 0.9,
            alignSelf: "center",
            // backgroundColor:'red',
            justifyContent:'center'
          }}
        >
          <View
            style={{
              borderWidth: 3,
              borderTopColor: "rgb(199,112,193)",
              borderRightColor: "rgb(147,182,203)",
              borderLeftColor: "rgb(147,182,203)",
              borderBottomColor: "rgb(176,244,165)",
              borderRadius: 15,
              alignSelf: "center",
            }}
          >
            <LinearGradient
              colors={["#2B2F2F", "#2B2F2F"]}
              style={{
                height: height * 0.12,
                alignSelf: "center",
                width: width * 0.9,
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  //   backgroundColor: "red",
                  height: height * 0.12,
                  width: width * 0.9,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: width * 1,
                    height: height * 0.12,
                    // justifyContent: "center",
                    // backgroundColor: "green",
                  }}
                >
                  <View
                    style={{
                      height: height * 0.1,
                      width: width * 0.5,
                      flexDirection: "row",
                      //   backgroundColor: "yellow",
                      //   justifyContent:'center'
                      left: 50,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "700",
                        fontSize: 35,
                        lineHeight: 34,
                        color: "white",
                        fontFamily: "sen-Regular",
                      }}
                    >
                      02.20
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "400",
                        fontSize: 10,
                        lineHeight: 23,
                        color: "white",
                      }}
                    >
                      Hour
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: 23,
                        color: "white",
                        fontFamily:"sen-Regular"
                      }}
                    >
                      Total Time
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", top:10, height:height*0.1,  alignItems:'center'}}>
          <View style={{ height: height * 0.03, width: width * 0.2,  }}>
            <TouchableOpacity onPress={() => setCheck("Running")}>
              <Text style={{color: check === "Running" ? "green" : "white" ,fontFamily:'SairaSemiCondensed-Regular', fontSize:20, fontWeight:'700', lineHeight:23}}>
                Running
              </Text>
            </TouchableOpacity>
            {check == "Running" ? (
              <View style={styles.bar}>
                <View
                  style={{
                    borderColor: "green",
                    borderWidth: 2,
                    width: width * 0.3,
                  }}
                ></View>
              </View>
            ) : (
              <View style={styles.bar}></View>
            )}
          </View>
          <View style={{ height: height * 0.03, width: width * 0.2 }}>
            <TouchableOpacity onPress={() => setCheck("Cycling")}>
              <Text style={{ color: check === "Cycling" ? "green" : "white" ,fontFamily:'SairaSemiCondensed-Regular', fontSize:20, fontWeight:'700', lineHeight:23}}>
                Cycling
              </Text>
            </TouchableOpacity>
            {check == "Cycling" ? (
              <View style={styles.bar}>
                <View
                  style={{
                    borderColor: "green",
                    borderWidth: 2,
                    width: width * 0.3,
                  }}
                ></View>
              </View>
            ) : (
              <View style={styles.bar}></View>
            )}
          </View>
          <View style={{ height: height * 0.03, width: width * 0.2,  }}>
            <TouchableOpacity onPress={() => setCheck("Walking")}>
              <Text style={{color: check === "Walking" ? "green" : "white" ,fontFamily:'SairaSemiCondensed-Regular', fontSize:20, fontWeight:'700', lineHeight:23}}>
               Walking
              </Text>
            </TouchableOpacity>
            {check == "Walking" ? (
              <View style={styles.bar}>
                <View
                  style={{
                    borderColor: "green",
                    borderWidth: 2,
                    width: width * 0.3,
                  }}
                ></View>
              </View>
            ) : (
              <View style={styles.bar}></View>
            )}
          </View>
        </View>

        <View>
          {check == "Running" ? (
            <View style={{ height: height * 0.9, width: width * 1 }}>
              <View
                style={{
                  width: width * 0.9,
                  height: height * 0.08,
                  justifyContent: "center",
                  alignSelf: "center",
                  
                  
                }}
              >
                <Text
                  style={{
                    color: "white",
                    lineHeight: 23,
                    fontWeight: "700",
                    fontSize: 20,
                    fontFamily:'SairaSemiCondensed-Regular'
                  }}
                >
                  Sport Log
                </Text>
              </View>

              <View
                style={{
                  // backgroundColor: "red",
                  height: height * 0.4,
                  width: width * 0.97,
                }}
              >
                <FlatList
                  data={Running}
                  showsVerticalScrollIndicator={false}
                  horizontal={false}
                  renderItem={({ item }) => {
                    return (
                      <View style={{}}>
                        <View style={{ height: height * 0.01 }}></View>
                        <ImageBackground
                          source={IMAGEPATH.FLATCONTAINER}
                          style={styles.FIMD}
                        >
                          <TouchableOpacity>
                            <View style={styles.FlatView}>
                              <View style={styles.FlatView2}>
                                <View style={styles.FShoeView}>
                                  <Image
                                    source={item.ImageBackground}
                                    style={styles.FItemContainer}
                                  />
                                  <Image
                                    source={item.shoes}
                                    style={{
                                      top: 3,
                                      position: "absolute",
                                      //   alignSelf: "center",
                                      height: "76%",
                                      width: "76%",
                                    }}
                                  />
                                </View>
                                <View style={styles.FTextView}>
                                  <Text style={{ color: "white" }}>
                                    {item.date}
                                  </Text>
                                  <Text style={{ color: "white" }}>
                                    {item.distance}
                                  </Text>
                                  <Text style={{ color: "white" }}>
                                    {item.time}
                                  </Text>
                                </View>
                                <View style={styles.FSpeedView}>
                                  <Text style={{ color: "white" }}>
                                    {item.speed}
                                  </Text>
                                </View>
                                <View style={styles.FRArrowView}>
                                  <Image source={item.left} />
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          ) : check == "Cycling" ? (
            <View style={{ height: height * 0.9, width: width * 1 }}>
              <View
                style={{
                  width: width * 0.9,
                  height: height * 0.08,
                  justifyContent: "center",
                  alignSelf: "center",
                  
                  
                }}
              >
                <Text
                  style={{
                    color: "white",
                    lineHeight: 23,
                    fontWeight: "700",
                    fontSize: 20,
                    fontFamily:'SairaSemiCondensed-Regular'
                  }}
                >
                  Sport Log
                </Text>
              </View>

              <View
                style={{
                  // backgroundColor: "red",

                  height: height * 0.4,
                  width: width * 0.97,
                }}
              >
                <FlatList
                  data={Cycling}
                  showsVerticalScrollIndicator={false}
                  horizontal={false}
                  renderItem={({ item }) => {
                    return (
                      <View style={{}}>
                        <View style={{ height: height * 0.01 }}></View>
                        <ImageBackground
                          source={IMAGEPATH.FLATCONTAINER}
                          style={styles.FIMD}
                        >
                          <TouchableOpacity>
                            <View style={styles.FlatView}>
                              <View style={styles.FlatView2}>
                                <View style={styles.FShoeView}>
                                  <Image
                                    source={item.ImageBackground}
                                    style={styles.FItemContainer}
                                  />
                                  <Image
                                    source={item.cycle}
                                    style={{
                                      top: 3,
                                      position: "absolute",
                                        alignSelf: "center",
                                      height: 60,
                                      width: 60,
                                      right:30,
                                    }}
                                  />
                                </View>
                                <View style={styles.FTextView}>
                                  <Text style={{ color: "white" }}>
                                    {item.date}
                                  </Text>
                                  <Text style={{ color: "white" }}>
                                    {item.distance}
                                  </Text>
                                  <Text style={{ color: "white" }}>
                                    {item.time}
                                  </Text>
                                </View>
                                <View style={styles.FSpeedView}>
                                  <Text style={{ color: "white" }}>
                                    {item.speed}
                                  </Text>
                                </View>
                                <View style={styles.FRArrowView}>
                                  <Image source={item.left} />
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          ) : (
            <View style={{ height: height * 0.9, width: width * 1 }}>
              <View
                style={{
                  width: width * 0.9,
                  height: height * 0.08,
                  justifyContent: "center",
                  alignSelf: "center",
                  
                  
                }}
              >
                <Text
                  style={{
                    color: "white",
                    lineHeight: 23,
                    fontWeight: "700",
                    fontSize: 20,
                    fontFamily:'SairaSemiCondensed-Regular'
                  }}
                >
                  Sport Log
                </Text>
              </View>

              <View
                style={{
                  // backgroundColor: "red",
                  height: height * 0.4,
                  width: width * 0.97,
                }}
              >
                <FlatList
                  data={Walking}
                  showsVerticalScrollIndicator={false}
                  horizontal={false}
                  renderItem={({ item }) => {
                    return (
                      <View style={{}}>
                        <View style={{ height: height * 0.01 }}></View>
                        <ImageBackground
                          source={IMAGEPATH.FLATCONTAINER}
                          style={styles.FIMD}
                        >
                          <TouchableOpacity>
                            <View style={styles.FlatView}>
                              <View style={styles.FlatView2}>
                                <View style={styles.FShoeView}>
                                  <Image
                                    source={item.ImageBackground}
                                    style={styles.FItemContainer}
                                  />
                                  <Image
                                    source={item.shoes}
                                    style={{
                                      top: 20,
                                      position: "absolute",
                                        alignSelf: "center",
                                        right:35,
                                        
                                      height: "50%",
                                      width: "50%",
                                    }}
                                  />
                                </View>
                                <View style={styles.FTextView}>
                                  <Text style={{ color: "white",fontFamily:'sen-Regular' }}>
                                    {item.date}
                                  </Text>
                                  <Text style={{ color: "white",fontFamily:'sen-Regular' }}>
                                    {item.distance}
                                  </Text>
                                  <Text style={{ color: "white",fontFamily:'sen-Regular' }}>
                                    {item.time}
                                  </Text>
                                </View>
                                <View style={styles.FSpeedView}>
                                  <Text style={{ color: "white",fontFamily:'sen-Regular' }}>
                                    {item.speed}
                                  </Text>
                                </View>
                                <View style={styles.FRArrowView}>
                                  <Image source={item.left} />
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Sporting;

const styles = StyleSheet.create({
  FIMD: { height: height * 0.13, width: width * 1 },
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
