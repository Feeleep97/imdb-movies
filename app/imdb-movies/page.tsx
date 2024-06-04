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
    
    function removeDuplicateMovies(moviesArray:Array<IImdbMovieType>) {
        //unit test
        const jsonObject = moviesArray.map(JSON.stringify);
        const uniqueSet = new Set(jsonObject);
        const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
        setMovies(uniqueArray);
    }

    return (
      <div>
        Movie list
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>{movies.map((movie)=> {
            return(
            <MovieCardComponent 
            key={movie.id} 
            movieCardProps={movie}
            >
            </MovieCardComponent>)
        })}</div>
      </div>
    );
  }