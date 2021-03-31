require('dotenv').config()

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const requests = {
    tranding:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    originals:`/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    topRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    // actionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    // comedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    // horrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    // romanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // documentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

    // TV Shows 
    originalsTV:`/trending/tv/day?api_key=${API_KEY}&language=en-US`,
    trandingTV:`/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    topRatedTV:`/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    actionTV:`/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    comedyTV:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    horrorTV:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
    romanceTV:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    documenTV:`/discover/tv?api_key=${API_KEY}&with_genres=99`,

    // Movies 

    originalsMovies:`/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    trandingMovies:`/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    topRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documenMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const fetchMovie = (id) => {
    return `/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  }

export const fetchTV = (id) => {
    return `/tv/${id}?api_key=${API_KEY}&append_to_response=videos,content_ratings`
  }
export default requests;
