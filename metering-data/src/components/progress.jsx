import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class LinearDeterminate extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="{classes.root}">
        <LinearProgress variant="determinate" value={this.state.completed} />
        <br />
        <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
      </div>
    );
  }

  
	onSubmit = e => {
		e.persist();
		e.preventDefault();
		console.log(e);
		const { UserName, Password } = this.state;

		axios
			.get('http://localhost:3000//getNode', {  })
			//.then(data => console.log(data))
			
			.then((result) => {
				console.log(result);
				console.log(result.data);
			
				
				
				
			})
			.catch(error => console.log(error));
          
	};
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const  Progress = Form.create()(LinearDeterminate);