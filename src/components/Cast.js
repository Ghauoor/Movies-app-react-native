import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {fallbackPersonImage, image185} from '../api/movieDb';

export default function Cast({cast, navigation}) {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5 ">Top Cast</Text>
      <ScrollView
        horizontal
        showHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Person', person)}
                className="mr-4 items-center">
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border-neutral-500">
                  <Image
                    className="rounded-2xl h-24 w-20"
                    source={{
                      uri:
                        image185(person?.profile_path) || fallbackPersonImage,
                    }}
                    // source={require('../../assets/images/paul-rudd.jpg')}
                  />
                </View>

                <Text className="text-white text-xs mt-1">
                  {person?.character && person?.character.length > 10
                    ? person?.character.slice(0, 10) + '...'
                    : person?.character}
                </Text>
                <Text className="text-neutral-400 text-xs mt-1">
                  {person?.orignal_name && person?.orignal_name.length > 10
                    ? person?.orignal_name.slice(0, 10) + '...'
                    : person?.orignal_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, marginTop: 20},
});
