import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import CategoryRow from "./CategoryRow";
import requests from '../Requests'


function TVShows() {
  return (
    <HomePage>
      <Banner />
      <CategoryRow
        title="What's Popular"
        category={["Streaming", "On TV", "For Rent", "In Theaters"]}
        req={[requests.originalsTV,requests.actionTV,requests.comedyTV,requests.horrorTV]}
      />
      <CategoryRow
        title="Free To Watch"
        category={["", "TV"]}
        req={[requests.actionTV,requests.comedyTV]}
      />
      <CategoryRow
        title="Latest Trailers"
        category={["Streaming", "On TV", "For Rent", "In Theaters"]}
        req={[requests.comedyTV,requests.horrorTV,requests.originalsTV,requests.actionTV]}
      />
      <CategoryRow
        title="Tredning"
        category={["Today", "This Week"]}
        req={[requests.trandingTV,requests.actionTV]}
      />
     
      
    </HomePage>
  );
}

const HomePage = styled.div`
  width: 100%;
  height:auto;
  background-color: #040a19f7;
`;

export default TVShows;
