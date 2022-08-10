
import {Dimensions, StyleSheet, Text, View,SafeAreaView,ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { IMAGEPATH } from '../Icon/Icon';
const {height,width} =Dimensions.get("screen");
const Test = ({navigation}) => {
  return (
    <SafeAreaView>
    <ImageBackground source={IMAGEPATH.SPLASH_BACKGROUND} style={{height:height, width:width}} >

        <View style={{
            borderWidth:3
           , borderTopColor:"rgb(199,112,193)",
           borderRightColor:"rgb(147,182,203)",
           borderLeftColor:"rgb(147,182,203)",
           borderBottomColor:"rgb(176,244,165)",
           borderRadius:10,
           alignSelf:"center"
        }}>
        <LinearGradient colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']} style={styles.LinearGradien}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>
    </View>
    </ImageBackground>
    </SafeAreaView>
  )
}

export default Test

const styles = StyleSheet.create({ 
    LinearGradien: {
        // flex: 1,
  height:height*0.08,
  alignSelf:"center",
  width:width*0.9
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
})