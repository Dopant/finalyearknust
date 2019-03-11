import React from 'react';
import {
	Form,
	Input,
	Tooltip,
	Icon,
	Select,
//	Row,
//	Col,
//	Checkbox,
//	Button,
//	AutoComplete,
//	Card,
//	Progress
} from 'antd';
//import { Menu, Switch } from 'antd';
//import { Redirect } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/loginpage.css';

async function post(url, data) {
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const resdata = await res.json();
		return resdata;
	} catch (error) {
		return error;
	}
}

class login extends React.Component {
	constructor() {
		super();
		this.state = {
			UserName: '',
			Password: ''
		};
	}

	onChange = e => {
		e.persist();
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	onSubmit = e => {
		e.persist();
		e.preventDefault();
		console.log(e);
		const { UserName: userName, Password: password } = this.state;
		
		var config = {
				headers:{
					'Content-Type' : 'application/json'
				}
		};

		// var credentials = {
		// 	'Username': 'Dopant',
		// 	'Password' : '1105'
		// };
		post('http://localhost:5000/login', {
			userName, password
		}).then(res => {
			if(res.status === 201){
				this.props.history.push('/homepage');
			}
			else{
				setTimeout(function(){ alert(res.message)}, 100);
				this.props.history.push('/login');
			}

		}).catch(console.log);

/*
		axios
			.post('http://localhost:5000/login', {UserName, Password}, config)
			//.then(data => console.log(data))
			
			.then((result) => {
				console.log(result)
			//	console.log("The function didnt work");
				//console.log(result.data);
				if(result.data.status === 201)
				{
					this.props.history.push('/homepage');
				}
				else 
				{
					setTimeout(function(){ alert(result.data.message)}, 100);
					this.props.history.push('/');
				}
				
				
				
			}
		
	)
			
			.catch(error => console.log(error));
			*/
          
	};
	
	render() {
		return (
			<div className="body">
				<div className="login-content">
					<form onSubmit={this.onSubmit}>
						<h2>Login </h2>
						<div className="email">
							<input
								type="text"
								placeholder="input"
								id="UserName"
								name="UserName"
								onChange={this.onChange}
								value={this.state.UserName}
							/>
						</div>

						<div className="password">
							<input
								type="password"
								placeholder="Password"
								id="Password"
								name="Password"
								onChange={this.onChange}
								value={this.state.Password}
							/>
						</div>

						<div className="checkbox">
							<input type="checkbox" id="checkbox" />
							Remember me
						</div>
						<div className="button">
							<button type="submit" id="button" onClick={this.onSumit}>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export const Login = Form.create()(login);