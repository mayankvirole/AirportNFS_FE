import {useNavigate, Link} from 'react-router-dom';
import Nav from './Nav';

const Supervisor = () => {
	const navigate = useNavigate();
	
	const onClick = () =>{
		navigate("/home", { state : {user : "supervisor"}});
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
					<label for="id">ID</label>
					<input type="text" id="id" />
				</span>
				<span className='first'>
					<label for="pass">Password</label>
					<input type="password" id="pass" />
				</span>
				<button type="submit" onClick={onClick}>Login</button>
			</div>
		</div>
	)
	}
	
	export default Supervisor
	
	