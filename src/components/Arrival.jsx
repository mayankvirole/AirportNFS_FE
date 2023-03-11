import "../css/Arrival.css";
import {useEffect,useState} from 'react';
const Arrival=() => {

	const [airport, setAirport] = useState('');
	const [airports,setAirports]=useState([]);
	const [terminals,setTerminals]=useState([]);
	const [data, setData] = useState([]);
	const [terminal, setTerminal] = useState('');

	const onClick = () => {

	}

	const getAirports=() => {

	}

	const getTerminals=() => {

	}

	const getData = () => {

	}
	useEffect(() => {
		getAirports();
		getTerminals();
	},[]);

	return (
		<div className='arr'>
			<h2>Flight Arrival Timings</h2>

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

			<button type='submit' onClick={onClick} >Search</button>
			{ terminal && airport && data &&
			<>
				<table>
					<tr>
						<th>Flight Number</th>
						<th>Destination</th>
						<th>Arrival</th>
						<th>Airline</th>
						<th>Duration</th>
					</tr>
					<tr>
						<td>{data.flightNo}</td>
						<td>{airport}</td>
						<td>{data.arrival}</td>
						<td>{terminal}</td>
						<td>{data.duration}</td>
					</tr>
				</table>
			</>}
		</div>
	)
}

export default Arrival

