import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import React, {useState} from 'react';
import GamePlayedTab from '../screens/GamePlayedTab';
import BadgesTab from '../screens/BadgesTab';

type Props = {};

const renderScene = SceneMap({
  first: GamePlayedTab,
  second: BadgesTab,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    activeColor="#6231AD"
    inactiveColor="#727682"
    indicatorStyle={{backgroundColor: 'purple'}}
    style={{backgroundColor: 'white'}}
  />
);

const History = (props: Props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(1);
  const [routes] = React.useState([
    {key: 'first', title: 'Games Played'},
    {key: 'second', title: 'Badges'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default History;
