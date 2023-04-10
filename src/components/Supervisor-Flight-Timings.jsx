import {useState, useEffect} from 'react';
import "../css/SFT.css";
import Nav from './Nav';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const Super=() => {
	const navigate=useNavigate();
	const [data,setData]=useState([])
	const [loading, setLoading] = useState(false);
	const Logout=() => {
		navigate("/home")
	}

	const getData=() => {
		setLoading(true);
		axios.get("https://major-be.onrender.com/flight-details").then((data) => {
			setData(data.data);
			setLoading(false);
		}).catch((err) => console.log(err));
	}

	useEffect(() => {
		getData();
	},[])
	
	return (
		<div className='super'>
			<Nav />
			<ul className='nav'>
				<li>
					<Link to="/super-view" >Flight Details</Link>
				</li>
				<li>
					<Link to="/super-flight">Flight Timings</Link>
				</li>
				<li className="logout" onClick={Logout}>
					Logout
				</li>
			</ul>
			<h2>Flight Timings</h2>

			{!loading ? <div className='data'>
				<table>
					<tr>
						<th>Flight Number</th>
						<th>Destination</th>
						<th>Source</th>
						<th>Departure</th>
						<th>Arrival</th>
						<th>Duration</th>
					</tr>
					{(data&&data.map((d) => (
						<>
							<tr>
								<td>{d.flight_number}</td>
								<td>{d.source}</td>
								<td>{d.destination}</td>
								<td>{d.departure}</td>
								<td>{d.arrival}</td>
								<td>{d.duration}</td>
							</tr>
						</>
					)))}
				</table>
			</div> : <Loader />}
		</div>)
}

export default Super;