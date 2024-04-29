import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
	return (
		<nav className={styles.nav}>
			<p><NavLink to='/'> LOGO/</NavLink></p>
			<ul>
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='/destination'>Destination</NavLink></li>
				<li><NavLink to='contact'>About us</NavLink></li>
			</ul>

			<ul className='socialMedia'>
				<li><NavLink to="">youtube</NavLink></li>
				<li><NavLink to="">facebook</NavLink></li>
				<li><NavLink to="">insta</NavLink></li>
			</ul>
		</nav>
	)
}

export default Navbar;