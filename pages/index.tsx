import { useEffect, useState } from "react";
import styled from "styled-components";
import Seo from "../components/Seo";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
  cursor: pointer;
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

const MovieA = styled.h4`
  font-size: 18px;
  text-align: center;
`

export default function Home({results}) {
  const router = useRouter();

  const onClick = (id, title) => {
    router.push({
      pathname: `/movies/${id}`,
      query: {
        title
      }
    },
    `/movies/${id}`
    );
  }

  return (
    <div>
      <StyledDiv>
        <Seo title="Home" />
        {results?.map((movie) => (
          <div onClick={() => onClick(movie.id, movie.original_title)} key={movie.id}>
            <div>
              <MovieImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <Link              
                href={{
                  pathname: `/movies/${movie.id}`,
                  query: {
                    title: movie.original_title
                  }
                }}
                as={`/movies/${movie.id}`}                  
                passHref
              >
                <MovieA>{movie.original_title}</MovieA>
              </Link>
              </div>
            </div>                
        ))}
      </StyledDiv>
    </div>
  )
}

export async function getServerSideProps() {
  const {results} = await (await fetch(
    `http://localhost:3000/api/movies`
  )).json();

  return {
    props: {
      results
    }
  }
}