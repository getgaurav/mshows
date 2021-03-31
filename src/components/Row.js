import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios";


function Row({ fetchURL, isLargRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);





  return (
    <RowComponent>
      <RowPoster>
        {movies.map(
          (movie) =>
            ((isLargRow && movie.poster_path) ||
              (!isLargRow && movie.backdrop_path)) && (
              <img key={movie?.poster_path}
                className={`row_poster ${isLargRow && "row_posterLarge"} `}
                src={`${base_url}${
                  isLargRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </RowPoster>
    </RowComponent>
  );
}

const RowComponent = styled.div`
    margin-left: 20px;
    color: #fff;
`;
const RowPoster =styled.div`
     padding: 20px;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
    display: none;
    transition:all 0.3s;
    }
    .row_poster{
    max-width: 160px;
    object-fit: contain;
    margin-right: 20px;
    width: 100%;
    border-radius: 4px;
    box-shadow:1px 1px 20px -2px #00072bc2;
    transition: transform 450ms;
}
    .row_poster:hover{
    transform: scale(1.08);
    opacity: 1;
}
`;





export default Row;
