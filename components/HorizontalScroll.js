import {
  Animated,
  AppRegistry,
  Dimensions,
  ScrollView,
  View,
  Text,
} from "react-native";
import React, { Component } from 'react';
import data from "../data";

//const {width} =Dimensions.get('window');


function HorizontalScroll  (props) {
  return (
    <View
      style={{
        marginTop: 20,
        margin: 10,
      }}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEventThrottle={5}
        snapToAlignment={"center"}
        decelerationRate="fast"
        scrollEnabled={true}
      >
        {data.dummyData.map((dummyData, index) => (
          <View
            key={index}
            style={{
              backgroundColor: dummyData.color,
              flex: 1,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 180,
              width: 350,
              marginHorizontal: 10,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                padding: 15,
                color: "white",
                textAlign: "center",
              }}
            >
              {dummyData.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

  export default HorizontalScroll;