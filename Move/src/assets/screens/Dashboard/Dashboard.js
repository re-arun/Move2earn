import {
  StyleSheet,
  Text,
  View,
  Dimensions,

  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MyBottomTab from "../HomeBottom/BottomT";
import React, { useState } from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Modal from 'react-native-modal';
import CircularProgress from "react-native-circular-progress-indicator";
import { IMAGEPATH } from "../../Icon/Icon";
import HBottom from "../HomeBottom/HBottom";
const { height, width } = Dimensions.get("window");

const Dashboard = ({ navigation }) => {
  
  const [isModalVisible, setModalVisible] = useState(true);

      const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.ImageBackground}
        source={IMAGEPATH.SPLASH_BACKGROUND}
      >
      <View style={{height:height*0.8}}>
        <StatusBar barStyle="light-content"></StatusBar>
        <ScrollView>
          <View style={styles.fakeView}></View>
          <View style={styles.headerVIew}>
            <View style={{ width: width * 0.04 }}></View>
            <View style={styles.headingView}>
              {/* <View style={{ height: height * 0.02 }}></View> */}
              <View style={styles.HelloVIew2}>
                <Text style={styles.HelloTExt}>Hello! Umair Siddiqui</Text>
              </View>
              <View style={styles.HelloVIew}>
                <Text style={styles.HeadingTExt}>Let’s Move2Earn</Text>
              </View>
            </View>

            <View style={styles.BellView}>
              <TouchableOpacity onPress={() => navigation.navigate("Genderr")}>
                <Image source={IMAGEPATH.BELL_Icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.ProfileVIew}>
              <TouchableOpacity>
                <Image source={IMAGEPATH.PROFILE_Icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.HOmeImage}>
            <View style={styles.container}>
              <SwiperFlatList
                autoplay
                autoplayDelay={3}
                autoplayLoop
                index={2}
                showPagination
                paginationActiveColor="#1EB808"
                paginationDefaultColor="transparent"
                paginationStyleItemInactive={{
                  borderColor: "gray",
                  borderWidth: 1,
                }}
                paginationStyle={{
                  borderColor: "#434242",
                  height: height * 0.02,
                  width: width * 0.2,
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={[
                    styles.child,
                    {
                      alignItems: "center",
                    },
                  ]}
                >
                  <Image
                    style={styles.HEadingImageStyle}
                    source={IMAGEPATH.HEADER_IMAGE}
                  />
                </View>
                <View style={[styles.child, { alignItems: "center" }]}>
                  <Image
                    style={styles.HEadingImageStyle}
                    source={IMAGEPATH.HEADER_IMAGE}
                  />
                </View>
                <View style={[styles.child, { alignItems: "center" }]}>
                  <Image
                    style={styles.HEadingImageStyle}
                    source={IMAGEPATH.HEADER_IMAGE}
                  />
                </View>
                <View style={[styles.child, { alignItems: "center" }]}>
                  <Image
                    style={styles.HEadingImageStyle}
                    source={IMAGEPATH.HEADER_IMAGE}
                  />
                </View>
              </SwiperFlatList>
            </View>
          </View>
          <View style={{ height: height * 0.01 }}></View>
          <View style={styles.buttonVIew}>
            <View style={styles.RunnigMainView}>
              <TouchableOpacity>
                <ImageBackground
                  style={styles.BUTTON_ICON}
                  source={IMAGEPATH.BUTTON_ICON}
                >
                  <View style={styles.CycallingView}>
                    <Image
                      style={styles.RunImageStyle}
                      source={IMAGEPATH.RUNNING_ICON}
                    />
                  </View>
                  <View style={styles.CyTextView}>
                    <Text style={styles.RunTextStyle}>Running</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.RunnigMainView}>
              <TouchableOpacity>
                <ImageBackground
                  style={styles.BUTTON_ICON}
                  source={IMAGEPATH.BUTTON_ICON}
                >
                  <View style={styles.CycallingView}>
                    <Image
                      style={styles.RunImageStyle1}
                      source={IMAGEPATH.CYCALLING_ICON}
                    />
                  </View>
                  <View style={styles.CyTextView}>
                    <Text style={styles.RunTextStyle}>Cycling</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.RunnigMainView}>
              <TouchableOpacity>
                <ImageBackground
                  style={styles.BUTTON_ICON}
                  source={IMAGEPATH.BUTTON_ICON}
                >
                  <View style={styles.CycallingView}>
                    <Image
                      style={styles.RunImageStyle1}
                      source={IMAGEPATH.WALKING_ICON}
                    />
                  </View>
                  <View style={styles.CyTextView}>
                    <Text style={styles.RunTextStyle}>Walking</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.MIdHeadingTextView}>
            <Text style={styles.MIdHeadingTextStyle}>Finished Tasks</Text>
            <Text style={styles.DayTExt}>Day Time</Text>
          </View>
          <View style={styles.TaskPercentageVIew}>
            <ImageBackground
              style={styles.TASKBG_ICON}
              source={IMAGEPATH.TASKBG_ICON}
            >
              <View style={styles.ProcessMainView}>
                <View style={styles.ProcessFirstView}>
                  <View style={styles.cRunView}>
                    <View style={styles.RUnIcnView}>
                      <Image source={IMAGEPATH.COLORRUN_ICON} />
                    </View>
                    <View style={styles.RUnTxtView}>
                      <Text style={styles.T1Style}>0 /150 min</Text>
                    </View>
                  </View>
                  <View style={styles.cRunView}>
                    <View style={styles.RUnIcnView}>
                      <Image source={IMAGEPATH.COLORRUN_ICON} />
                    </View>
                    <View style={styles.RUnTxtView}>
                      <Text style={styles.T1Style}>0 /150 min</Text>
                    </View>
                  </View>
                  <View>
                    <View style={styles.sendCodeView}>
                      <TouchableOpacity>
                        <ImageBackground
                          style={styles.codeImageSTyle}
                          source={IMAGEPATH.CODE_ICON}
                        >
                          <View style={styles.sendView}>
                            <Text style={styles.sendCOdeTExt}>View all</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: width * 0.45,
                    // alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor:'red'
                    top: 5,
                  }}
                >
                  <CircularProgress
                    value={30}
                    rotation={-50}
                    inActiveStrokeColor={"#4C536E"}
                    progressValueColor={"#ecf0f1"}
                    activeStrokeColor={"#2ecc71"}
                    activeStrokeSecondaryColor={"#ffffff"}
                    // inActiveStrokeColor={'#9b59b6'}
                    inActiveStrokeOpacity={0.5}
                    inActiveStrokeWidth={15}
                    activeStrokeWidth={30}
                    radius={70}
                    valueSuffix={"%"}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ height: height * 0.1, width: width * 1 }}>
            <ImageBackground
              source={IMAGEPATH.LONGEST_RUN}
              style={{
                height: height * 0.1,
                width: width * 0.9,
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  width: width * 0.8,
                  // backgroundColor: "red",
                  alignContents: "center",
                  height: height * 0.1,
                  alignSelf: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Image source={IMAGEPATH.LOCICON} />
                  </View>
                  <View>
                    <Text style={{ color: "white" }}>Longest Distance</Text>
                  </View>
                  <View>
                    <Text style={{ color: "white" }}>3.2 Km</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <Modal
          animationType="slide"
          isVisible={isModalVisible}
          transparent={true}
          hasBackdrop={true}
          
          visible={isModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!isModalVisible);
          }}>
        
        <View  style={{
              borderWidth: 3,
              borderTopColor: "rgb(199,112,193)",
              borderRightColor: "rgb(147,182,203)",
              borderLeftColor: "rgb(147,182,203)",
              borderBottomColor: "rgb(176,244,165)",
              borderRadius: 15,
              alignSelf: "center",
            }} >
         <LinearGradient
             colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.25);']}
              style={{
                height: height * 0.3,
                alignSelf: "center",
                width: width * 0.9,
                borderRadius: 15,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}
            >

              <View
                style={{
                  flexDirection: 'column',
                  height: height * 0.25,
                  justifyContent: 'space-evenly',
                }}>
                <View style={{alignSelf: 'center'}}>
                  <Text 
                    style={{fontSize: 30, fontWeight: '500', color: 'white', fontFamily:"sairasemiCondensed-Regular", }}>
                    Use your location
                  </Text>
                </View>
                <View style={{alignSelf: 'center', width: width * 0.7}}>
                  <Text
                    style={{
                      fontSize: height*0.017,
                      fontWeight: '400',
                      color: 'white',
                      textAlign: 'center',
                      fontFamily:"sen-regular"
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Velit fusce mauris augue urna, elit lacus sit lacus.
                  </Text>
                </View>
                <TouchableOpacity
                //   onPress={() => navigation.navigate('Dashboard')}
                
                onPress={toggleModal}>
                  <View style={{alignSelf: 'center'}}>
                    <ImageBackground
                      style={styles.borderStyle1}
                      source={IMAGEPATH.BUTTON_RADIUS}>
                      <View style={styles.loginTextView1}>
                        <Text style={styles.loginTextStyle1}>Allow</Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </Modal>
        </ScrollView>
   </View>
      </ImageBackground>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  sendView: {
    justifyContent: "center",
    //   borderWidth: 1,
    height: height * 0.03,
    width: width * 0.18,
    alignSelf: "center",
  },
  sendCOdeTExt: {
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: "sen-Regular",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 23,
  },
  codeImageSTyle: {
    alignSelf: "center",
    // resizeMode:'contain',
    height: height * 0.04,
    width: width * 0.2,

    // justifyContent:'center'
  },
  sendCodeView: {
    height: height * 0.05,
    width: width * 0.25,
    // borderWidth: 1,
    // backgroundColor:'red',
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",

    marginTop: 10,
  },
  T1Style: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "sen-Regular",
  },
  RUnTxtView: {
    height: height * 0.03,
    // alignSelf: "center",
    // borderWidth: 1,
    borderColor: "white",
    width: width * 0.19,
    justifyContent: "center",
  },
  RUnIcnView: {
    height: height * 0.03,
    // alignSelf: "center",
    // borderWidth: 1,
    borderColor: "white",
    width: width * 0.06,
    justifyContent: "center",
  },
  borderStyle1: {
    //resizeMode: 'contain',
    width: 102,
    height: 45,

    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
    borderRadius: 100,
  },
  cRunView: {
    height: height * 0.04,
    alignSelf: "center",
    // borderWidth: 1,
    borderColor: "white",
    width: width * 0.3,
    justifyContent: "center",
    flexDirection: "row",
  },
  ProcessFirstView: {
    height: height * 0.17,
    alignSelf: "center",
    // borderWidth: 1,
    // borderColor: "white",
    width: width * 0.4,
    justifyContent: "center",
    //flexDirection: "row",
    // backgroundColor:'red'
  },
  ProcessMainView: {
    height: height * 0.18,
    alignSelf: "center",
    // borderWidth: 1,
    // borderColor: "white",
    width: width * 0.85,
    flexDirection: "row",
  },
  loginTextView1: {
    height: height * 0.05,
    width: width * 0.21,
    // borderWidth: 1,
    alignSelf: 'center',
    alignItems:'center',
    // backgroundColor:'red',
    justifyContent:'center',
    borderRadius:25
  },
  loginTextStyle1: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'sen-Regular',
    textAlign: 'center',
    fontWeight: '700',
    bottom:5,
  },
  TASKBG_ICON: {
    height: height * 0.2,
    width: width * 0.89,
    // backgroundColor:'green'
  },
  TaskPercentageVIew: {
    height: height * 0.21,
    width: width * 0.92,
    alignSelf: "center",
    // borderWidth: 1,
    alignItems: "center",
    // backgroundColor:'red'
  },
  DayTExt: {
    fontSize: 14,
    lineHeight: 23,
    fontWeight: "400",
    color: "#6D776B",
    fontFamily: "sen-Regular",
  },
  MIdHeadingTextStyle: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "SairaSemicondensed-Regular",
  },
  MIdHeadingTextView: {
    height: height * 0.07,
    width: width * 0.88,
    alignSelf: "center",
    // borderWidth: 1,
    // justifyContent: "center",
    //  alignItems: "center",
  },
  RunTextStyle: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "400",
    color: "#FFFFFF",
    textAlign: "center",
  },
  RunImageStyle1: {
    height: height * 0.07,
    width: width * 0.14,
  },
  RunImageStyle: {
    height: height * 0.04,
    width: width * 0.08,
  },
  CyTextView: {
    height: height * 0.03,
    width: width * 0.14,
    alignSelf: "center",
    // borderWidth: 1,
  },
  CycallingView: {
    height: height * 0.07,
    width: width * 0.1,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  BUTTON_ICON: {
    height: height * 0.12,
    width: width * 0.24,
    alignSelf: "center",
    // justifyContent:"center"
  },
  RunnigMainView: {
    height: height * 0.14,
    alignSelf: "center",
    //  borderWidth: 1,
    borderColor: "white",
    width: width * 0.3,
  },
  buttonVIew: {
    height: height * 0.15,
    alignSelf: "center",
    //  borderWidth: 1,
    borderColor: "white",
    width: width * 0.98,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  HEadingImageStyle: {
    height: height * 0.16,

    width: width * 0.87,
  },
  HOmeImage: {
    height: height * 0.24,
    width: width * 0.95,
    alignSelf: "center",
    // borderWidth:1
  },
  ProfileVIew: {
    height: height * 0.05,
    width: width * 0.15,
    // borderWidth:1,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  BellView: {
    height: height * 0.04,
    width: width * 0.1,
    // borderWidth:1,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  HelloVIew: {
    height: height * 0.045,
    width: width * 0.49,
    // backgroundColor:'red', 
    // borderWidth:1,
    // borderColor: "white",
    //  justifyContent: "center",
    //  alignItems:'center'
  },
  HelloVIew2: {
    height: height * 0.025,
    width: width * 0.49,
    // borderWidth:1,
    borderColor: "white",
    // justifyContent: "center",
  },
  HeadingTExt: {
    color: "#FFFFFF",
    fontSize: 24,
    // lineHeight: 23,
    fontWeight: "400",
    fontFamily: "SairaSemicondensed-Regular",
  },
  HelloTExt: {
    color: "#A6A9A5",
    fontSize: 14,
    lineHeight: 23,
    fontWeight: "400",
    fontFamily: "sen-Regular",
  },
  headingView: {
    height: height * 0.1,
    width: width * 0.67,
    //borderWidth: 1,
    borderColor: "white",
    // justifyContent: "center",
  },
  headerVIew: {
    height: height * 0.1,
    width: width * 0.97,
    // borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    flexDirection: "row",
  },
  mainContainer: {

  },
  ImageBackground: {
    
   height:height*1,
   width:width*1
  },
  fakeView: {
    height: height * 0.04,
    width: width * 0.95,
    alignSelf: "center",
  },
  container: {
    height: height * 0.22,
    width: width * 0.95,
    backgroundColor: "transparent",
  },
  child: {
    width: width * 0.95,
    height: height * 0.17,
    // justifyContent: "center",
  },
  text: { fontSize: 15, textAlign: "center" },
  LinearGradien: {
    // flex: 1,
height:height*0.3,
alignSelf:"center",
width:width*0.9
  },
});
