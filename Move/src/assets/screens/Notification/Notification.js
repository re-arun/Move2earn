import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import React from "react";
import { IMAGEPATH } from "../../Icon/Icon";
import Genderr from "../SelectGender/SelectGender";
const { height, width } = Dimensions.get("window");
const DATA = [
    {
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod interdum ut duis luctus. Erat sapien fermentum tortor non feugiat.",
      }, {
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod interdum ut duis luctus. Erat sapien fermentum tortor non feugiat.",
      }, {
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod interdum ut duis luctus. Erat sapien fermentum tortor non feugiat.",
      }, {
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod interdum ut duis luctus. Erat sapien fermentum tortor non feugiat.",
      }, 
      
];

const Notification = (props) => {
  return (
    <SafeAreaView style={{ height: height, width: width }}>
      <ImageBackground
        source={IMAGEPATH.SPLASH_BACKGROUND}
        style={{ height: height * 1, width: width * 1 }}
      >
        <View
          style={{
            width: width * 0.9,
            height: height * 1,
            alignSelf: "center",
          }}
        ><TouchableOpacity onPress={() => props.navigation.navigate("Home")}>

          <View style={{ height: height * 0.05, justifyContent: "center" }}>
            <Image source={IMAGEPATH.LEFT} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("ShoeDetails")}>
          <View style={{top:5}}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "700", fontFamily: 'sairasemicondensed-Regular', }}>
              Notification
            </Text>
          </View>
          </TouchableOpacity>
          <View>
            <FlatList
            
              data={DATA}
              showsVerticalScrollIndicator={true}
              // horizontal={true}
              renderItem={({ item }) => {
                return <View style={{height:height*0.1,width:width*1, top:40,bottom:10}}>

                    <Text style={{color:"white", fontSize:14, fontWeight:'400',lineHeight:22, fontFamily: 'sairasemicondensed-Regular',}}>
                        {item.note}
                    </Text>
                </View>;
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
