import {View, Text} from 'react-native';
import React from 'react';
import AlertSvg from '../assets/alert.svg';

type Props = {};

const NoPage = (props: Props) => {
  return (
    <View className="w-full h-full flex justify-center items-center p-8">
      <AlertSvg width={200} height={200} />
      <Text className="mt-4 text-base text-black/50 font-semibold w-full text-center">
        Sorry for the dust! We're renovating this space to serve you better.
        Stay tuned!
      </Text>
    </View>
  );
};

export default NoPage;
