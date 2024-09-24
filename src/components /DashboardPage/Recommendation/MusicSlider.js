import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Typography } from '@mui/material'
import { Card, SliderWrapper } from '../../styles/Styles'
import Slider from 'react-slick'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

// Sample function to render rating stars
const getRatingStars = (rating, onStarClick) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rating ? (
        <StarIcon
          key={i}
          style={{ color: '#ff9800', cursor: 'pointer' }}
          onClick={() => onStarClick(i + 1)} // Set rating to (i + 1)
        />
      ) : (
        <StarBorderIcon
          key={i}
          style={{ color: '#ff9800', cursor: 'pointer' }}
          onClick={() => onStarClick(i + 1)} // Set rating to (i + 1)
        />
      )
    )
  }
  return stars
}

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

const MusicSlider = () => {
  const [tracks, setTracks] = useState([])
  const [ratings, setRatings] = useState({}) // Store user ratings per track
  const [token, setToken] = useState('')

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          'grant_type=client_credentials',
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)}`,
            },
          }
        )
        setToken(response.data.access_token)
      } catch (error) {
        console.error('Error fetching Spotify access token:', error)
      }
    }

    const fetchTopTracks = async () => {
      try {
        if (token) {
          const response = await axios.get(
            'https://api.spotify.com/v1/browse/new-releases',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          const filteredTracks = response.data.albums.items.filter((album) => {
            const releaseYear = new Date(album.release_date).getFullYear()
            return releaseYear === 2024
          })
          setTracks(filteredTracks)
        }
      } catch (error) {
        console.error('Error fetching top tracks:', error)
      }
    }

    getAccessToken().then(() => fetchTopTracks())
  }, [token])

  // Handle user rating
  const handleRating = (trackId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [trackId]: rating,
    }))
  }

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
        Top Tracks of 2024
      </Typography>
      <Slider {...sliderSettings}>
        {tracks.map((track) => (
          <div key={track.id}>
            <Card className='music-card'>
              <Box className='image-container'>
                <img
                  src={track.images[0].url} // Adjust based on actual API response
                  alt={track.name}
                  style={{
                    width: '100%',
                    borderRadius: '5px',
                    height: '300px',
                  }}
                />
              </Box>
              <Box padding={1}>
                <Typography variant='subtitle1' noWrap>
                  {track.name}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {track.artists[0].name}
                </Typography>
                <Box display='flex' alignItems='center'>
                  {getRatingStars(
                    ratings[track.id] || 0, // Show saved rating or default to 0
                    (newRating) => handleRating(track.id, newRating)
                  )}
                </Box>
              </Box>
            </Card>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  )
}

export default MusicSlider
