import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactToPrint from "react-to-print";
import '../styles/report.css'



class reportsheet extends React.Component{
    render() {
      return(
          <div className="sheet">

          <table width="100%">
              <tr>
                 <th rowSpan="3">Node Information</th>
                 <td>Node Name :   All Nodes</td>
              </tr>
              <tr>
              <td>Location:   (none)</td>
              </tr>
              <tr>
              <td>Customer:   (none)</td>
              </tr>


               <tr>
                 <th rowSpan="2">Water Usage</th>
                 <td>Total Usage(ltrs) :   500</td>
              </tr>
              <tr>
              <td>Flow Rate(ltrs/sec) :   600</td>
              </tr>

              <tr>
                 <th rowSpan="4">Bills</th>
                 <td>Current Bill :   600</td>
              </tr>
              <tr>
              <td>Owing :   500</td>
              </tr>
              <tr>
              <td>Additonal Charges:  30</td>
              </tr>
              <tr>
              <td style={{backgroundColor:"rgb(197, 197, 197)" , color: "black"}}>Total:   5000</td>
              </tr>
              
              </table>

              

              </div>
        
    );
   }
  }
export const  Reportsheet = Form.create()(reportsheet);