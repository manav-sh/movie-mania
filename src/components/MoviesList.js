import React from 'react'
import { MovieCard } from './MovieCard'
import './styles/movielist.css'

export const MoviesList = () => {
  return (
    <div className='list-container'>
        <div className="inner-container">
            <h3>Trending Movies</h3>
            <div className="movies-list">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    </div>
  )
}
