import moviesSmall from './images/movies/moviesSmall.png';
import moviesMedium from './images/movies/moviesMedium.jpg';
import moviesLarge from './images/movies/moviesLarge.jpg';
import moviesXL from './images/movies/moviesXL.png';

import pToolSmall from './images/pTool/pToolSmall.png';
import pToolMedium from './images/pTool/pToolMedium.jpg';
import pToolLarge from './images/pTool/pToolLarge.jpg';
import pToolXL from './images/pTool/pToolXL.png';

import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';


//Portfolio => desc Recomended 300 characters.

const data = {
  portfolio: [
    {
      name: 'export-planning-tool',
      title: 'Export Planning Tool',
      subtitle:
        'Designed to simplify the process of estimating the required number of trailers.',
      featured: true,
      url: 'https://guarded-savannah-03210.herokuapp.com/',
      github: 'https://github.com/AleksandrRiabov/fs-planning-tool',
      technologies: [
        'React.Js',
        'Node.Js (Express)',
        'MongoDB Atlas',
        'MaterialUI',
        'Charts.Js',
        'Moment.Js',
        'AJAX',
        'react-router',
        'Deploy on Heroku',
      ],
      imgSmall: pToolSmall,
      imgMedium: pToolMedium,
      imgLarge: pToolLarge,
      imgXl: pToolXL,
      desc: "MERN stack Application designed to simplify the process of estimating the required number of trailers. All estimates are based on the average of the five previous weeks, or specific days of the week. With app's charts, you can easily identify seasonal orders spikes, and be prepared for the growing demand.",
      paragraphs: [
        'Some of the warehouses hiring other logistic companies to distribute the stock. To speed up deliveries it is beneficial to request trailers as soon as the warehouse received the order. However, it is very difficult to predict the number of trailers before the warehouse order has been fully picked and the number of pallets available. There is always a risk to request too many or not enough trailers to distribute everything. This App will help to make all estimates more accurate.',
      ],
    },
    {
      name: 'movies',
      title: 'Movies App',
      subtitle: 'Ract App which use a real API to display movies.',
      featured: false,
      url: 'https://aleksandrriabov.github.io/movies/',
      github: 'https://github.com/AleksandrRiabov/movies',
      technologies: [
        'ReactJs',
        'Responsive CSS',
        'MaterialUI',
        'AJAX',
        'GitHub',
        'react-router-dom',
      ],
      imgSmall: moviesSmall,
      imgMedium: moviesMedium,
      imgLarge: moviesLarge,
      imgXl: moviesXL,
      desc: 'This App allows you to view popular, now playing and top rated movies. View Individual movie and get the movies data such as cast, movie duration, summary, recommended movies,etc. View Individual Persons and get thier details. Search for Movies using search bar.',
      paragraphs: [
        "Application consuming themoviedb.org API. Some of the pages design is cloned from API provider's website.",
      ],
    },
  ],
  socialLinks: [
    {
      name: 'GitHub',
      icon: <GitHub fontSize='inherit' />,
      url: 'https://github.com/AleksandrRiabov',
      message: 'Follow for open-source projects',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn fontSize='inherit' />,
      url: 'https://www.linkedin.com/in/aleksandr-riabov',
      message: "Let's connect on LinkedIn",
    },
  ],
  links: [
    {
      name: 'Home',
      url: '/',
      navLink: true,
    },
    {
      name: 'Portfolio',
      url: '/portfolio',
      message: "View Alek's previous work",
      navLink: true,
    },
    {
      name: 'About',
      url: '/about',
      message: "Learn about Alek's skills",
      navLink: true,
    },
    {
      name: 'Get In Touch',
      url: '/contacts',
      message: 'Send a general message',
      navLink: false,
    },
  ],
};

export default data;
