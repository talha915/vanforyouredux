import firebase from 'react-native-firebase';
import {Platform} from 'react-native';

const iosConfig={
    clientId: '72577559138-a862as7bnu7uo4dcs376iij6jjclducc.apps.googleusercontent.com',
    appId: '1:72577559138:android:8934ec19b86bce37',
    apiKey: 'AIzaSyBrTEZarHGcdU_Fd_OpXC5RdT_YtqSzTo4',
    databaseURL: 'https://vanforyou-cc111.firebaseio.com',
    storageBucket: 'vanforyou-cc111.appspot.com',
    messagingSenderId: '72577559138',
    projectId: 'vanforyou-cc111',
    persistance: true 
}

const androidConfig={
    clientId: '72577559138-a862as7bnu7uo4dcs376iij6jjclducc.apps.googleusercontent.com',
    appId: '1:72577559138:android:8934ec19b86bce37',
    apiKey: 'AIzaSyBrTEZarHGcdU_Fd_OpXC5RdT_YtqSzTo4',
    databaseURL: 'https://vanforyou-cc111.firebaseio.com',
    storageBucket: 'vanforyou-cc111.appspot.com',
    messagingSenderId: '72577559138',
    projectId: 'vanforyou-cc111',
    persistance: true 
}

const lastcheck = firebase.initializeApp(
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    'vanforyou'
);

const rootRef = firebase.database().ref();
export const chatRef = rootRef.child('chats');