import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { IMAGEPATH } from "../../Icon/Icon";
import { SafeAreaView } from "react-native-safe-area-context";
const { height, width } = Dimensions.get("screen");
const ShoeDetials = ({ navigation }) => {
  return (
    <SafeAreaView style={{ height: height, width: width }}>
      <ImageBackground
        source={IMAGEPATH.SPLASH_BACKGROUND}
        style={{ height: height * 1, width: width * 1 }}
      >
        <View
          style={{
            height: height * 1,
            width: width * 0.9,
            alignSelf: "center",
            backgroundColor: "red",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <View style={{ height: height * 0.05, justifyContent: "center" }}>
              <Image source={IMAGEPATH.LEFT} />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: height * 0.4,
              width: width * 0.9,
              backgroundColor: "green",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
          <View style={{left:20}}>

             <Image source={IMAGEPATH.BIGSHOES} />
          </View>
          <View style={{width:93,bottom:30,left:70}}>
            <Image source={IMAGEPATH.BIGSHOESS} />
          </View>
          <View style={{flexDirection:'row'}}>
            <View>
                <Text style={{color:'white', fontWeight:'700', fontSize:18,lineHeight:23}}>
                    SHOES-1 
                </Text>
            </View>
            <View>
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
          </View>
          </View>
        </View>
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
      },
      loginTextStyle: {
        fontSize: 14,
        color: "#FFFFFF",
        // fontFamily: 'Sen-regular',
        textAlign: "center",
        fontWeight: "700",
      },
});
