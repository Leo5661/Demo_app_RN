import {Text, Pressable} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  onPress: Function;
};

const CustomButton = ({title, onPress}: Props) => {
  return (
    <Pressable
      className="flex flex-row justify-center items-center bg-[#6231AD] rounded-full w-full h-10"
      onPress={() => onPress()}>
      <Text className="text-base font-semibold m-2">{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
