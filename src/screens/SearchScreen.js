import {View, Dimensions, SafeAreaView, TextInput} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

export default function SearchScreen() {
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
      </View>
    </SafeAreaView>
  );
}
