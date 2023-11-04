import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator, {HomeStackParamList} from './HomeStackNavigator';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import HomeSvg from '../assets/home.svg';
import LeaguesSvg from '../assets/leagues.svg';
import ResearchSvg from '../assets/search.svg';
import LeaderboardSvg from '../assets/leaderboard.svg';
import PersonSvg from '../assets/person.svg';
import {NavigatorScreenParams} from '@react-navigation/native';

import Profile from '../screens/Profile';
import Leagues from '../screens/Leagues';
import Research from '../screens/Research';
import Leaderboard from '../screens/Leaderboard';

export type BottomNavStackParm = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Leagues: undefined;
  Research: undefined;
  Leaderboard: undefined;
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
        backgroundColor: '#ffffffe6',
      }}>
      <BottomNavStack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <HomeSvg width={20} height={20} fill={color} />
          ),
        }}
      />

      <BottomNavStack.Screen
        name="Leagues"
        component={Leagues}
        options={{
          tabBarLabel: 'Leagues',
          tabBarIcon: ({color}) => (
            <LeaguesSvg width={20} height={20} fill={color} />
          ),
        }}
      />

      <BottomNavStack.Screen
        name="Research"
        component={Research}
        options={{
          tabBarLabel: 'Research',
          tabBarIcon: ({color}) => (
            <ResearchSvg width={20} height={20} fill={color} />
          ),
        }}
      />

      <BottomNavStack.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({color}) => (
            <LeaderboardSvg width={20} height={20} fill={color} />
          ),
        }}
      />

      <BottomNavStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <PersonSvg width={20} height={20} fill={color} />
          ),
        }}
      />
    </BottomNavStack.Navigator>
  );
};

export default BottomNavigator;
