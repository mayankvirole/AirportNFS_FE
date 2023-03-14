import {useState} from 'react';
import "../css/AEFD.css";
const Flight = () => {

	const [data, setData] = useState({});
return (<>
	<h1>Flight Details</h1>

	<div className='editor'>
		<span>
			<label>Flight Number</label>
			<input value={data.flightNo} disabled></input>
		</span>

		<span>
		<input type='text' placeholder='Source'></input>
		<input  type='text' placeholder='Destination'></input>
		<input type='text' placeholder='Airlines'></input>
		</span>
		<span>
			<label>Departure (Format 24 hours)</label>
			<input id='dep'></input>

			<label htmlFor='arr'>Arrival (Format 24 hours)</label>
			<input id='arr'></input>
		</span>

		<button type='submit'>Calculate total Duration</button>
	</div>
</>)
}

export default Flight;