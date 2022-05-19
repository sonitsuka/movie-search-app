import React from 'react'

export default function MovieCard(props) {
//export default function MovieCard({movie}})
    const movie = props.movie
    // exactly same as avobe const {movie} = props;
    return (
        <div className='card'>
            <img className='card--img'
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} 
            alt={movie.title + ' poster'}
            />
            <div className='card--content'>
            <h2 className='card--title'>{movie.title}</h2>
            <p><small>RELASE DATE: {movie.release_date}</small></p>
            <p className='card--description'>{movie.overview}</p>
            </div>
        </div>
  )
}
