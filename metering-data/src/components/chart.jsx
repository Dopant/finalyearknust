import React , {Component} from 'react';
import {Bar , Line , Pie } from 'react-chartjs-2';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';



class chart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Node 1' , 'Node 2' , 'Node 3', 'Node 4'],
                datasets:[
                    {
                        label: 'Nodes',
                        data:[
                            417594,
                            181045,
                            253060,
                            106519
                        ],

                        backgroundColor:[
                            '#151719',
                            '#151719',
                            '#151719',
                            '#151719',
                            '#151719',
                            '#151719'

                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        LegendPosition: 'right'
    }
    render(){
        return(
            <div className="chart">
            <Line
            data={this.state.chartData}
            options={{
                title:{
                    display:this.props.displayTitle,
                    text:'All Nodes',
                    fontSize:25
                },
                legend:{
                    display:this.props.displayLegend,
                    position:'right'
                }
            }}
            
            />
            
            </div>
        );
    }
}
export const  Chart = Form.create()(chart);