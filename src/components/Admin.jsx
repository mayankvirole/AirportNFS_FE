import { useNavigate, Link} from 'react-router-dom';
import "../css/Admin.css";
import axios from 'axios';
import Nav from './Nav';
import {useState} from 'react';
import swal from "sweetalert";
const Admin=() => {
	const navigate = useNavigate();
	const [id, setID] = useState(0);
	const [password, setPassword] = useState("");
	
	const hCid = (e) => {
		setID(e.target.value);
	}

	const hCp = (e) => {
		setPassword(e.target.value)
	}

	const onClick=() => {
		axios.post("https://major-be.onrender.com/login", { id, password, role : "admin"} ).then((res) => {
			swal("Admin login successful !", "success");
			navigate("/ad-edit");
		})
		.catch((err) => {
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

			<div className='inputs'>
				<span className='first'>
					<label htmlFor="literal">ID</label>
					<input type="text" id="literal" placeholder='enter admin id' value={id} onChange={hCid} name='id'/>
				</span>
				<span className='first'>
					<label htmlFor="pass">Password</label>
					<input type="password" id="pass" value={password} onChange={hCp} name="password"/>
				</span>
				<button type="submit" onClick={onClick}>Login</button>
			</div>
		</div>
	)
}

export default Admin

