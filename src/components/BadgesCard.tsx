import {View, Text} from 'react-native';
import React from 'react';
import {BadgesList} from '../utlis/BadgesList';
import BadgeIconSvg from '../assets/badge_icon.svg';

type Props = {
  item: BadgesList;
};

const BadgesCard = ({item}: Props) => {
  return (
    <View className="flex-row p-2">
      <View className="flex justify-center items-center">
        <BadgeIconSvg width={60} height={60} />
      </View>
      <View className="flex-col flex-grow items-start ps-2">
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
