import small from './images/small.webp';
import previewMedium from './images/previewMedium.webp';
import previewLarge from './images/previewLarge.webp';
import previewXL from './images/previewXL.webp';

import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

const data = {
	portfolio: [
		{
			title: 'Pet Plate',
			imgSmall: small,
			imgMedium: previewMedium,
			imgLarge: previewLarge,
			imgXl: previewXL,
			desc:
				'I was the designer and front-end developer for the initial Pet Plate website in 2015 and worked closely with the company as it grew over a period of 5 years, eventually becoming Lead Front-end Developer. By early 2020, Pet Plate had successfully raised a total investment fund of $13 million dollars.',
		},
		{
			title: 'Pet Plate',
			imgSmall: small,
			imgMedium: previewMedium,
			imgLarge: previewLarge,
			imgXl: previewXL,
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