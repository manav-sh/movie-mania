import React from 'react'
import '../styles/infoscreen.css'

export const InfoScreen = () => {
  return (
    <div className='info'>
            <div className="fullscreen info-bg" style={{backgroundImage: 'url("https://images3.alphacoders.com/103/thumb-1920-1033561.jpg")'}}>
            </div>
            <div className="fullscreen l-to-r-gradient"></div>
            <div className="detailed-info">
                <h2 className="info-title">John Wick - Chapter 3 <span className='info-year'>(2020)</span></h2>
                <div className="more-info-container">
                    <div className="imdb">IMDB 9.0 <i className='fa fa-star'></i> </div>
                    <div className="small-field">
                        Action, Adventure
                    </div>
                    <div className="small-field">
                        2hr 30mins
                    </div>
                </div>
                <div className="info-summary font-dm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nihil voluptate deleniti in eos nesciunt at optio id mollitia ducimus molestiae fugit iure delectus quae accusamus quas similique, modi iste perspiciatis ut corporis libero hic. Ad laboriosam beatae eius possimus.
                </div>
                <div className="crew-details font-dm">
                    <div className="directors">
                        <span className='info-head'>Director:</span> <span>Chad Stahelski</span>
                    </div>
                    <div className="directors">
                        <span className='info-head'>Writers:</span> <span>Derek Kolstad, Shay Hatten, Chris Collins</span>
                    </div>
                </div>
                <div className="cast-details">
                    <h4 className="cast-title">Cast</h4>
                    <div className="cast-list">
                        <div className='individual-cast'>
                            <img className='cast-image' src="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio0.7273_AL_.jpg" alt="actor" />
                            <span className='cast-name'>Keanu Reeves</span>
                        </div>
                        <div className='individual-cast'>
                            <img className='cast-image' src="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio0.7273_AL_.jpg" alt="actor" />
                            <span className='cast-name'>Keanu Reeves</span>
                        </div>
                        <div className='individual-cast'>
                            <img className='cast-image' src="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio0.7273_AL_.jpg" alt="actor" />
                            <span className='cast-name'>Keanu Reeves</span>
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}
