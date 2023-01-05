import { useState } from 'react'


function Register() {
	

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeat_password, setrepeat_password] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
                repeat_password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			alert("Register susscessfully");
		}
	}

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name" 
                    name="name" 
                    required
				/>
				<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="youremail@gmail.com" 
                    name="email" 
                    required
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
                    name="password" 
                    required
				/>
				<br />
                <input
					value={repeat_password}
					onChange={(e) => setrepeat_password(e.target.value)}
					type="password"
					placeholder="repeat_password"
                    name="repeate_password" 
                    required
				/>
				<br />
				<button type="submit" className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4" >Register</button>
			</form>
		</div>
	)
}

export default Register;