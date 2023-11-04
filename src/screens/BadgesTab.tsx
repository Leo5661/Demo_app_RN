import {View, FlatList} from 'react-native';
import React from 'react';
import {BadgesList} from '../utlis/BadgesList';
import BadgesCard from '../components/BadgesCard';

type Props = {};

const BadgesTab = (props: Props) => {
  return (
    <View className="h-72">
      <FlatList
        className="mb-8 bg-[#6331ad]/5"
        data={BadgesList}
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
        keyExtractor={(item: BadgesList) => item.id.toString()}
        renderItem={({item}) => <BadgesCard item={item} />}
      />
    </View>
  );
};

export default BadgesTab;
