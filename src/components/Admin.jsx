import {Link, useLocation} from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import "../css/Admin.css";

const Admin=() => {
	const navigate = useNavigate();
	const onClick=() => {
		navigate("/ad-main");
	}
	return (
		<div className='admin'>
			<h2>Admin Login</h2>

			<div className='inputs'>
				<span className='first'>
					<label htmlFor="literal">ID</label>
					<input type="text" id="literal" />
				</span>
				<span className='first'>
					<label htmlFor="pass">Password</label>
					<input type="password" id="pass" />
				</span>
				<button type="submit" onClick={onClick}>Login</button>
			</div>
		</div>
	)
}

export default Admin

