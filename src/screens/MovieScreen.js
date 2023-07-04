import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
  Text,
  Image,
} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles, theme} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import {
  fallbackMoviePoster,
  fetchMoviesCredits,
  fetchMoviesDetails,
  fetchSimilarMovies,
  image500,
} from '../api/movieDb';
import Loading from '../components/Loading';

let {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-3';

const MovieScreen = () => {
  //recieve the movie i just pass
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [cast, setCast] = useState([]);
  //State for heart icon
  const [isFavourite, toggleFavourite] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //Call the Movie Api
    setLoading(true);

    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);
  const getMovieDetails = async id => {
    try {
      const data = await fetchMoviesDetails(id);
      setLoading(false);
      if (data) {
        setMovie(data);
      }
      // console.log('Get the Movie Details', data);
    } catch (error) {
      console.warn(error);
    }
  };

  //get movies credits
  const getMovieCredits = async id => {
    try {
      const data = await fetchMoviesCredits(id);
      if (data && data.cast) {
        setCast(data.cast);
      }
    } catch (error) {
      console.warn(error);
    }
  };
  const getSimilarMovies = async id => {
    try {
      const data = await fetchSimilarMovies(id);
      if (data && data.results) {
        setSimilarMovies(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      className="flex-1 bg-neutral-900">
      {/* back button and movie poster */}
      <View className="w-full">
        <SafeAreaView
          className={
            'absolute z-20 w-full flex-row justify-between items-center px-4' +
            topMargin
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
              color={isFavourite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={{
                uri: image500(movie?.poster_path || fallbackMoviePoster),
              }}
              // source={require('../../assets/images/antman.jpg')}
              style={{width, height: height * 0.55}}
            />
            <LinearGradient
              colors={[
                'transparent',
                'rgba(23, 23, 23, 0.8)',
                'rgba(23, 23, 23, 1)',
              ]}
              style={{width, height: height * 0.4}}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>
      {/* Movie Details View */}
      <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
        {/* Movie title */}
        <Text className="text-white text-center text-3xl font-bold tracking tracking-wider">
          {movie?.title}
        </Text>
        {/* status release date runtime */}
        {movie?.id ? (
          <Text className="text-neutral-400 font-base text-center">
            {movie?.status} • {movie?.release_date} • {movie?.runtime}
          </Text>
        ) : null}

        {/* Genre */}

        <View className="flex-row justify-center mx-4 space-x-2">
          {movie?.genres?.map((genre, index) => {
            let showDot = index + 1 != movie.genres.length;
            return (
              <Text
                key={index}
                className="text-neutral-400 font-semibold text-base text-center">
                {genre?.name} {showDot ? '•' : null}
              </Text>
            );
          })}

          {/* <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Super Hero
          </Text> */}
        </View>
        {/* Description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movie?.overview}
        </Text>
      </View>
      {/* cast scroll view */}
      <Cast navigation={navigation} cast={cast} />

      {/* Similar Movies */}

      {
        <MovieList
          title={'Similar Movies'}
          hideSeeAll={true}
          data={similarMovies}
        />
      }
    </ScrollView>
  );
};

export default MovieScreen;
