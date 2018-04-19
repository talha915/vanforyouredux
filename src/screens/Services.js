import React, {Component} from 'react';
import {
  ActivityIndicator,
  ListView,
  View,
  Text,
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions
} from 'react-native';
import {Card, Content, Container, CardItem} from 'native-base';
import HTML from 'react-native-render-html';
import FitImage from 'react-native-fit-image';
import RNFetchBlob from 'react-native-fetch-blob';
import Api from '../config/Api';
const {height, width} = Dimensions.get('window');

import service from '../components/service';
import styles from '../components/stylesheet'
export default class Services extends Component{
  
   constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource:[],
      visible: false
    }
  }

  
/*  componentDidMount(){
    if(Platform.Os='ios'){
      filePath='/data/user/0/com.vanforyou/cache/proj';
    }
    else{
      filePath='/data/user/0/com.vanforyou/cache/proj';
    }
    RNFetchBlob.fs
      .readFile(filePath,'utf8')
      .then((res)=>{
        jsonData=JSON.parse(res);
        return jsonData;
      })
      .then((jsonData)=>{
        jsonDatas=jsonData.page.attachments;
        console.log("from cache",jsonDatas);
        let ds= new ListView.DataSource({rowHasChanged: (r1, r2) =>r1 !== r2});
        this.setState({
          isLoading:false,
          dataSource: ds.cloneWithRows(jsonDatas),
        });
      })
      .catch((error)=>{
        console.console.error((error));
      });
  }*/


  render(){
  /*  console.log("Render function..",this.state.dataSource);
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }*/
    return(
      /*<View style={{flex: 1, paddingTop: 2}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <Content>
                <TouchableOpacity>
                  <Card>
                    <CardItem>
                      <Text style={styles.title}>
                        {rowData.title}
                      </Text>
                    </CardItem>
                    <CardItem>
                      <FitImage
                        source={{uri: (rowData.url)}}
                        style={styles.fitImage}
                      />
                    </CardItem>
                    <CardItem>
                      <HTML html={(rowData.description)}/>
                    </CardItem>  
                  </Card>
                </TouchableOpacity>
              </Content>
       
          }
        />
      </View>*/
      <View style={{flex: 1, paddingTop: 2}}>
        <Content>
          <Card>
            <CardItem>
              <Text style={styles.title}>
                {service[0].title}
              </Text>
            </CardItem>
            <CardItem>
              <FitImage
                source={{uri: (service[0].image)}}
                style={styles.fitImage}
              />
            </CardItem>
            <CardItem>
              <Text style={styles.subtitles}>
                {service[0].subtitle}
              </Text>
            </CardItem>
            <CardItem>
              <Text style={styles.bodytext}>
                {(service[0].description)}
              </Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem>
              <Text style={styles.title}>
                {service[1].title}
              </Text>
            </CardItem>
            <CardItem>
              <FitImage
                source={{uri: (service[1].image)}}
                style={styles.fitImage}
              />
            </CardItem>
            <CardItem>
              <Text style={styles.subtitles}>
                {service[1].subtitle}
              </Text>
            </CardItem>
            <CardItem>
              <Text style={styles.bodytext}>
                {(service[1].description)}
              </Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem>
              <Text style={styles.title}>
                {service[2].title}
              </Text>
            </CardItem>
            <CardItem>
              <FitImage
                source={{uri: (service[2].image)}}
                style={styles.fitImage}
              />
            </CardItem>
            <CardItem>
              <Text style={styles.subtitles}>
                {service[2].subtitle}
              </Text>
            </CardItem>
            <CardItem>
              <Text style={styles.bodytext}>
                {(service[2].description)}
              </Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem>
              <Text style={styles.title}>
                {service[3].title}
              </Text>
            </CardItem>
            <CardItem>
              <FitImage
                source={{uri: (service[3].image)}}
                style={styles.fitImage}
              />
            </CardItem>
            <CardItem>
              <Text style={styles.subtitles}>
                {service[3].subtitle}
              </Text>
            </CardItem>
            <CardItem>
              <Text style={styles.bodytext}>
                {(service[3].description)}
              </Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem>
              <Text style={styles.title}>
                {service[4].title}
              </Text>
            </CardItem>
            <CardItem>
              <FitImage
                source={{uri: (service[4].image)}}
                style={styles.fitImage}
              />
            </CardItem>
            <CardItem>
              <Text style={styles.subtitles}>
                {service[4].subtitle}
              </Text>
            </CardItem>
            <CardItem>
              <Text style={styles.bodytext}>
                {(service[4].description)}
              </Text>  
            </CardItem>  
          </Card>
        </Content>
      </View>
    );
  }
}
   