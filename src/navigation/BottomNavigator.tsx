import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator, {HomeStackParamList} from './HomeStackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigatorScreenParams} from '@react-navigation/native';

import Profile from '../screens/Profile';

export type BottomNavStackParm = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Profile: undefined;
};

const BottomNavStack = createMaterialBottomTabNavigator<BottomNavStackParm>();

const BottomNavigator = () => {
  return (
    <BottomNavStack.Navigator
      initialRouteName="HomeStack"
      activeColor="#6231AD"
      labeled={true}
      inactiveColor="gray"
      barStyle={{
        backgroundColor: 'black',
        height: 70,
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
      }}>
      <BottomNavStack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={20} />
          ),
        }}
      />

      <BottomNavStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person" color={color} size={20} />
          ),
        }}
      />
    </BottomNavStack.Navigator>
  );
};

export default BottomNavigator;
