import {Link} from 'react-router-dom';
import "../css/Arrival.css";
import {useEffect,useState} from 'react';
import Nav from './Nav';
import axios from  "axios";
import Loader from './Loader';

const Arrival=() => {

	const [airline, setAirline] = useState('');
	const [destination, setDestination]= useState('');
	let [data, setData] = useState([]);
	const [arrayAirlines, setA1] =useState([]);
	const [arrayDestination, setA2] =useState([]);
	const [loading, setLoading] = useState(false);

	const handleChangeA = (e) => {
		setAirline(e.target.value);
	}

	const handleChangeD = (e) => {
		setDestination(e.target.value);
	}

	const onClick = () => {
		axios.post("https://major-be.onrender.com/get-by-airport", { destination, airlines : airline})
		.then((res) => { 
			console.log(res.data)
		})
	}

	const getData = () => {
		setLoading(true);
		axios.get("https://major-be.onrender.com/flight-details").then((res) => {
			setData(res.data);
			setLoading(false);
		})
	}

	const setArray = () => {
		let array = data.map((d) =>d.airlines)
		setA1(()=>{
			let a1 = array;
			setA1(a1);
		});
		array = data.map((d) => d.destination)
		setA2(array); 
	}
	console.log(arrayAirlines);
	useEffect(() => {
		getData()
	},[]);

	useEffect(() => {
		setArray()
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
			<h2>Flight Arrival Timings</h2>

			{!loading ? 
			<span className='inner'>
				<label for="air">Airport</label>
				<select id='air' onChange={handleChangeA} value={destination}>
					<option value="" >Select an airport</option>
					{arrayAirlines.map((d) => { 
					return <option value={d.destination}>{d.destination}</option>})}
				</select>

				<label for = "">Terminal</label>
				<select onChange={handleChangeD} value={airline} >
					<option value="" >Select an airline</option>
					{arrayDestination.map((d) => { 
					return <option value={d.airlines}>{d.airlines}</option>})}
				</select>
			</span> : <Loader />}

			<button type='submit' onClick={onClick} >Search</button>
			
			<>
				{ arrayAirlines && arrayAirlines.length >0 && 
				<table>
					<tr>
						<th>Flight Number</th>
						<th>Destination</th>
						<th>Arrival</th>
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
				}		
			</>
		</div>
	)
}

export default Arrival

