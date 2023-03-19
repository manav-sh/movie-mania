import React, { useState } from 'react'
import { Hero } from './Hero'

const movieData = [
    {
        name: 'Dune',
        poster: 'https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960',
        rating: 5,
        genre: 'Sci-fi, Adventure',
        year: 2022,
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta incidunt perspiciatis porro nostrum. Modi, reiciendis voluptatibus? Corporis, praesentium culpa. Consequatur officiis quibusdam non sapiente.',
    },
    {
        name: 'John Wick - Chapter 3',
        poster: 'https://images3.alphacoders.com/103/thumb-1920-1033561.jpg',
        rating: 9,
        genre: 'Action',
        year: 2023,
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta incidunt perspiciatis porro nostrum. Modi, reiciendis voluptatibus? Corporis, praesentium culpa. Consequatur officiis quibusdam non sapiente.',
    },
    {
        name: 'Vaarisu',
        poster: 'https://e1.pxfuel.com/desktop-wallpaper/496/350/desktop-wallpaper-varisu.jpg',
        rating: 8.5,
        genre: 'Drama, Action',
        year: 2022,
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta incidunt perspiciatis porro nostrum. Modi, reiciendis voluptatibus? Corporis, praesentium culpa. Consequatur officiis quibusdam non sapiente.',
    },
    {
        name: 'Fall',
        poster: 'https://assets-prd.ignimgs.com/2022/06/07/fall-blogroll-1654637826224.jpg',
        rating: 9,
        genre: 'Adventure, Survival',
        year: 2015,
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta incidunt perspiciatis porro nostrum. Modi, reiciendis voluptatibus? Corporis, praesentium culpa. Consequatur officiis quibusdam non sapiente.',
    }
]


export const MainHero = () => {
    const [index, setIndex] = useState(0);

    setInterval(() => {
        if (index === 3) setIndex(0);
        else setIndex(index + 1);
    }, 5000);

    return (
        <div>
            <div className="fullscreen poster" style={{ backgroundImage: `url(${movieData[index].poster})` }}></div>
            <div className="fullscreen gradient"></div>
            <Hero data={movieData[index]} />
        </div>
    )
}
