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
					<td>1020</td>
					<td>MHA</td>
					<td>01:00</td>
					<td>ATK</td>
					<td>09:00</td>
					<td>Indigo</td>
					<td>00:10</td>
					<td>08:00</td>
				</tr>
				<tr>
					<td>1091</td>
					<td>UR</td>
					<td>04:55</td>
					<td>BHP</td>
					<td>06:55</td>
					<td>Spice Jet</td>
					<td>00:45</td>
					<td>02:00</td>
				</tr>
			</table>
		</div>)
}

export default Super;