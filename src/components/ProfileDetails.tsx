import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {};

const ProfileDetails = (props: Props) => {
  return (
    <View className="w-full flex-col items-center mt-3">
      <Image className="w-24 h-24" source={require('../assets/profile.png')} />
      <Text className="text-lg text-black/90 font-semibold mt-2">
        Jina Simons
      </Text>
      <Text className="text-sm text-[#727682] font-semibold mt-2">
        6000 Pts
      </Text>
      <Text className="text-base text-[#727682] font-semibold mt-2 leading-6">
        I’m a software developer that has been in the crypto space since 2012.
        And I’ve seen it grow and falter over a period of time. Really happy to
        be here!
      </Text>
    </View>
  );
};

export default ProfileDetails;
