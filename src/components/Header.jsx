import plane from "../assets/airplane.png";
const Header=() => {

	return (
		<nav>
			<div className='header'>
				<h1>Airport Network Flight Scheduler</h1>
				<img src={plane} alt='plane' />
			</div>
			<nav>
				<ul className='nav'>
					<li>
						<Link to="/home" >Home</Link>
					</li>
					<li>
						<Link to="/arrival">Arrival</Link>
					</li>
					<li>
						<Link to="/departure">Departure</Link>
					</li>
				</ul>
			</nav>
		</nav>
	)
}

export default Header;