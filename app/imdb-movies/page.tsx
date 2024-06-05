"use client"
import { useEffect, useState } from "react";
import moviesData from '../../movies.json';
import MovieCardComponent from "./components/MovieCardComponent";

export type IImdbMovieType = {
    "adult": boolean;
    "backdrop_path": null;
    "genre_ids": number[];
    "id": number;
    "original_language": string;
    "original_title": string;
    "overview": string;
    "poster_path": string;
    "ratings": IImdbRatings[];
    "title":string;
    "video":boolean;
    "inFavourites"?:boolean;
}

 export type IImdbRatings = {
    "id":string;
    "rating":number;
}

export default function Movies() {
    const [movies,setMovies] = useState<Array<IImdbMovieType>>([])

    useEffect(() => {
        const moviesArray = moviesData as Array<IImdbMovieType>
        removeDuplicateMovies(moviesArray);
    }, [])

    function handleFavouriteMovieSelected(movieId:number) {
        updateFavouriteMovie(movieId,true);   
    }

    function updateFavouriteMovie (movieId:number, isFavourite:boolean){
        const addFavouriteMovieToMoviesArray = movies.map((movie) => {
           return movie.id === movieId ? {...movie, inFavourites:isFavourite} : movie
        })
        setMovies(addFavouriteMovieToMoviesArray)
       }; 

    function removeDuplicateMovies(moviesArray:Array<IImdbMovieType>) {
        const jsonObject = moviesArray.map(JSON.stringify);
        const uniqueSet = new Set(jsonObject);
        const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
        // sort filter by imdb rating
        uniqueArray.sort((a,b) => 
            b.ratings[0].rating - a.ratings[0].rating 
        );
        setMovies(uniqueArray);
    }

    return (
      <div>
        <h1>IMDB Movies</h1>
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>{movies.map((movie)=> {
            return(
            <MovieCardComponent 
            key={movie.id} 
            movieCardProps={movie}
            handleFavouriteMovieSelection={handleFavouriteMovieSelected}
            >
            </MovieCardComponent>)
        })}</div>
      </div>
    );
  }