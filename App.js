import { StatusBar } from 'expo-status-bar';
import { AppRegistry, Dimensions, SafeAreaView, ScrollView,StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import HorizontalScroll from './components/HorizontalScroll';

export default  function App() {
  
  return (
    <SafeAreaView>
      <HorizontalScroll />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  normalDots:{
        width:8,
        height:8,
        borderRadius:4,
      
        marginHorizontal:4,
    }
});
