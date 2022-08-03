import * as React from 'react';
import { ImageBackground, Text, View ,Dimensions,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard/Dashboard';
import First from '../SelectGender/First';
import { IMAGEPATH } from '../../Icon/Icon';

const { height, width } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name='Firstt' component={First} />
      <Tab.Screen name="Home" component={Dashboard}  />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default function HBottom() {
  return (
    <NavigationContainer independent={true}>
    <MyTabs />
          <ImageBackground source={IMAGEPATH.BOTTOMTAB} style={{height:height*0.1, borderRadius:30,width:width*1}}>
      <View style={{width:width*1, flexDirection:'row',justifyContent:'space-evenly'}}>
        <View>
          {/* <HBottom  /> */}
          <TouchableOpacity onpress={()     }>

          <Image source={IMAGEPATH.BI1}        </View>
        <View>
        <Image source={IMAGEPATH.BI2C} />
        <Image source={IMAGEPATH.BI2} />
        </View>
        <View>
            <Image source={IMAGEPATH.BI3} />
        </View>

        </View>
        </ImageBackground>
      {/* <Text  style={{color:'yellow'}}>gdgfdf</Text> */}
    </NavigationContainer>
  );
}
