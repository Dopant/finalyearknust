import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Slider } from '../components/slider';



class about extends React.Component{
    render() {
      return(
        <div className="body">
           <Header/>
           <div className="content">
           <Slider/>

           <div className="text" style={{
               
               backgroundColor:"white",
               width:"1030px",
               height:"570px",
               marginLeft:"280px",
               top:"110px",
               position:"relative"
           }}>
           <h1> Remote Metering Data</h1>
           
           <p>GROUP MEMBERS</p>
           <p> 1.	EMMANUEL OWUSU AFREYIE</p>
            <p>2.	GIDEON ASSAFUAH</p>
           <p> 3.	EDEM AHADZI</p>

           <p>
           Metering data is an electronic water meter that is used in monitoring meter readings.<br/> This device is supposed to increase efficiency in our water billing system. The device tackles a lot of challenges that we face in our existing water billing meters. <br/>These challenges include; difficulty in monitoring meter readings in various houses, human errors when meter readings are manually entered into billing systems, <br/>difficulty in monitoring the consumption levels and patterns among consumers and difficulty in calculating of bills.
            </p>

               </div>
           </div>
        </div>
    );
   }
  }
export const  About = Form.create()(about);