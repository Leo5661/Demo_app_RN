import {View, Text} from 'react-native';
import React from 'react';
import UpArrowSvg from '../assets/up_arrow.svg';
import DownArrowSvg from '../assets/down_arrow.svg';
import ProgressSvg from '../assets/progress.svg';

type Props = {};

const ReportCard = (props: Props) => {
  return (
    <View className="border relative border-[#EEEAF3] pb-8 rounded-md">
      <View className="flex  justify-center items-center inset-x-0 bottom-4 z-10">
        <ProgressSvg width={32} height={32} />
      </View>
      <View className="flex-row justify-between px-6">
        <View className="flex-col items-start">
          <Text className="text-[#727682] text-base font-semibold">
            Under or Over
          </Text>
          <View className="flex-row items-center justify-center mt-3">
            <UpArrowSvg width={32} height={32} />
            <Text className="text-black/80 text-2xl font-bold pl-2">81%</Text>
          </View>
        </View>

        <View className="flex-col items-start">
          <Text className="text-[#727682] text-base font-semibold ">Top 5</Text>
          <View className="flex-row items-center justify-center mt-3">
            <DownArrowSvg width={32} height={32} />
            <Text className="text-black/80 text-2xl font-bold pl-2">-51%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReportCard;
