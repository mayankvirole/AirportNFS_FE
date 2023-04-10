import {useNavigate, Link} from 'react-router-dom';
import Nav from './Nav';
import axios from "axios";
import swal from "sweetalert";
import {useState} from 'react';
const Supervisor = () => {
	const navigate = useNavigate();
	const [id, setID] = useState(0);
	const [password, setPassword] = useState("");

		
	const hCid = (e) => {
		setID(e.target.value);
	}

	const hCp = (e) => {
		setPassword(e.target.value)
	}
	const onClick = () =>{
		axios.post("https://major-be.onrender.com/login", { id, password, role : "supervisor"} ).then((res) => {
			swal("Supervisor login successful !", "success");
			navigate("/super-view");
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
			<Nav/>
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
			<h2>Supervisor Login</h2>

			<div className='inputs'>
			<span className='first'>
					<label htmlFor="literal">ID</label>
					<input type="text" id="literal" placeholder='enter supervisor id' value={id} onChange={hCid} name='id'/>
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
	
	export default Supervisor
	
	