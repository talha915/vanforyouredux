import React, {Component} from 'react'
import {
    AppRegistry,
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native'
import ImageSlider from 'react-native-image-slider';

export default class Home extends Component{
    render(){
        return(
            <ImageSlider images={[
                require('../images/home-removals-slider.jpg'),
                require('../images/office-removals-slider.jpg'),
                require('../images/storage-packaging-slider.jpg'),
                ]}
            />   
        );
    }
}

