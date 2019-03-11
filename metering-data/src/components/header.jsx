import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/header.css'



class header extends React.Component{
    render() {
      return(
        <header className="header">

        <div>
        <h1>METERING DATA</h1>
        </div>

        <div className="search">
        <input type= "search" name="search" placeholder="  search" id="search"/>
        </div>

        <div className="icons">
            <Icon type="mail" style={{paddingLeft:"20px" , backgroundColor:"white", fontSize:"17px"}}/>
            <Icon type="user" style={{paddingLeft:"20px" , backgroundColor:"white", fontSize:"17px"}}/>
            <Icon type="plus" style={{paddingLeft:"20px" , backgroundColor:"white", fontSize:"17px"}} onClick={this.props.onAddNode}/>
            </div>
    </header>
    );
   }
  }
export const  Header = Form.create()(header);