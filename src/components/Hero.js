import React from 'react'
import './styles/hero.css'

export const Hero = ({data}) => {
  return (
    <div className='hero'>
        <div className="hero-container">
            <div className="content">
                <h2 className="title">{data.name}</h2>
                <div className="more-info">
                    <div className="rating">
                        <i className='fa fa-star star' aria-hidden="true"></i>
                        <span className='rating-data'>{data.rating}</span>
                    </div>
                    <div className="genres">{data.genre}</div>
                    <div className="year">{data.year}</div>
                </div>
                <div className="summary">
                    {data.summary}
                </div>
                <div className="buttons">
                    <button className='hero-button'> <i className='fa fa-play mr' aria-hidden="true"></i> Watchlist</button>
                    <button className='hero-button favourite'> <i className='fa fa-heart mr' aria-hidden="true"></i> Favourites</button>
                </div>
            </div>
        </div>
    </div>
  )
}
