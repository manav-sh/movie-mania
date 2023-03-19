import React from 'react'


export const MovieCard = () => {
    return (
        <div className="movie-card" style={{ backgroundImage: 'url(https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960)' }}>
            <div className="fullscreen card-bg show-on-hover"></div>
            <div className="fullscreen details show-on-hover">
                <h4>Name</h4>
                <p className='banner-more-detail'> <span className='imdb'>IMDB 9.0</span><span className='year'>2022</span> </p>
            </div>
            <div className="fullscreen heart show-on-hover">
                <i className='fa fa-heart'></i>
            </div>
        </div>
    )
}
