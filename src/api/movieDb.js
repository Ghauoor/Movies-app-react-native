// import axios from 'axios';
// import {apiKey} from '../constants/constant';

// //API endpoints
// // endpoints
// const apiBaseUrl = 'https://api.themoviedb.org/3';
// const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
// const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
// const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
// const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

// // endpoints with dynamic params

// // movie
// const movieDetailsEndpoint = id =>
//   `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
// const movieCreditsEndpoint = id =>
//   `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
// const similarMoviesEndpoint = id =>
//   `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

// // person
// const personDetailsEndpoint = id =>
//   `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
// const personMoviesEndpoint = id =>
//   `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

// export const image500 = path =>
//   path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
// export const image342 = path =>
//   path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
// export const image185 = path =>
//   path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

// // fallback images
// export const fallbackMoviePoster =
//   'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
// export const fallbackPersonImage =
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

// const apiCall = async (endpoint, params) => {
//   const options = {
//     method: 'GET',
//     url: endpoint,
//     params: params ? params : {},
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data;
//   } catch (error) {
//     console.warn(error);
//   }
// };

// //Fetch the Tranding movies

// export const fetchTrandingMovies = () => {
//   return apiCall(trendingMoviesEndpoint);
// };

// export const fetchUpcomingMovies = () => {
//   return apiCall(upcomingMoviesEndpoint);
// };

// export const fetchTopRatedMovies = () => {
//   return apiCall(topRatedMoviesEndpoint);
// };

// export const fetchMoviesDetails = id => {
//   return apiCall(movieDetailsEndpoint(id));
// };
// export const fetchMoviesCredits = id => {
//   return apiCall(movieCreditsEndpoint(id));
// };
// export const fetchSimilarMovies = id => {
//   return apiCall(similarMoviesEndpoint(id));
// };

// // person screen apis
// export const fetchPersonDetails = personId => {
//   return apiCall(personDetailsEndpoint(personId));
// };
// export const fetchPersonMovies = personId => {
//   return apiCall(personMoviesEndpoint(personId));
// };

// // fetch search-results
// export const searchMovies = params => {
//   return apiCall(searchMoviesEndpoint, params);
// };
