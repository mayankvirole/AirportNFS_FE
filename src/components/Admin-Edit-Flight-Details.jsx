import "../css/AEFD.css";
import {Link,useNavigate} from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';
import swal from 'sweetalert';
const Flight=() => {

	const navigate=useNavigate();
	let flight_number,
		source,
		departure,
		destination,
		arrival,
		airlines;

	const onClick=(e) => {
		e.preventDefault();
		const formdata=new FormData(e.target);

		const body={}
		formdata.forEach((value,property) => body[property]=value)

		body.flight_number=parseInt(body.flight_number);
		axios.post("https://major-be.onrender.com/add-flight-details",body).then((res) => {
			swal("Flight details added !")
			navigate("/ad-edit");
		})
	}

	const Logout=() => {
		navigate("/home")
	}
	return (
		<>
			<Nav />
			<ul className='nav-admin'>
				<li>
					<Link to="/ad-edit" >Edit Flight Details</Link>
				</li>
				<li>
					<Link to="/ad-info">Airport Supervisor Information</Link>
				</li>
				<li>
					<Link to="/ad-view">View Flight Details</Link>
				</li>
				<li className="logout" onClick={Logout}>
					Logout
				</li>
			</ul>

			<div className='editor'>
				<h1>Flight Details</h1>
				<form id='frm' onSubmit={onClick}>
					<span>
						<label>Flight Number</label>
						<input value={flight_number} name='flight_number' placeholder='E.g. 1001'></input>
					</span>

					<span className='side'>
						<input type='text' placeholder='Source' value={source} name='source'></input>
						<input type='text' placeholder='Destination' value={destination} name='destination'></input>
						<input type='text' placeholder='Airlines' value={airlines} name='airlines'></input>
					</span>

					<span>
						<label htmlFor='arr'>Arrival (Format 24 hours)</label>
						<input id='arr' value={arrival} name='arrival' placeholder='02:00'></input>

						<label>Departure (Format 24 hours)</label>
						<input id='dep' value={departure} name='departure' placeholder='01:00'></input>
					</span>

					<button type='submit' >Add Flight Details</button>
				</form>
			</div>
		</>)
}

export default Flight;