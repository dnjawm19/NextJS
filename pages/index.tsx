import { useEffect, useState } from "react";
import styled from "styled-components";
import Seo from "../components/Seo";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
`

const MovieImg = styled.img`
  max-width: 100%;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`

const MovieH4 = styled.h4`
  font-size: 18px;
  text-align: center;
`

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const {results} = await (await fetch(
        `/api/movies`
      )).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <StyledDiv>
        <Seo title="Home" />
        {!movies && <h4>Loading...</h4>}
        {movies?.map((movie) => (
          <div key={movie.id}>
            <div className="movie" key={movie.id}>
            <MovieImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <MovieH4>{movie.original_title}</MovieH4>
            </div>
          </div>          
        ))}
      </StyledDiv>
    </div>
  )
}