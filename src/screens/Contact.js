import React, {Component} from 'react'
import {
    AppRegistry,
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {Content, Container, Card, CardItem} from 'native-base'
import Communications from 'react-native-communications';
import FitImage from 'react-native-fit-image'

import contacts from '../components/contacts'
import styles from '../components/stylesheet'
export default class Contact extends Component{
    render(){
        return(
            <Content>
                <Card>
                    <CardItem>
                        <FitImage
                            source={{ uri: 'http://www.vanforyou.co.uk/wp-content/uploads/2014/10/storage-services-london.jpg' }}
                            style={styles.fitImage}
                        />
                    </CardItem>
                    <CardItem>
                        <Text style={styles.subtitles}>
                            {contacts[1].title}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.bodytext}>
                            {contacts[1].description}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.subtitles}>
                            {contacts[2].title}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.bodytext}>
                            {contacts[2].description}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.bodytext}>
                            {contacts[0].description}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.numberText}>
                            {contacts[0].address}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <TouchableOpacity onPress={() => Communications.phonecall('{contacts[0].number1}', true)}>
                            <Text style={styles.numberText}>{contacts[0].number1}</Text>
                        </TouchableOpacity>
                    </CardItem>
                    <CardItem>    
                        <TouchableOpacity onPress={() => Communications.phonecall('{contacts[0].number2}', true)}>
                            <Text style={styles.numberText}>{contacts[0].number2}</Text>
                        </TouchableOpacity>
                    </CardItem>
                    <CardItem>    
                        <TouchableOpacity onPress={() => Communications.phonecall('{contacts[0].number3}', true)}>
                            <Text style={styles.numberText}>{contacts[0].number3}</Text>
                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </Content>  
        );
    }
}

