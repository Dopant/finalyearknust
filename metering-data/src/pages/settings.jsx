import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Slider } from '../components/slider';



class settings extends React.Component{
    render() {
      return(
        <div className="body">
           <Header/>
           <div className="content">
           <Slider/>
           </div>
        </div>
    );
   }
  }
export const  Settings = Form.create()(settings);