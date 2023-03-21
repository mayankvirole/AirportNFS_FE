import {useEffect,useState} from 'react'
import "../css/SFDD.css";

const Details=() => {

	const [data,setData]=useState([
		{flightNo: 1009,dest: "Goa",departure: "05:00",arrival: "09:05"}
	]);
	const [visible,setVisible]=useState(false);
	const getData=() => {

	}

	const openForm=() => {
		setVisible(!visible);
	}

	useEffect(() => {

		getData();
	},[])
	return (
		<>
			<h1>Flight Details</h1>

			{data.map((d) => (
				<div className='main'>
					<table>
						<tr>
							<th>Flight Number</th>
							<th>Destination</th>
							<th>Departure</th>
							<th>Arrival</th>
							<th>To Enter Delay Time</th>
						</tr>
						<tr>
							<td>{d.flightNo}</td>
							<td>{d.dest}</td>
							<td>{d.departure}</td>
							<td>{d.arrival}</td>
							<td id="active" onClick={openForm}>Yes</td>
						</tr>
					</table>

					{visible&&(
						<form>
							<span>
								<label>Flight Number</label>
								<input type='number' disabled value={d.flightNo}></input>
							</span>
							<span>
								<label>Source</label>
								<input type='text'></input>
							</span>
							<span>
								<label>Destination</label>
								<input type='text'></input>
							</span>

							<span>
								<label>Departure</label>
								<input type='text'></input>
							</span>

							<span>
								<label>Arrival</label>
								<input type='text'></input>
							</span>
							<span>
								<label>Airlines</label>
								<input type='text'></input>
							</span>

							<span>
								<label>Halt Station</label>
								<input type='text'></input>
							</span>
							<span>
								<label>Halt Time</label>
								<input type='text'></input>
							</span>
							<span>
								<label>Duration</label>
								<input type='text'></input>
							</span>
							<button>Enter Delay Timing</button>
						</form>)}
				</div>))}



		</>)
}

export default Details