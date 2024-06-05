"use client"
import './MovieCardComponent.scss';

export default function MovieCardComponent({movieCardProps,handleFavouriteMovieSelection}:any) {
    const posterSize = 'w500';
    const posterUrl = `https://image.tmdb.org/t/p/${posterSize}/${movieCardProps.poster_path}`;

    return(
        <div className="movie-card-wrapper">
            <div className="movie-card-image-wrapper">
                <img src={posterUrl} alt={movieCardProps.title} />
            </div>
            <div className="movie-card-info">
                <button className="movie-card-button" onClick={() => handleFavouriteMovieSelection(movieCardProps.id)}> {movieCardProps.inFavourites ? 'Remove from favourites' : 'Add to favourites'} </button> 
                <div className="movie-card-title">{movieCardProps.title}</div>
                <div className="movie-card-release-date">Release date: {movieCardProps.release_date ? movieCardProps.release_date : 'Not released yet'}</div>
                <div className="movie-card-favourites">{movieCardProps.inFavourites ? 'In favourites' : ''}</div>
            </div>
        </div>
    )
}