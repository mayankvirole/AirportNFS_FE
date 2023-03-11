const Supervisor = () => {
	const onClick = () =>{

	}
	return (
		<div className='admin'>
			<h2>Supervisor Login</h2>

			<div className='inputs'>
				<span className='first'>
					<label for="id">ID</label>
					<input type="text" id="id" />
				</span>
				<span className='first'>
					<label for="pass">Password</label>
					<input type="password" id="pass" />
				</span>
				<button type="submit" onClick={onClick}>Login</button>
			</div>
		</div>
	)
	}
	
	export default Supervisor
	
	