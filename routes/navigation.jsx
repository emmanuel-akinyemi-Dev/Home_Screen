import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Favourite from "../screens/favourite";
import Message from "../screens/message";
import Profile from "../screens/profile";
import { View, Text} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation:0,
    height:60,
    background:'#fff'
  },
};

function Navigator() {
  return (
    <NavigationContainer>
<Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} /> 
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Favourite" 
          component={Favourite} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Entypo name="heart" size={24} color={focused ? "#16247d": "#111"} />
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Message" 
          component={Message} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                 }}
                >
                  <FontAwesome name="envelope" size={24} color={focused ? "#16247d":"#111"} />
                </View>
              )
            }
           }}
          />
          <Tab.Screen
           name="Profile" 
           component={Profile}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <FontAwesome name="user" size={24} color={focused ? "#16247d": "#111"} /> 
            </View>
              )
            }
          }}
           />

       </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
