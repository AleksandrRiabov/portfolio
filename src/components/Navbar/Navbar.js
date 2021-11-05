import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../Menu/Menu';
import data from '../../data';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { pathname } = useLocation();

	return (
		<div className="navbar">
			<div className="container">
				<div className="navbarInner">
					<div className="navbarLeft">
						<Link to="/">
							<div className="navbarLogo">A Riabov</div>
						</Link>
					</div>
					<div className="navbarRight">
						<ul className="navbarLinks">
							{data.links.map(({ url, name, navLink }) => {
								if (navLink) {
									return (
										<Link to={url}>
											<li className={ pathname === url ? 'navbarActive' : 'navLink'}>
												{name}
											</li>
										</Link>
									);
								} 
								return null
							})}
							<Link to="/contacts">
								<li className="navbarContacts">Get In Touch</li>
							</Link>
						</ul>
						<div className="navbarMobile">
							<div onClick={() => setMenuOpen(true)} className="navbarBurger">
								<MenuIcon fontSize="inherit" />
							</div>
							{menuOpen && <Menu pathname={pathname} setMenuOpen={setMenuOpen} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;