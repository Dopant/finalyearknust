import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card} from 'antd';
import { ChartCard, MiniBar } from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Node } from '../components/node';
import { Slider } from '../components/slider';
import { Chart } from '../components/chart';
import { Progress } from '../components/progress';
import '../styles/nodepage.css';


class nodepage extends React.Component{
    render() {
      return(
        <div className="body">
           <Header/>
           <div className="content">
           <Slider/>

          <div className="stats-content">
          <div className="value">
          <div className="progress">
          <Progress />
          </div>
          <div style={{float: "right" ,position:"relative", bottom: "34px", right:"80px" , color:"#818181"}}>
          <h3>rate flow</h3>
          <h3>litres</h3>
          </div>
          </div>
          <div className="show-chart">
            <Chart />
            </div>

          </div>
           </div>
        </div>
    );
   }
  }
export const  Nodepage = Form.create()(nodepage);