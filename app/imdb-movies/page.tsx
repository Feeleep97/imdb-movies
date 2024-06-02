"use client"
import { useEffect, useState } from "react";
import moviesData from '../../movies.json';

type IImdbMovieType = {
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
}

type IImdbRatings = {
    "id":string;
    "rating":number;
}

export default function Movies() {
    const [movies,setMovies] = useState<IImdbMovieType[]>([])
    const imageSize = 'w500';
    const baseURL = `${'https://image.tmdb.org/t/p/'+ imageSize}`;

    useEffect(() => {
        removeDuplicateMovies(moviesData);
    }, [])
    
    function removeDuplicateMovies(moviesArray:IImdbMovieType[]) {
        console.log(moviesArray[0],'first movie');
        const firstImage = baseURL + moviesArray[0].poster_path; // pass the image to the child component - wip
        console.log(firstImage,'image');
        const jsonObject = moviesArray.map(JSON.stringify);
        const uniqueSet = new Set(jsonObject);
        const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
        setMovies(uniqueArray);
    }

    return (
      <div>
        Movie list
        <div style={{border:'1px solid red'}}>{movies.map((movie)=> {
            return <div style={{border:'1px dashed blue'}} key={movie.id}>{movie.title}</div>
        })}</div>
      </div>
    );
  }