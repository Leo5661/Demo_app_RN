import {View, Text, Pressable} from 'react-native';
import React from 'react';
import LogoutSvg from '../assets/logout.svg';

type Props = {};

const LogoutButton = (props: Props) => {
  return (
    <Pressable
      onPress={() => console.log('Logout')}
      className="flex-row items-center p-4">
      <LogoutSvg width={20} height={20} />
      <Text className="text-base font-semibold text-[#727682] pl-2">
        Logout
      </Text>
    </Pressable>
  );
};

export default LogoutButton;
