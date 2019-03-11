import React from 'react';
import { Form, Input, Tooltip, Progress} from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CircularProgressBar } from '../components/circularProgress';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/node.css';

// class node extends React.Component{
//     render() {
//       return(
//         <div className="node">
//               <div>

//               </div>
//         </div>
//     );
//    }
//   }
// export const  Node = Form.create()(node);




class node extends React.Component{

  constructor(props) {
    super(props);
  
    this.state = {
      percentage: ''
    };
  
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }
  
  handleChangeEvent(event) {
    this.setState({
      percentage: event.target.value
    });
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
		const {  Flowrate: Flowrate} = this.state;
		
		var config = {
				headers:{
					'Content-Type' : 'application/json'
				}
		};

		// var credentials = {
		// 	'Username': 'Dopant',
		// 	'Password' : '1105'
		// };
		fetch('http://localhost:5000/getNode', {
			Flowrate
		}).then(res => {
			if(res.status === 201){
        console.log(this.data.Flowrate)
				console.log('Fetch success');
			}
			else{
        console.log(this.data.Flowrate)
				console.log("Fetch error")
			}

		}).catch(console.log);
	};
  
  render() {
  return(

  <div className="node">
    <h3 className="text-center" style={{margin:"5px 10px" }}><Link to="/nodepage" style={{listStyle:"none"}}>Node Name</Link></h3>
  <div className="text-center" id="app">
  <CircularProgressBar
            strokeWidth="10"
            sqSize="200"
            percentage={this.state.percentage}/>
          <div>
            <input 
              id="progressInput" 
              type="range" 
              min="0" 
              max="100" 
              step="1"
              value={this.state.percentage}
              onChange={this.onSubmit}
              style={{bottom:"20px", position:"relative"}}
              />
          </div>
  </div>
  </div>
);
 }
}

export const  Node = Form.create()(node);