import React, {Component} from 'react'
import {
    AppRegistry,
    View,
    Text,
    Button
} from 'react-native';
//import {steps} from '../components/Steps'
import ChatBot from 'react-native-chatbot';
import {chatRef} from '../config/database';
import styles from '../components/stylesheet';
const steps = [ 
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id:'1',
      message: 'Would you mind telling us your personal Information  ?',
      trigger: '2',
    },
    {
        id: '2',
        message: 'Would you mind telling us your first name  ?',
        trigger: '3'
    },
    {
        id: '3',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please Write your first Name';
            }
            return true;
        },
        trigger: '4'
    },
    {
        id: '4',
        message: 'Would you mind telling us your second name  ?',
        trigger: '5'
    },
    {
        id: '5',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please Write your second Name';
            }
            return true;
        },
        trigger: '6'
    },
    {
        id: '6',
        message:'Please tell me your Email id',
        trigger: '7'
    },
    {
        id: '7',
        user: true,
        validator:(value)=>{
            var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(value.match(regex)){
                return true;
            }
            return 'Please Write your Email id';
        },
        trigger: '8'
    },
    {
        id: '8',
        message: 'Please write your Mobile number',
        trigger: '9'
    },
    {
        id: '9',
        user: true,
       /* validator:(value)=>{
            //var regex=/^[0]?[789]\d{9}$/;
            var regex=/^(^$)/;
            if(value.match(regex)){
                return true;
            }
            return 'Please Write your valid Mobile Number';
        },*/
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please Write your Mobile Number ';
            }
            return true;
        },
        trigger: '10'
    },
    {
        id: '10',
        message: 'Please tell me removal type?',
        trigger: '11'
    },
    {
        id: '11',
        options: [
            { value: 'Office', label: 'Office', trigger: '12' },
            { value: 'Residence', label: 'Residence', trigger: '12' },
            { value: 'Shop', label: 'Shop', trigger: '12'}
          ],
    },
    {
        id: '12',
        message: 'Now we need your Pick up Information',
        trigger: '13'
    },
    {
        id: '13',
        message: 'Please tell us Address',
        trigger: '14'
    },
    {
        id: '14',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please Write your Address';
            }
            return true;
        },
        trigger: '15'
    },
    {
        id: '15',
        message: 'Please tell us Post Code',
        trigger: '16'
    },
    {
        id: '16',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please Write your Post Code';
            }
            return true;
        },
        trigger: '17'
    },
    {
        id: '17',
        message: 'Please Tell us the floor number',
        trigger: '18'
    },
    {
        id: '18',
        options: [
            { value: 'Floor 1', label: 'Floor 1', trigger: '19' },
            { value: 'Floor 2', label: 'Floor 2', trigger: '19' },
            { value: 'Floor 3', label: 'Floor 3', trigger: '19'},
            { value: 'Floor 4', label: 'Floor 4', trigger: '19'},
            { value: 'Floor 5', label: 'Floor 5', trigger: '19'},
            { value: 'Floor 5+', label: 'Floor 5+', trigger: '19'},
        ],
    },
    {
        id: '19',
        message: 'Elevator is available or not?',
        trigger: '20'
    },
    {
        id: '20',
        options:[
            {value: 'Available', label: 'Available', trigger: '21'},
            {value: 'Not Available', label: 'Not Available', trigger: '21'},
        ]
    },
    {
        id: '21',
        message: 'Please write pickup date?',
        trigger: '22'
    },
    {
        id: '22',
        user: true,
        validator:(value)=>{
            var regex=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
            if(value.match(regex)){
                return 'Please Write Pick up Date';
            }
            return true;
        },
        trigger: '23'
    },
    {
        id: '23',
        message: 'Please tell us time?',
        trigger: '24'
    },
    {
        id: '24',
        user: true,
        validator:(value)=>{
            var regex=/^([01]\d|2[0-3]):?([0-5]\d)$/;
            if(value.match(regex)){
                return 'Please Write Pick up Time';
            }
            return true;
        },
        trigger: '25'
    },
    {
        id: '25',
        message: 'Now we are required the details of List of Items',
        trigger: '26'
    },
    {
        id: '26',
        message: 'First we take details of your Kicthen',
        trigger: '27'
    },
    {
        id: '27',
        message: 'Please tell us number of boxes',
        trigger: '28'
    },
    {
        id: '28',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please tell us number of boxes';
            }
            return true;
        },
        trigger: '29'
    },
    {
        id: '29',
        message: 'Please tell us number of appliances',
        trigger: '30'
    },
    {
        id: '30',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please tell us number of appliances';
            }
            return true;
        },
        trigger: '31'
    },
    {
        id: '31',
        message: 'Please tell us Number of furnitures',
        trigger: '32'
    },
    {
        id: '32',
        message: 'Now we are required your Living room details',
        trigger: '33'
    },
    {
        id: '33',
        message: 'Please tell us number of boxes',
        trigger: '34'
    },
    {
        id: '34',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please tell us number of boxes';
            }
            return true;
        },
        trigger: '35'
    },
    {
        id: '35',
        message: 'Please tell us number of appliances',
        trigger: '36'
    },
    {
        id: '36',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please tell us number of appliances';
            }
            return true;
        },
        trigger: '37'
    },
    {
        id: '37',
        message: 'Please tell us Number of furnitures',
        trigger: '38'
    },
    {
        id: '38',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please tell us number of furnitures';
            }
            return true;
        },
        trigger: '39'
    },
    {
        id: '39',
        message: 'Now we are required Bed Room details',
        trigger: '40'
    },
    {
        id: '40',
        message: 'Please tell us Number of boxes',
        trigger: '41'
    },
    {
        id: '41',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please tell us number of furnitures';
            }
            return true;
        },
        trigger: '42'
    },
    {
        id: '42',
        message: 'Please tell us Number of furniture',
        trigger: '43'
    },
    {
        id: '43',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please tell us number of furnitures';
            }
            return true;
        },
        trigger: '44'
    },
    {
        id: '44',
        message: 'Removal Options',
        trigger: '45'
    },
    {
        id: '45',
        options: [
            {value: 'Yes', label: 'Yes', trigger: '46'},
            {value: 'No', label:'No', trigger: '46'},
        ]
    },
    {
        id: '46',
        message: 'Please write some special note for us',
        trigger: '47'
    },
    {
        id: '47',
        user:true,
        validator:(value)=>{
            var regex=/^(^$)/;
            if(value.match(regex)){
                return 'Please write some special note';
            }
            return true;
        },
        trigger: '48'
    },
    {
        id: '48',
        message: 'Thank you for your feed back\nWe contact you soon',
        end: true
    }
];

export default class Order extends Component{
    componentDidMount(){
        this.handleEnd = this.handleEnd.bind(this);
    }
    handleEnd({steps, values}){
        console.log("Steps working");
        chatRef.push({
          steps
        });
    }
    render(){
        return(    
            <ChatBot
                botBubbleColor="green"
                userBubbleColor="brown"
                handleEnd={this.handleEnd} 
                steps={steps}
            />
        );
    }
}