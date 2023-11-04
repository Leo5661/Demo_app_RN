import {View, Text} from 'react-native';
import React from 'react';
import {BadgesList} from '../utlis/BadgesList';
import BadgeIconSvg from '../assets/badge_icon.svg';

type Props = {
  item: BadgesList;
};

const BadgesCard = ({item}: Props) => {
  return (
    <View className="flex-row p-3 m-2 bg-white">
      <View className="flex justify-center items-center">
        <BadgeIconSvg width={60} height={60} />
      </View>
      <View className="flex-col justify-evenly pl-2 flex-grow items-start">
        <View className="w-full flex-row items-center">
          <Text className="text-base font-semibold text-black/80">
            {item.title}
          </Text>
          {item.count && (
            <Text className="text-base font-semibold text-[#FFA600] ps-2">{`x ${item.count}`}</Text>
          )}
        </View>
        <Text className="text-base font-medium text-[#727682]">
          {item.details}
        </Text>
      </View>
    </View>
  );
};

export default BadgesCard;
