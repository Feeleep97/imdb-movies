"use client"
import './MovieCardComponent.scss';

export default function MovieCardComponent({movieCardProps}:any) {
    const posterSize = 'w500';
    const posterUrl = `https://image.tmdb.org/t/p/${posterSize}/${movieCardProps.poster_path}`;
    return(
        <div className="movie-card-wrapper">
            <div className="movie-card-image-wrapper">
                <img src={posterUrl} alt={movieCardProps.title} />
            </div>
            <div className="movie-card-wrapper">
                <div className="movie-card-title">title: {movieCardProps.title}</div>
                <div className="movie-card-release-date">Release date: {movieCardProps.release_date ? movieCardProps.release_date : 'Not released yet'}</div>
                <div className="movie-card-favourites">In favourites: {movieCardProps.inFavourites ? movieCardProps.inFavourites : false}</div>
            </div>
        </div>
    )
}