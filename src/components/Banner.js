import React, { useEffect, useState } from 'react';
import './Banner.css';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import requests from '../Requests';

const Banner = () => {

    const truncate = (string,n ) => string?.length > n ? `${string.substr(0,n-1)} ...` : string;

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // Tenemos un array de peliculas en request.data.results
            // generar un número random entre 0 y la longitud del array, para tener un indice aleatorio
            const random = Math.floor(Math.random()*(request.data.results.length - 1));
            setMovie(request.data.results[random]);
            return request;
        }
        fetchData();
    },[])

    return (
        <div className="banner" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
            <div className="banner__content">
                <Typography variant="h2" component="h1">
                    {movie?.title || movie?.name || movie?.original_name}
                </Typography>
                <div className="banner__contentbuttons">
                    <Button>Play</Button>
                    <Button>My List</Button>
                </div>
                <Typography variant="h6" className="banner__contentdesc">
                    {
                        truncate(movie?.overview,160)
                    }
                </Typography>
                <div className="banner__contentfadebottom"></div>
            </div>
        </div>
     );
}

export default Banner;