import {View, Text, Image} from 'react-native';
import React from 'react';
import NotificationSvg from '../assets/notification.svg';
import ProfileDetails from '../components/ProfileDetails';
import LogoutButton from '../components/LogoutButton';
import ReportCard from '../components/ReportCard';
import History from '../navigation/History';

type Props = {};

const Profile = (props: Props) => {
  return (
    <View className="w-full flex flex-col p-4 bg-white">
      <View className="flex-row justify-between items-center">
        <Image
          className="w-8 h-8"
          source={require('../assets/splash_logo.png')}
        />
        <Text className="text-[#727682] text-base font-medium text-center">
          Profile
        </Text>
        <View className="flex relative justify-center items-center">
          <View className="flex w-4 h-4 justify-center items-center z-10 rounded-full bg-[#6231AD] absolute bottom-3 left-3">
            <Text className="text-sm">2</Text>
          </View>
          <NotificationSvg width={20} height={20} />
        </View>
      </View>
      <ProfileDetails />
      <View className="flex-row justify-center items-center">
        <LogoutButton />
      </View>
      <View className="w-full mt-4">
        <ReportCard />
      </View>
      <View className="w-full h-full mt-2 border-t border-black/20">
        <History />
      </View>
    </View>
  );
};

export default Profile;
