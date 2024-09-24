import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Typography, Rating } from '@mui/material'
import Slider from 'react-slick'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  SliderWrapper,
  BookCard,
  BookInfo,
  SlideUpContent,
} from '../../styles/Styles'

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

const BookSlider = () => {
  const [books, setBooks] = useState([])
  const [hoveredBook, setHoveredBook] = useState(null)
  const [userRatings, setUserRatings] = useState({})

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const apiKey = process.env.REACT_APP_NYT_BOOKS_API_KEY
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
        )
        const booksData = response.data.results.books
        setBooks(booksData)
      } catch (error) {
        console.error('Error fetching the books:', error)
      }
    }

    fetchBooks()
  }, [])

  const handleRating = (bookId, value) => {
    setUserRatings({
      ...userRatings,
      [bookId]: value, // Store the user's rating for each book using its ISBN
    })
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
        Bestselling Books
      </Typography>
      <Slider {...sliderSettings}>
        {books.map((book) => (
          <div
            key={book.primary_isbn10}
            onMouseEnter={() => setHoveredBook(book.primary_isbn10)}
            onMouseLeave={() => setHoveredBook(null)}
          >
            <BookCard>
              <Box className='image-container'>
                <img
                  src={book.book_image}
                  alt={book.title}
                  style={{
                    width: '100%',
                    borderRadius: '5px',
                    height: '300px',
                  }}
                />
              </Box>
              <BookInfo>
                <Typography variant='subtitle1' noWrap>
                  {book.title}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {book.author}
                </Typography>
              </BookInfo>
              {hoveredBook === book.primary_isbn10 && (
                <SlideUpContent className='slide-up-content'>
                  <Typography variant='body2'>
                    Published: {book.publisher}
                  </Typography>
                  <Typography variant='body2'>
                    Weeks on list: {book.weeks_on_list}
                  </Typography>
                  <Typography variant='body2'>Rank: {book.rank}</Typography>
                  <Box display='flex' alignItems='center' mt={1}>
                    <Rating
                      name={`user-rating-${book.primary_isbn10}`}
                      value={userRatings[book.primary_isbn10] || 0}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        handleRating(book.primary_isbn10, newValue)
                      }}
                    />
                  </Box>
                </SlideUpContent>
              )}
            </BookCard>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  )
}

export default BookSlider
