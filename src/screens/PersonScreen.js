import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Dimensions,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme/theme';
import MoviesList from '../components/MovieList';

const verticalMargin = ios ? '' : ' my-3';
var {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{paddingBottom: 20}}>
      {/* Back Button */}
      <SafeAreaView
        className={
          'flex-row justify-between items-center mx-4 z-10 ' + verticalMargin
        }>
        <TouchableOpacity
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon
            style={styles.background}
            size="28"
            strokeWidth={2.5}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-xl p-1"
          onPress={() => toggleFavourite(!isFavourite)}>
          <HeartIcon
            size="35"
            strokeWidth={2.5}
            color={isFavourite ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* Person details */}
      <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: 'gray',
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 1,
          }}>
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
            <Image
              source={require('../../assets/images/paul-rudd.jpg')}
              style={{height: height * 0.43, width: width * 0.74}}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Paul Rudd
          </Text>
          <Text className="text-neutral-500 text-base text-center">
            UK, New Jersey
          </Text>
        </View>
        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full ">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold ">Gender</Text>
            <Text className="text-neutral-300 text-sm">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm">1964-09-02</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">known for</Text>
            <Text className="text-neutral-300 text-sm">Acting</Text>
          </View>
          <View className="px-2 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 text-sm">84.23 %</Text>
          </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Paul Rudd is an American actor, comedian, and producer, born on
            April 6, 1969, in New Jersey. He gained prominence for his role as
            Mike Hannigan in the TV show "Friends" and continued to appear in
            numerous successful films like "Anchorman: The Legend of Ron
            Burgundy" and "Knocked Up." Known for his affable charm and comedic
            timing, Rudd has also played the superhero Ant-Man in the Marvel
            Cinematic Universe, featuring in films such as "Ant-Man" and
            "Avengers: Endgame." Beyond acting, he is involved in philanthropic
            efforts and has been honored with awards for his contributions to
            the entertainment industry.
          </Text>
        </View>
        {/* Person Movies */}
        <MoviesList title={'Movies'} hideSeeAll={true} data={personMovies} />
      </View>
    </ScrollView>
  );
}
