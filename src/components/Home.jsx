import {Outlet,Link,useLocation,Route,Routes,} from "react-router-dom";
import "../css/Home.css";
import adm from "../assets/admin.png";
import sup from "../assets/supervisor.png";
import {useEffect,useState} from 'react';
import Admin from './Admin';
import Supervisor from './Supervisor';
const Home=() => {
	// let { state} = useLocation();
	const [disable,setDisable]=useState(false)


	const toggleDisable=() => {
		setDisable(!disable);
	}
	// useEffect(() => {
	// 	if(state.toggle) setDisable(!state.toggle);
	// },[]);
	return (
		<>
			<div className='home'>
				<div className='tab'>
					<img src={adm} alt='admin' />
					<Link to='/admin' onClick={toggleDisable}>Admin</Link>
				</div>

				<div className='tab'>
					<img src={sup} alt='supervisor' />
					<Link to='/supervisor' onClick={toggleDisable}>Supervisor</Link>
				</div>
			</div>
		</>
	)
}

export default Home

