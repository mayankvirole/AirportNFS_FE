import {useState} from 'react';
import "../css/SFT.css";
const Super=() => {

	const [data,setData]=useState([{}])

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
					<td>1019</td>
					<td>DEL</td>
					<td>11:00</td>
					<td>LUC</td>
					<td>04:00</td>
					<td>Air India</td>
					<td>00:05</td>
					<td>05:05</td>
				</tr>
				<tr>
					<td>1019</td>
					<td>DEL</td>
					<td>11:00</td>
					<td>LUC</td>
					<td>04:00</td>
					<td>Air India</td>
					<td>00:05</td>
					<td>05:05</td>
				</tr>
				<tr>
					<td>1019</td>
					<td>DEL</td>
					<td>11:00</td>
					<td>LUC</td>
					<td>04:00</td>
					<td>Air India</td>
					<td>00:05</td>
					<td>05:05</td>
				</tr>
			</table>
		</div>)
}

export default Super;