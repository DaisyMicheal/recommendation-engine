import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Typography, Rating } from '@mui/material'
import Slider from 'react-slick'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  SliderWrapper,
  MovieCard,
  MovieInfo,
  SlideContent,
} from '../../styles/Styles'

// Custom arrow components for the slider
const NextArrow = (props) => {
  const { className, onClick } = props
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ color: 'black', right: '10px' }}
      onClick={onClick}
    />
  )
}

const PrevArrow = (props) => {
  const { className, onClick } = props
  return (
    <ArrowBackIosIcon
      className={className}
      style={{ color: 'black', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  )
}

const MovieSlider = () => {
  const [movies, setMovies] = useState([])
  const [hoveredMovie, setHoveredMovie] = useState(null)
  const [userRatings, setUserRatings] = useState({})

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.REACT_APP_OMDB_API_KEY
        const response = await axios.get(
          `https://www.omdbapi.com/?s=action&apikey=${apiKey}`
        )
        setMovies(response.data.Search)
      } catch (error) {
        console.error('Error fetching the movies:', error)
      }
    }

    fetchMovies()
  }, [])

  const handleRating = (movieId, value) => {
    setUserRatings({
      ...userRatings,
      [movieId]: value,
    })
  }

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <SliderWrapper>
      <Typography variant='h4' gutterBottom>
        Action Movies
      </Typography>
      <Slider {...sliderSettings}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            onMouseEnter={() => setHoveredMovie(movie.imdbID)}
            onMouseLeave={() => setHoveredMovie(null)}
          >
            <MovieCard>
              <Box className='image-container'>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{
                    width: '100%',
                    borderRadius: '5px',
                    height: '300px',
                  }}
                />
              </Box>
              <MovieInfo>
                <Typography variant='subtitle1' noWrap>
                  {movie.Title}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {movie.Year}
                </Typography>
              </MovieInfo>
              {hoveredMovie === movie.imdbID && (
                <SlideContent className='slide-up-content'>
                  <Typography variant='body2' color='primary'>
                    {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
                  </Typography>
                  <Typography variant='body2'>Predicted: 4.2/5</Typography>
                  <Typography variant='body2'>Ratings: 4.2/5</Typography>
                  <Box display='flex' alignItems='center' mt={1}>
                    <Rating
                      name={`user-rating-${movie.imdbID}`}
                      value={userRatings[movie.imdbID] || 0}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        handleRating(movie.imdbID, newValue)
                      }}
                    />
                  </Box>
                </SlideContent>
              )}
            </MovieCard>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  )
}

export default MovieSlider
