import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

import Tab from '../config/router';

import {connect} from 'react-redux';
 

class Index extends Component{
    render(){
        console.log("testReducer", this.props.testReducer);
        console.log("about", this.props.about);
        console.log("ServiceReducer", this.props.serviceReducer);
        console.log("StepReducer", this.props.stepReducer);
        return(
            <Tab/>
        );
    }
}
function mapStateToProps(state) {
    return {
      testReducer: state.testReducer,
      about: state.about,
      serviceReducer: state.serviceReducer,
      stepReducer: state.stepReducer  
    };
} 
export default connect(mapStateToProps)(Index);