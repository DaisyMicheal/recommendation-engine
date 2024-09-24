import Carousel from 'react-material-ui-carousel'
import React from 'react'
import movieImage from '../../assets/hero/movie.jpg'
import bookImage from '../../assets/hero/book.jpg'
import musicImage from '../../assets/hero/music.jpg'
import {
  StyledHeroContainer,
  StyledBannerItem,
  StyledBannerContent,
  StyledTitle,
  StyledDescription,
  StyledActionButton,
} from '../styles/Styles'

const Hero = () => {
  const bannerItems = [
    {
      title: 'Discover Your Next Favorite Movie',
      description:
        'Explore trending movies and top picks curated just for you.',
      img: movieImage,
      actionText: 'Explore Movies',
    },
    {
      title: 'Find Your Next Great Read',
      description:
        'Browse through a collection of best-selling and popular books.',
      img: bookImage,
      actionText: 'Browse Books',
    },
    {
      title: 'Listen to Top Music Hits',
      description: 'Dive into the world of music with top albums and tracks.',
      img: musicImage,
      actionText: 'Listen Now',
    },
  ]
  return (
    <StyledHeroContainer>
      <Carousel
        autoPlay
        interval={5000}
        animation='fade'
        navButtonAlwaysVisble={false}
        indicators
      >
        {bannerItems.map((item, index) => (
          <StyledBannerItem
            key={index}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <StyledBannerContent>
              <StyledTitle variant='h3'>{item.title}</StyledTitle>
              <StyledDescription variant='subtitle1'>
                {item.description}
              </StyledDescription>
              <StyledActionButton variant='contained' color='primary'>
                {item.actionText}
              </StyledActionButton>
            </StyledBannerContent>
          </StyledBannerItem>
        ))}
      </Carousel>
    </StyledHeroContainer>
  )
}

export default Hero
