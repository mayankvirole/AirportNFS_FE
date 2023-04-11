import {Link} from "react-router-dom";
import "../css/Home.css";
import adm from "../assets/admin.png";
import sup from "../assets/supervisor.png";
import Nav from './Nav';
const Home=() => {

	return (
		<>
			<div className='home'>
				<nav>
					<Nav />
					<nav>
						<ul className='nav'>
							<li>
								<Link to="/home">Home</Link>
							</li>
							<li>
								<Link to="/arrival">Arrival Timings</Link>
							</li>
							<li>
								<Link to="/departure">Departure Timings</Link>
							</li>
						</ul>
					</nav>
				</nav>
				<div className='inner'>
					<div className='tab'>
						<img src={adm} alt='admin' />
						<Link to='/admin' >Admin</Link>
					</div>

					<div className='tab'>
						<img src={sup} alt='supervisor' />
						<Link to='/supervisor'>Supervisor</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home

