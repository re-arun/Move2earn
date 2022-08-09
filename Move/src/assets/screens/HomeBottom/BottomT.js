import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Modal,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    StatusBar,
    SafeAreaView,
  } from "react-native";
  import React, { useState } from "react";
import Dashboard from '../Dashboard/Dashboard';
import Genderr from '../SelectGender/SelectGender';
import Sporting from '../Sporting/Sporting';
import { IMAGEPATH } from '../../Icon/Icon';
import MyShoes from './HBottom';
import Test from '../test';



function Dash ({navigation}) {
  return (
    <View>
   <Test />
    </View>
  );
};
function Sport ({navigation}) {
  return (
    <View>
   <MyShoes />
    </View>
  );
};
function Recent ({navigation}) {
  return (
    <View>
   <Sporting />
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyBottomTab({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Dashboards"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false,
        tabBarHideOnKeyboard:true,
        
          }}
      
    >
      <Tab.Screen
        name="Dashboards"
        component={Dash}
        options={{
          tabBarLabel: 'Home',
         headerShown:false
        }}
      />
       <Tab.Screen
        name="Sport"
        component={Sport}
        options={{
          tabBarLabel: 'none',
         headerShown:false
        }}
      />
       <Tab.Screen
        name="Recent"
        component={Recent}
        options={{
          tabBarLabel: 'Home',
         headerShown:false
        }}
            />
   
    </Tab.Navigator>
  );
}
export default MyBottomTab;