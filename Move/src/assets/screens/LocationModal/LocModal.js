import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  ImageBackground,
  Dimensions,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";
import { IMAGEPATH } from "../../Icon/Icon";
const { height, width } = Dimensions.get("screen");
const LocModal = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ height: height * 1, backgroundColor: "green" }}>
      <ImageBackground
        style={{
          height: height * 1,
          width: width * 1,
          alignSelf: "center",
          justifyContent: "center",
          // alignItems:'center'
        }}
        source={IMAGEPATH.SPLASH_BACKGROUND}
      >
        {/* <Modal isVisible={true}>
          <View style={{}}>
            <ImageBackground
              style={{
                width: width * 0.9,
                height: height * 0.42,
                justifyContent: 'center',
              }}
              source={IMAGEPATH.LOC_MODAL}>
              <View
                style={{
                  flexDirection: 'column',
                  height: height * 0.25,
                  justifyContent: 'space-evenly',
                }}>
                <View style={{alignSelf: 'center'}}>
                  <Text
                    style={{fontSize: 30, fontWeight: '500', color: 'white'}}>
                    Use your location
                  </Text>
                </View>
                <View style={{alignSelf: 'center', width: width * 0.7}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Velit fusce mauris augue urna, elit lacus sit lacus.
                  </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Dashboard") }>

                <View style={{alignSelf: 'center'}}>
                  <ImageBackground
                    style={styles.borderStyle}
                    source={IMAGEPATH.BUTTON_RADIUS}>
                    <View style={styles.loginTextView}>
                      <Text style={styles.loginTextStyle}>Submit</Text>
                    </View>
                    
                  </ImageBackground>
                </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </Modal> */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{}}>
            <ImageBackground
              style={{
                width: width * 0.9,
                height: height * 0.42,
                justifyContent: "center",
              }}
              source={IMAGEPATH.LOC_MODAL}
            >
              <View
                style={{
                  flexDirection: "column",
                  height: height * 0.25,
                  justifyContent: "space-evenly",
                }}
              >
                <View style={{ alignSelf: "center" }}>
                  <Text
                    style={{ fontSize: 30, fontWeight: "500", color: "white" }}
                  >
                    Use your location
                  </Text>
                </View>
                <View style={{ alignSelf: "center", width: width * 0.7 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Velit fusce mauris augue urna, elit lacus sit lacus.
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Dashboard")}
                >
                  <View style={{ alignSelf: "center" }}>
                    <ImageBackground
                      style={styles.borderStyle}
                      source={IMAGEPATH.BUTTON_RADIUS}
                    >
                      <View style={styles.loginTextView}>
                        <Text style={styles.loginTextStyle}>Submit</Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </ImageBackground>
    </View>
  );
};

export default LocModal;

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
  },
  loginTextStyle: {
    fontSize: 14,
    color: "#FFFFFF",
    // fontFamily: 'Sen-regular',
    textAlign: "center",
    fontWeight: "700",
  },
});
