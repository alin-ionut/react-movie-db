import React from 'react';
import Button from '@material-ui/core/Button';
import MovieItem from './MovieItem';
import styles from './MovieList.css';

function MovieList(props){
    const { movies = [] } = props;
    return (
        <div className="movie-list">
            <div className="movies-container">
            {movies.length > 0 ?
             movies.map(movie => (
                <MovieItem
                title={movie.name}
                year={movie.year}
                description={movie.description} 
                key={movie.id}
                />
    ))
    : 'No movies found. Perhaps add one?'}
            </div>
            <Button variant="contained" color="primary" >
            Add new movie
            </Button>
        </div>
    )
}

export default MovieList;