import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios";
import requests from "../Requests";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "./ModalVideo";

function Banner() {
  const [movie, setMovie] = useState([]);

  // Getting the data from tmdb API 

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.originals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // Truncate the Description

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
// for only gettting year
  const getReleaseYear = (date) => {
    let year = new Date(date);
    return year.getFullYear();
  };


const [loadVideo, setLoadVideo] = useState(false);


  return (
    <BannerPage
      image={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
    >
      <Fade />
      <BannerContents>
        <Details>
          <BannerTitle>
            {movie?.title || movie?.name || movie?.original_name}
          </BannerTitle>
          <ReleaseDate>
            Release Year - (
            {getReleaseYear(movie.release_date || movie.first_air_date)})
          </ReleaseDate>
          <BannerDescriptions>
            {truncate(movie?.overview, 150)}
          </BannerDescriptions>
          <BannerButton onClick={()=>(setLoadVideo(prev => !prev))}>
            <FaPlay size={14} />
            Play Trailer
          </BannerButton>
        </Details>
        <BannerPoster
          image={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        ></BannerPoster>
      </BannerContents>
      <Fadebottom />
      <div>
            <ModalVideo VideoId={movie.id} loadVideo={loadVideo} setLoadVideo={setLoadVideo} title={movie?.title} />
          </div>
    </BannerPage>
  );
}

const BannerPage = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  object-fit: contain;
`;
const Fade = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  z-index: 99;
  background-color: #002038cf;
  opacity: 0.9;
`;
const BannerContents = styled.div`
  width: 100%;
  height: 600px;
  position: absolute;
  z-index: 102;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #cfcfcf;
`;
const Details = styled.div`
  padding-left: 30px;
  margin-left: 10%;
`;
const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;
const ReleaseDate = styled.div`
  font-size: 16px;
  color: #afafaf;
  font-weight: 400;
`;
const BannerDescriptions = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  max-width: 460px;
  height: 80px;
`;
const BannerButton = styled.button`
  cursor: pointer;
  color: #ffbd03;
  border: none;
  margin-top: 20px;
  background-color: #0f2133;
  border-radius: 30px;
  width: 180px;
  height: 40px;
  text-transform: uppercase;
  padding: 0px 20px;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  font-weight: 600;
  box-shadow: 1px 1px 30px -8px #00072bc2;
  :hover {
    color: #0f2133;
    background-color: #dfdfdf;
  }
`;

const BannerPoster = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  min-width: 314px;
  object-fit: contain;
  margin-right: 13%;
  margin-top: 40px;
  height: 460px;
  border-radius: 4px;
  transition: transform 450ms;
  box-shadow: 1px 1px 20px -2px #00072bc2;
`;

const Fadebottom = styled.div`
  width: 100%;
  height: 282px;
  position: absolute;
  top: 318px;
  z-index: 101;
  background-image: linear-gradient(180deg, transparent, #002038cf, #0c1221);
`;

export default Banner;
