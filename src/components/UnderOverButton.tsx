import {Image, View, Text, Pressable} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  onPress: Function;
};

const UnderOverButton = ({title, onPress}: Props) => {
  return (
    <Pressable
      className={`flex flex-row justify-center items-center ${
        title.toLowerCase() === 'under' ? 'bg-[#482c58]' : 'bg-[#6231AD]'
      } rounded-full w-36 h-10`}
      onPress={() => onPress()}>
      {title.toLowerCase() === 'under' ? (
        <Image source={require('../assets/under.png')} />
      ) : (
        <Image source={require('../assets/over.png')} />
      )}
      <Text className="text-base font-semibold m-2">{title}</Text>
    </Pressable>
  );
};

export default UnderOverButton;
