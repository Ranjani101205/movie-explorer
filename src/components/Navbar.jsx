import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<header className="navbar">
			<Link className="brand" to="/">
				<span className="brand-mark" aria-hidden="true" />
				Movie Explorer
			</Link>
			<Link className="nav-link" to="/">Movies</Link>
		</header>
	)
}

export default Navbar
