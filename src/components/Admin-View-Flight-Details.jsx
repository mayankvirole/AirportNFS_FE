import {useState} from 'react';
import axios from "axios";
import "../css/AVFD.css"

const ViewFlight = () => {

	const [ data, setData] = useState([]);
	const getDetails = () => {
			//api call
	}


	return (
		<>
		<h1>
			View Flight Details
		</h1>

		<label htmlFor='search'>Flight Number</label>
		<input type='text' id='search'></input>

		<div className='data'>
		<table>
					<tr>
						<th>Flight Number</th>
						<th>Source</th>
						<th>Destination</th>
						<th>Departure</th>
						<th>Airline</th>
						<th>Duration</th>
						<th>Halt Station</th>
						<th>Halt Time</th>
					</tr>
					<tr>
						<td>1019</td>
						<td>DEL</td>
						<td>IG</td>
						<td>9:05</td>
						<td>Air India</td>
						<td>03:05</td>
						<td>BEN</td>
						<td>11:05</td>
					</tr>
					<tr>
						<td>1006</td>
						<td>MUM</td>
						<td>FR</td>
						<td>04:33</td>
						<td>Indigo</td>
						<td>05:00</td>
						<td>HAR</td>
						<td>09:40</td>
					</tr>
				</table>
				</div>
		</>
	)

}

export default ViewFlight;