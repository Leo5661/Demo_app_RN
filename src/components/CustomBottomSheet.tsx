import {View, Text, Image} from 'react-native';
import React, {forwardRef, useMemo, useCallback, useState} from 'react';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  useBottomSheetModal,
  BottomSheetScrollView,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import CustomButton from './CustomButton';

type Props = {};

export type Ref = BottomSheetModal;

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(4);
  const snapPoints = useMemo(() => ['50%'], []);
  const {dismiss} = useBottomSheetModal();

  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  const handleOnPress = () => {
    console.log('Submit');
    dismiss();
  };

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackDrop}
      enablePanDownToClose={false}
      handleIndicatorStyle={{backgroundColor: '#B5C0C8'}}>
      <View className="flex-col h-full items-start p-4 pb-10">
        <Text className="text-base font-semibold text-black/80">
          Your Prediction is Under
        </Text>

        <View className="flex-grow flex-col w-full justify-end my-4">
          <View className="flex grow flex-col">
            <Text className="text-[#727682] text-xs font-semibold uppercase items-start">
              Entry tickets
            </Text>

            <ScrollPicker
              dataSource={[
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
              ]}
              selectedIndex={selectedIndex}
              renderItem={(data, index) => (
                <Text className="text-black text-base font-medium" key={index}>
                  {data}
                </Text>
              )}
              onValueChange={(data, selectedIndex) => {
                setSelectedIndex(selectedIndex);
              }}
              wrapperHeight={180}
              wrapperBackground="#FFFFFF"
              itemHeight={60}
              highlightColor="#6331ad42"
              highlightBorderWidth={2}
            />
          </View>

          <View className="flex-col w-full p-2">
            <Text className="text-sm font-medium text-[#B5C0C8]">
              You can win
            </Text>
            <View className="flex-row justify-between">
              <Text className="text-[#03A67F] text-base font-semibold">
                $2000
              </Text>
              <View className="flex flex-row items-center gap-2">
                <Text className="text-[#727682] text-xs">Total</Text>
                <Image source={require('../assets/coin.png')} />
                <Text className="text-black/80 text-base font-semibold">5</Text>
              </View>
            </View>
          </View>
        </View>

        <CustomButton title="Submit my prediction" onPress={handleOnPress} />
      </View>
    </BottomSheetModal>
  );
});

export default CustomBottomSheet;
