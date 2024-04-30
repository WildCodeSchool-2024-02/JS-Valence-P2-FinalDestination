import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import finalDestinationLogo from "../assets/images/final-destination-logo.png";
import iconInstagram from"../assets/images/icons/icons8-instagram.svg";
import iconTwitter from"../assets/images/icons/icons8-twitter.svg";
import iconYoutube from"../assets/images/icons/icons8-youtube.svg";

function Navbar() {
	return (
		<nav className={styles.nav}>
			<NavLink to='/'><img className={styles.logo} src={finalDestinationLogo} alt="final-destination" /></NavLink>
			<ul>
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='/destinations'>Destination</NavLink></li>
				<li><NavLink to='contact'>About us</NavLink></li>
			</ul>

			<ul className='socialMedia'>
				<li><NavLink to=""><img src={iconYoutube} alt='icon-youtube'/></NavLink></li>
				<li><NavLink to=""><img src={iconTwitter} alt='icon-twitter'/></NavLink></li>
				<li><NavLink to=""><img src={iconInstagram} alt='icon-instagram'/></NavLink></li>
			</ul>
		</nav>
	)
}

export default Navbar;