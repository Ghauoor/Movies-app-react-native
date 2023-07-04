import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {styles} from '../theme/theme';
import TrandingMovies from '../components/TrandingMovies';
import MovieList from '../components/MovieList';
import {useNavigation} from '@react-navigation/native';

const ios = Platform.OS == 'ios';
const HomeScreen = () => {
  const [tranding, setTranding] = useState([1, 2, 4]);
  const [upcomingMovies, setUpcomingMovies] = useState([1, 2, 4]);
  const [topRatedMovies, setTopRatedMovies] = useState([1, 2, 4]);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar and logo */}
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between item-center mx-4">
          <Bars3BottomLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon color="white" strokeWidth={2} size="30" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {/*Tranding Movies Carusal*/}
        <TrandingMovies data={tranding} />

        {/* upcoming movie row */}
        <MovieList title="Upcoming" data={upcomingMovies} />
        {/* Top Rated movie row */}
        <MovieList title="Top Rated" data={topRatedMovies} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
