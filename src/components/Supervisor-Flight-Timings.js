import {useState} from 'react';
import "../css/SFT.css";
const Super=() => {

	const [data, setData] = useState([{}])

	return (
	<div className='super'>

		<h2>Flight Timings</h2>

		<table>
			<tr>
				<th>Flight Number</th>
				<th>Source</th>
				<th>Departure</th>
				<th>Destination</th>
				<th>Arrival</th>
				<th>Airline</th>
				<th>Delay</th>
				<th>Duration</th>
			</tr>
			<tr>
				<td>{data.flightNo}</td>
				<td>{"Source"}</td>
				<td>{data.Departure}</td>
				<td>{data.destination}</td>
				<td>{data.arrival}</td>
				<td>{data.airline}</td>
				<td>{data.delay}</td>
				<td>{data.duration}</td>
			</tr>
		</table>
	</div>)
}

export default Super;