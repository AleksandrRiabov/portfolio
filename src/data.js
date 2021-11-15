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

//
//Portfolio => desc Recomended 300 characters.

const data = {
	portfolio: [
		{
			name: 'export-planning-tool', 
			title: 'Export Planning Tool',
			subtitle: ' subtitle',
			featured: true,
			url: 'https://guarded-savannah-03210.herokuapp.com/',
			github: 'https://github.com/AleksandrRiabov/fs-planning-tool',
			technologies: [],
			imgSmall: pToolSmall,
			imgMedium: pToolMedium,
			imgLarge: pToolLarge,
			imgXl: pToolXL,
			desc:
				`MERN stack Application designed to simplify the process of estimating the required number of trailers. All estimates are based on the average of the five previous weeks, or specific days of the week. With app's charts, you can easily identify seasonal orders spikes, and be prepared for the growing demand.`,
		},
		{
			name: 'movies', 
			title: 'Movies App',
			subtitle: ' subtitle',
			featured: false,
			url: 'https://aleksandrriabov.github.io/movies/', 
			github: 'https://github.com/AleksandrRiabov/movies',
			technologies: ["ReactJs", "Responsive CSS", "MaterialUI", "AJAX", "GitHub", "react-router-dom"],
			imgSmall: moviesSmall,
			imgMedium: moviesMedium,
			imgLarge: moviesLarge,
			imgXl: moviesXL,
			desc:
				'I was the designer and front-end developer for the initial Pet Plate website in 2015 and worked closely with the company as it grew over a period of 5 years, eventually becoming Lead Front-end Developer. By early 2020, Pet Plate had successfully raised a total investment fund of $13 million dollars.',
		},
	],
	socialLinks: [
		{
			name: 'GitHub',
			icon: <GitHub fontSize="inherit" />,
			url: 'https://github.com/AleksandrRiabov',
			message: 'Follow for open-source projects',
		},
		{
			name: 'LinkedIn',
			icon: <LinkedIn fontSize="inherit" />,
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