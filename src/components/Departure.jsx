import {Link} from 'react-router-dom';
import "../css/Arrival.css";
import {useEffect,useState} from 'react';
import Nav from './Nav';

const Departure=() => {

	const [airport, setAirport] = useState('');
	const [airports,setAirports]=useState([]);
	const [terminals,setTerminals]=useState([]);
	const [data, setData] = useState([]);
	const [terminal, setTerminal] = useState('');
	
	const onClick = () => {

	}

	const getData = () => {

	}
	useEffect(() => {

	},[]);

	return (
		<div className='arr'>
			<nav>
					<Nav />
					<nav>
						<ul className='nav'>
							<li>
								<Link to="/home">Home</Link>
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
			<h2>Flight Departure Timings</h2>

			<span className='inner'>
				<label for="air">Airport</label>
				<select id='air'>
					<option selected value={null}>Select Airport</option>
					{airports.map((air) => {<option value={air.value}>{air.name}</option>})}
				</select>
			</span>
			<span className='inner'>
				<label for="ter">Terminal</label>
				<select id='ter'>
					<option selected value={null}>Select Terminal</option>
					{terminals.map((ter) => {<option value={ter.value}>{ter.name}</option>})}
				</select>
			</span>

			{/* <button type='submit' onClick={onClick} >Search</button> */}
			{ 
			<>
				<table>
					<tr>
						<th>Flight Number</th>
						<th>Destination</th>
						<th>Departure</th>
						<th>Airline</th>
						<th>Duration</th>
					</tr>
					<tr>
						<td>1099</td>
						<td>Raja Bhoj Airport</td>
						<td>10:45</td>
						<td>2A</td>
						<td>02:00</td>
					</tr>
				</table>
			</>}
		</div>
	)
}

export default Departure

