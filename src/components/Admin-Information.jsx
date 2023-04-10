import {Link, useNavigate} from 'react-router-dom';
import '../css/ASI.css';
import Nav from './Nav';
import axios from 'axios';
import swal from 'sweetalert';
const Information=() => {
	const navigate = useNavigate();
	const Logout = () => {
    navigate("/home")
  }
	let name, airport, password;

	const onClick = (e) => {
		e.preventDefault();
		const formdata = new FormData(e.target);

		const body = {}
    formdata.forEach((value, property) => body[property] = value)
		console.log(body);
		axios.post("https://major-be.onrender.com/register-supervisor", body).then ((res) => {
			console.log("registered supervisor", res);
			swal("registered supervisor");
			navigate("/ad-edit");
		})
	}
	return (<>
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
		
		<div className='info'>
		<h1>Airport Supervisor Information</h1>
		<form id='frm' onSubmit={onClick}>
			<span>
				<label htmlFor='name'>Name</label>
				<input id='name' type='text' value={name} name='name'></input>
			</span>
			<span>
				<label htmlFor='airport'>Airport</label>
				<input type='text' id='airport' value={airport} name='airport'></input>
			</span>
			<span>
				<label htmlFor='password'>Password</label>
				<input type="password" id='password' value={password} name='password'></input>
			</span>
			<button type='submit'>Add Supervisor Information </button>
			</form>
		</div>

	</>)
}

export default Information;