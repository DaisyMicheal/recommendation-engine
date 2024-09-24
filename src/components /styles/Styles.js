import { styled } from '@mui/system'
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from '@mui/material'

// NavSection
export const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  boxShadow: 'none',
  position: 'sticky',
  top: 0,
  zIndex: 1100,
})

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px',
})

export const Logo = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '20px',
  cursor: 'pointer',
  color: '#e50914',
})

export const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  color: 'black',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}))

export const NavIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const StyledButton = styled(Button)({
  color: 'black',
  textTransform: 'none',
  fontSize: '15px',
})

export const SearchIconButton = styled(IconButton)({
  color: 'gray',
})

export const NotificationIconButton = styled(IconButton)({
  color: 'black',
})

export const ProfileIconButton = styled(IconButton)({
  color: '#0288d1',
})

export const DrawerIconsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  padding: '10px',
})

// HeroSection
export const StyledHeroContainer = styled(Box)({
  width: '100%',
  height: '400px',
  position: 'relative',
  overflow: 'hidden',
})

export const StyledBannerItem = styled(Box)({
  width: '100%',
  height: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

export const StyledBannerContent = styled(Box)({
  color: '#fff',
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.5)',
  padding: '20px',
  borderRadius: '8px',
})

export const StyledTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '2.5rem',
  marginBottom: '10px',
})

export const StyledDescription = styled(Typography)({
  fontSize: '1.1rem',
  marginBottom: '20px',
})

export const StyledActionButton = styled(Button)({
  backgroundColor: '#e50914',
  color: '#fff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#b20710',
  },
})

// BookSlider

export const SliderWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(20),
  marginBottom: theme.spacing(10),
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '90px 30px',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
  },
}))

export const Card = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  boxShadow: theme.shadows[3],
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    '& .slide-up-content': {
      opacity: 1,
    },
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
  '& .music-card': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  '& .rating': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    marginTop: theme.spacing(1),
  },
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}))

export const MovieCard = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  boxShadow: theme.shadows[3],
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    '& .slide-up-content': {
      opacity: 1,
    },
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}))

export const MovieInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}))

export const SlideContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#ffff',
  padding: theme.spacing(2),
  transition: 'opacity 0.3s ease-in-out',
  opacity: 0,
  color: theme.palette.common.black,
}))

export const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& img': {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
}))

export const BookCard = styled('div')(({ theme }) => ({
  borderRadius: '10px',
  boxShadow: theme.shadows[3],
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover .slide-up-content': {
    transform: 'translateY(0)',
  },
  '& img': {
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}))

export const BookInfo = styled('div')({
  textAlign: 'center',
  marginTop: '10px',
  '& .MuiTypography-subtitle1': {
    fontWeight: 600,
    fontSize: '16px',
    color: '#333',
  },
  '& .MuiTypography-body2': {
    color: '#757575',
  },
})

export const SlideUpContent = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '10px',
  backgroundColor: '#fff',
  color: '#000',
  transform: 'translateY(100%)',
  transition: 'transform 0.4s ease-in-out',
  textAlign: 'center',
  borderBottomLeftRadius: '5px',
  borderBottomRightRadius: '5px',
  '& .MuiTypography-body2': {
    fontSize: '14px',
  },
  '& .MuiRating-root': {
    marginTop: '10px',
    justifyContent: 'center',
  },
})
