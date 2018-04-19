import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

let jsonData=[];
let jsonDataArray=[];
let mobile=[];
let dirs=RNFetchBlob.fs.dirs;
/*export function updateState(text){
    this.setState({
        text
    })
}*/
export default class Api extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      title:[],
      dataSource:[],
      dataSourceArray:[],
      mobile:[]
    }
  }

  componentWillMount() {
    RNFetchBlob
    .config({
      path: dirs.CacheDir+'/proj',
      fileCache: true,
      appendExt: 'txt'
    })
    //.fetch('GET','https://vinth.azurewebsites.net/wp-json/wp/v2/posts')
    .fetch('GET','http://www.vanforyou.co.uk/api/get_page/?slug=services')
    .then((res) => {
          jsonData=res.json();
          let path=res.path();
          console.log("path:",path);
          return jsonData;
      })

    .then((jsonData) => {
        jsonDatas=jsonData.page.attachments;
        console.log("WIll Mount",jsonDatas);
        
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(jsonDatas)
        });
      })

      .catch((error) => {
        console.error(error);
      });

  }

  componentDidMount(){
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
        //console.log("From cache/ DId Mount",jsonData.posts);
        return jsonData;
      })
      .then((jsonData)=>{
        jsonDatas=jsonData.posts;
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
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );

    }
  //console.log("State",this.state.dataSource._dataBlob.s1);
  console.log("dataSourceArray",this.state.dataSourceArray);
  //  console.log("dataSourceArray",dataSourceArray);
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
        //  dataSourceArray={this.state.dataSource._dataBlob.s1}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
        />

      </View>
   
    );
  }
}
