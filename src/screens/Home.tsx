import {View, Text, Image} from 'react-native';
import React from 'react';
import UnderOverButton from '../components/UnderOverButton';

type Props = {};

const Home = (props: Props) => {
  const handleUnder = () => {
    console.log('Under');
  };

  const handleOver = () => {
    console.log('Over');
  };

  return (
    <View className="h-full w-full flex flex-col p-4">
      <Text className="text-black/80 text-xl font-semibold">{`Today’s Games`}</Text>
      <View className="flex flex-col mt-4">
        <View className="flex flex-col bg-[#6231AD] p-4">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-2">
              <Text className="text-[#D2BAF5] text-base uppercase flex items-center">
                Under or Over
              </Text>
              <View className="ms-2 w-4 h-4 flex justify-center items-center border rounded-full border-[#D2BAF5]">
                <Text className="text-[#D2BAF5] text-xs">i</Text>
              </View>
            </View>

            <View className="flex flex-row items-center gap-2">
              <Text className="text-[#B296DC] text-xs">Starting in</Text>
              <Image source={require('../assets/clock.png')} />
              <Text className="text-[#D2BAF5] text-base">03:23:12</Text>
            </View>
          </View>

          <View className="flex flex-col items-start mt-4">
            <Text className="text-[#D2BAF5] text-base font-semibold">
              Bitcoin price will be under
            </Text>
            <Text className="text-white text-base font-bold mt-1">
              $24,524 at 7 a ET on 22nd Jan’21
            </Text>
          </View>
        </View>

        <View className="flex flex-col p-4">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-col">
              <Text className="text-[#B5C0C8] text-sm uppercase">
                Prize Pool
              </Text>
              <Text className="text-black/80 text-base font-semibold">
                $12,000
              </Text>
            </View>
            <View className="flex flex-col">
              <Text className="text-[#B5C0C8] text-sm uppercase">Under</Text>
              <Text className="text-black/80 text-base font-semibold">
                3.25x
              </Text>
            </View>
            <View className="flex flex-col">
              <Text className="text-[#B5C0C8] text-sm uppercase">Over</Text>
              <Text className="text-black/80 text-base font-semibold">
                1.25x
              </Text>
            </View>
            <View className="flex flex-col">
              <Text className="text-[#B5C0C8] text-sm uppercase">
                Entry Fees
              </Text>
              <View className="flex-row justify-end items-center">
                <Text className="text-black/80 text-base font-semibold">5</Text>
                <Image className="m-2" source={require('../assets/coin.png')} />
              </View>
            </View>
          </View>

          <Text className="text-[#727682] text-lg font-semibold mt-4">
            What’s your prediction?
          </Text>
          <View className="flex-row justify-evenly mt-2">
            <UnderOverButton title="Under" onPress={handleUnder} />
            <UnderOverButton title="Over" onPress={handleOver} />
          </View>
        </View>
        <View className="flex-col bg-[#F6F3FA] p-4">
          <View className="flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-2">
              <Image
                className="w-3 h-3"
                source={require('../assets/parson.png')}
              />
              <Text className="text-[#727682] text-base font-semibold">
                355 Players
              </Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Image
                className="w-4 h-4"
                source={require('../assets/graph.png')}
              />
              <Text className="text-[#727682] text-base font-semibold">
                View chart
              </Text>
            </View>
          </View>

          <View className="flex-row mt-3">
            <View className="bg-[#FE4190] rounded-l-full h-3 w-4/6" />
            <View className="bg-[#2DABAD] rounded-r-full h-3 flex-grow" />
          </View>

          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-[#B5C0C8] text-sm font-medium">
              232 predicted under
            </Text>

            <Text className="text-[#B5C0C8] text-sm font-medium">
              123 predicted over
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
