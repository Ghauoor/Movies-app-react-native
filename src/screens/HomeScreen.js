import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../theme/theme';
import TrandingMovies from '../components/TrandingMovies';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import {
  fetchTopRatedMovies,
  fetchTrandingMovies,
  fetchUpcomingMovies,
} from '../api/movieDb';

const ios = Platform.OS == 'ios';
const HomeScreen = () => {
  const [tranding, setTranding] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  //get movies data
  useEffect(() => {
    getTrandingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  //Tranding movies
  const getTrandingMovies = async () => {
    try {
      const data = await fetchTrandingMovies();
      // console.log(data);
      if (data && data.results) {
        setTranding(data.results);
      }
      setLoading(false);
    } catch (error) {
      console.warn(error);
    }
  };
  //getUpcomingMovies
  const getUpcomingMovies = async () => {
    try {
      const data = await fetchUpcomingMovies();
      // console.log(data);
      if (data && data.results) {
        setUpcomingMovies(data.results);
      }
      setLoading(false);
    } catch (error) {
      console.warn(error);
    }
  };
  //getTopRatedMovies
  const getTopRatedMovies = async () => {
    try {
      const data = await fetchTopRatedMovies();
      // console.log(data);
      if (data && data.results) {
        setTopRatedMovies(data.results);
      }
      setLoading(false);
    } catch (error) {
      console.warn(error);
    }
  };

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

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.container}>
          {/*Tranding Movies Carusal*/}
          {tranding.length > 0 && <TrandingMovies data={tranding} />}

          {/* upcoming movie row */}

          {upcomingMovies.length > 0 && (
            <MovieList title="Upcoming" data={upcomingMovies} />
          )}

          {/* Top Rated movie row */}
          {topRatedMovies.length > 0 && (
            <MovieList title="Top Rated" data={topRatedMovies} />
          )}
        </ScrollView>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  container: {paddingBottom: 10},
});
export default HomeScreen;
