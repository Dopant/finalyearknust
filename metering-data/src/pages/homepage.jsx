import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Node } from '../components/node';
import { Slider } from '../components/slider';
import '../styles/homepage.css';



class homepage extends React.Component{
  state = {
    nodes: [1, 2, 3 ,4]
  };
zz
    render() {
      const renderNodes = this.state.nodes.map((node, index) => <Node key={index} />);

      return(
        <div className="home-body">
        <Header onAddNode={this.handleAddNode}/>
        <div className="main">
          <Slider/>
          <div className="main-content">
            {renderNodes}
          </div>
        </div>
        </div>
    );
   }

   handleAddNode = () => {
      this.setState({
        nodes: [...this.state.nodes, 1]
      });

   };
  }
export const  Homepage = Form.create()(homepage);