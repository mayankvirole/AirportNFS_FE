import { useNavigate, Link} from 'react-router-dom';
import "../css/Admin.css";
import axios from 'axios';
import Nav from './Nav';
import {useState} from 'react';
import swal from "sweetalert";
import Loader from './Loader';

const Admin=() => {
	const navigate = useNavigate();
	const [id, setID] = useState();
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const hCid = (e) => {
		setID(e.target.value);
	}

	const hCp = (e) => {
		setPassword(e.target.value)
	}

	const onClick=() => {
		setLoading(true);
		axios.post("https://major-be.onrender.com/login", { id, password, role : "admin"} ).then((res) => {
			swal("Admin login successful !", "success");
			navigate("/ad-edit");
			setLoading(false);
		})
		.catch((err) => {
			setLoading(false);
			swal("login failed!", "error");
		})
	}

  const Logout = () => {
    navigate("/home")
  }
	return (
		<div className='admin'>
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
			<h2>Admin Login</h2>

			{!loading ? 
			<div className='inputs'>
				<span className='first'>
					<label htmlFor="literal">ID</label>
					<input type="text" id="literal" placeholder='Enter admin id' value={id} onChange={hCid} name='id'/>
				</span>
				<span className='first'>
					<label htmlFor="pass">Password</label>
					<input type="password" id="pass" value={password} onChange={hCp} name="password" placeholder='Enter your password'/>
				</span>
				<button type="submit" onClick={onClick}>Login</button>
			</div> : <Loader /> }
		</div>
	)
}

export default Admin

