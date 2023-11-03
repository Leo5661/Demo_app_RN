import {View, FlatList} from 'react-native';
import React from 'react';
import {BadgesList} from '../utlis/BadgesList';
import BadgesCard from '../components/BadgesCard';

type Props = {};

const BadgesTab = (props: Props) => {
  return (
    <View>
      <FlatList
        data={BadgesList}
        keyExtractor={(item: BadgesList) => item.id.toString()}
        renderItem={({item}) => <BadgesCard item={item} />}
      />
    </View>
  );
};

export default BadgesTab;
