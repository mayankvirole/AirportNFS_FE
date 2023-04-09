import '../App.css';
import plane from "../assets/airplane.png"

const Nav=() => {
	return (
		<div className='header'>
			<h1>Airport Network Flight Scheduler</h1>
			<img src={plane} alt='plane' />
		</div>
	)
}

export default Nav