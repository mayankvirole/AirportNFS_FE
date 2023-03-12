import {useState} from 'react';
import axios from "axios";
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
						<td>{data.flightNo}</td>
						<td>{"Source"}</td>
						<td>{airport}</td>
						<td>{data.Departure}</td>
						<td>{terminal}</td>
						<td>{data.duration}</td>
						<td>{"halt station"}</td>
						<td>{"halt timing"}</td>
					</tr>
				</table>
		</>
	)

}

export default ViewFlight;