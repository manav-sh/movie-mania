import React from 'react'
import '../styles/infoscreen.css'

export const InfoScreen = () => {
    return (
        <div className='info'>
            <div className="image-info">
                {/* <img className='info-poster' src='https://images3.alphacoders.com/103/thumb-1920-1033561.jpg' alt="poster" width={'100%'} height={'100%'} /> */}
                    <iframe class="info-poster" wmode="transparent" src="https://www.youtube-nocookie.com/embed/pU8-7BX9uxs?loop=1&autoplay=1&autopause=0&mute=1&modestbranding=1&autohide=1&rel=0&controls=0&playlist=pU8-7BX9uxs" title="YouTube video player" frameborder="0" loop="1" id="vid" allowFullScreen></iframe>
                <div className="fullscreen l-to-r-gradient"></div>
            </div>
            <div className="detailed-info">
                <h2 className="info-title">John Wick - Chapter 3 <span className='info-year'>(2020)</span></h2>
                <div className="info-buttons">
                    <div className="info-btn watchlist"> <i className='fa fa-play' aria-hidden="true"></i> Watchlist</div>
                    <div className="info-btn fav"> <i className='fa fa-heart-o' aria-hidden="true"></i> Favourite</div>
                </div>
                <div className="info-summary font-dm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nihil voluptate deleniti in eos nesciunt at optio id mollitia ducimus molestiae fugit iure delectus quae accusamus quas similique, modi iste perspiciatis ut corporis libero hic. Ad laboriosam beatae eius possimus.
                </div>
                <div className="more-info-container">
                    <div className="imdb">IMDB 9.0 <i className='fa fa-star'></i> </div>
                    <div className="small-field">
                        Action, Adventure
                    </div>
                    <div className="small-field">
                        2hr 30mins
                    </div>
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
                        {[1, 2, 3, 4, 5].map((key, index) => <div className='individual-cast'>
                            <div className='fullscreen cast-image' style={{backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio0.7273_AL_.jpg")'}} alt="actor"></div>
                            <span className='fullscreen cast-name hidden'>Keanu Reeves</span>
                        </div>)}

                    </div>
                </div>

            </div>
        </div>
    )
}
