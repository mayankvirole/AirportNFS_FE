import {useEffect,useState} from 'react'
import "../css/SFDD.css";
import Nav from './Nav';
import {Form, Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert";
import Loader from './Loader';
const Details=() => {
	const navigate=useNavigate();
	const [data,setData]=useState([]);
	const [loading, setLoading] = useState(false);
	let flight_number,
	source,
	departure,
	destination,
	arrival,
	airlines,
	duration,
	halt_station,
	halt_time;
	const getData=() => {
		setLoading(true);
		axios.get("https://major-be.onrender.com/flight-details").then((data) => {
			setData(data.data);
			setLoading(false);
		})
	}

	const editDetails = (e) => {
		e.preventDefault();
		const formdata = new FormData(e.target);

		const body = {}
    formdata.forEach((value, property) => body[property] = value)
		
		body.flight_number = parseInt(body.flight_number);
		axios.post("https://major-be.onrender.com/edit-flight",body).then((res) => {
			if(res.status === 200)
			swal("data edited");
		
			navigate("/super-view");
		})
	}

	const Logout=() => {
		navigate("/home")
	}

	useEffect(() => {
		getData()
	},[])

	return (
		<>
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
			<h1>Flight Details </h1>
			
			{!loading ? <div className='main'>
				<table>
					<tr>
						<th>Flight Number</th>
						<th>Destination</th>
						<th>Source</th>
						<th>Departure</th>
						<th>Arrival</th>
						<th>To Enter Delay Time</th>
					</tr>
					{(data&&data.map((d) => (
						<>
							<tr>
								<td>{d.flight_number}</td>
								<td>{d.source}</td>
								<td>{d.destination}</td>
								<td>{d.departure}</td>
								<td>{d.arrival}</td>
								<td><Link to='/edit-form' state={{ d : d}}>Yes</Link></td>
							</tr>
						</>
					)))}
				</table>
			</div> : <Loader />}
		</>)
}

export default Details