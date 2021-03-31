import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import CategoryRow from "./CategoryRow";
import requests from '../Requests'


function Movies() {
  return (
    <HomePage>
      <Banner />
      <CategoryRow
        title="What's Popular"
        category={["Streaming", "On TV", "For Rent", "In Theaters"]}
        req={[requests.originalsMovies,requests.actionMoviesTV,requests.comedyMoviesMovies,requests.horrorMoviesTV]}
      />
      <CategoryRow
        title="Free To Watch"
        category={["Movies", "TV"]}
        req={[requests.actionMovies,requests.comedyMovies]}
      />
      <CategoryRow
        title="Latest Trailers"
        category={["Streaming", "On TV", "For Rent", "In Theaters"]}
        req={[requests.comedyMovies,requests.horrorMovies,requests.originals,requests.actionMovies]}
      />
      <CategoryRow
        title="Tredning"
        category={["Today", "This Week"]}
        req={[requests.trandingMovies,requests.actionMovies]}
      />
     
      
    </HomePage>
  );
}

const HomePage = styled.div`
  width: 100%;
  height:auto;
  background-color: #040a19f7;
`;

export default Movies;
