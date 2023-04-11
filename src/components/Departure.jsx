import {Link} from 'react-router-dom';
import "../css/Arrival.css";
import {useEffect,useState} from 'react';
import Nav from './Nav';
import axios from  "axios";
import Loader from './Loader';
import swal from "sweetalert";

const Departure=() => {

	const [airline, setAirline] = useState('');
	const [source, setSource]= useState('');
	const [data,setData]=useState([]);
	const [terminal,setTerminal]=useState('');

	const onClick=() => {
		axios.post("https://major-be.onrender.com/get-flight-by-airport",{source,airlines: airline})
			.then((res) => {
				console.log(res.data)
				setData(res.data);
				if(res.data.length<=1)
					swal("Error","Data not found","error")
			})
	}

	const handleChangeA = (e) => {
		setAirline(e.target.value);
	}

	const handleChangeD = (e) => {
		setSource(e.target.value);
	}

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
				<label for="air">Airlines</label>
				<input value={airline} onChange={handleChangeA}></input>

				<label for="">Source</label>
				<input value={source} onChange={handleChangeD}></input>
			</span>

			<button type='submit' onClick={onClick} >Search</button>
			{
				<>
					{data&&data.length>0&&
						<table>
							<tr>
								<th>Flight Number</th>
								<th>Destination</th>
								<th>Departure</th>
								<th>Airline</th>
								<th>Source</th>
							</tr>

							{(data&&data.map((d) => (
								<>
									<tr>
										<td>{d.flight_number}</td>
										<td>{d.destination}</td>
										<td>{d.departure}</td>
										<td>{d.airlines}</td>
										<td>{d.source}</td>
									</tr>
								</>
							)))}
						</table>
					}
				</>}
		</div>
	)
}

export default Departure

