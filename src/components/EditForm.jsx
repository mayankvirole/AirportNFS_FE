import {useEffect,useState} from 'react'
import "../css/SFDD.css";
import Nav from './Nav';
import {Form,Link,useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert";
import Loader from './Loader';

const EditForm=(d) => {
	const navigate=useNavigate();
	let { state } = useLocation();
	const [data,setData]=useState(state.d);
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

	const editDetails=(e) => {
		setLoading(true);
		e.preventDefault();
		const formdata=new FormData(e.target);

		const body={}
		formdata.forEach((value,property) => body[property]=value)

		body.flight_number=parseInt(data.flight_number);
		axios.post("https://major-be.onrender.com/edit-flight",body).then((res) => {
			if(res.status === 200)
			{
				swal("Flight Details Edited", "success");
				navigate("/super-view");
				setLoading(false);
			}
			else
			swal("Not edited data", "error");
		})
	}

	const Logout=() => {
		navigate("/home")
	}

	useEffect(() => {
		setData(state.d);
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
			{!loading ? <form onSubmit={editDetails}>
				<div className='frm'>
					<span>
						<label>Flight Number</label>
						<input type='number' disabled value={data.flight_number} defaultValue={data.flight_number} name='flight_number'></input>
					</span>
					<span>
						<label>Source</label>
						<input type='text' value={data.source} name='source'></input>
					</span>
					<span>
						<label>Destination</label>
						<input type='text' value={data.destination} name='destination'></input>
					</span>

					<span>
						<label>Departure</label>
						<input type='text' value={data.departure} name='departure'></input>
					</span>

					<span>
						<label>Arrival</label>
						<input type='text' value={data.arrival} name='arrival'></input>
					</span>
					<span>
						<label>Airlines</label>
						<input type='text' value={data.airlines} name='airlines'></input>
					</span>

					<span>
						<label>Halt Station</label>
						<input type='text' value={halt_station} name='halt_station'></input>
					</span>
					<span>
						<label>Halt Time</label>
						<input type='text' value={halt_time} name='halt_time'></input>
					</span>
					<span>
						<label>Duration</label>
						<input type='text' value={duration} name='duration'></input>
					</span>
					<button>Enter Delay Timing</button>
				</div>
			</form> : <Loader/>}

		</>
	)
}
export default EditForm
