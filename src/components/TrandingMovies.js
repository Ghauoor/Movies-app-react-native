import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

let {width, height} = Dimensions.get('window');
const TrandingMovies = ({data}) => {
  //Navigation
  const navigation = useNavigation();
  const handleClick = item => {
    navigation.navigate('Movie', item);
  };
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Tranding Movies</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard handleClick={handleClick} item={item} />
        )}
        firstItem={1}
        inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};

const MovieCard = ({item, handleClick}) => (
  <TouchableWithoutFeedback onPress={() => handleClick(item)}>
    <Image
      source={require('../../assets/images/bg.jpg')}
      style={{
        width: width * 0.6,
        height: height * 0.5,
      }}
      className="rounded-3xl"
    />
  </TouchableWithoutFeedback>
);

export default TrandingMovies;