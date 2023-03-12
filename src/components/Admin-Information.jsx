import '../css/ASI.css';

const Information=() => {
	return (<>

		<h1>Airport Supervisor Information</h1>

		<div className='info'>

			<span>
				<label htmlFor='super-id'>ID</label>
				<input type='text' id="super-id"></input>
			</span>

			<span>
				<label htmlFor='name'>Name</label>
				<input id='name' type='text'></input>
			</span>
			<span>
				<label htmlFor='airport'>Airport</label>
				<input type='airport' id='airport'></input>
			</span>
			<span>
				<label htmlFor='mobile'>Mobile Number</label>
				<input type='number' id='mobile'></input>
			</span>
			<span>
				<label htmlFor='email'>Email ID</label>
				<input id='email' type='email'></input>
			</span>
			<button type='submit'>Add Supervisor Information </button>
		</div>

	</>)
}

export default Information;