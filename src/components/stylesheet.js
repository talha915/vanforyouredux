import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    title: {
      fontSize: 20,
      color:'black',
      alignItems:'center',
      justifyContent: 'center',
      fontWeight:'bold',
      textAlign: 'center',
      flex: 1,
      fontFamily: 'Lato-Heavy'
    },
    subtitle: {
      fontSize: 16,
      color:'black',
      alignItems:'center',
      justifyContent: 'center',
      textAlign: 'center',
      flex: 1,
      fontFamily: 'Lato-Heavy'
    },
    bodytext: {
      color:'black',
      flex: 1,
      fontSize: 17,
      fontFamily: 'Lato-Medium',
      textAlign: 'left'
    },
    footertext: {
      color:'black',
      flex: 1,
      fontSize: 15
    },
    fitImage: {
      borderRadius: 20,
    },
    numberText:{
        color:'#7aefe8',
        fontSize: 17,
        fontFamily: 'Lato-Semibold'
    },
    subtitles:{
        fontSize: 20,
        color:'#7aefe8',
        textAlign: 'left',
        alignSelf: 'stretch',
        flexDirection: 'row',
        fontFamily: 'Lato-Semibold'
    },
    botBubbles:{
        backgroundColor: '#7aefe8',
    }
  });

  export default styles;