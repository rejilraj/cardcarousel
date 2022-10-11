import {
  Animated,
  AppRegistry,
  Dimensions,
  ScrollView,
  View,
  Text,
} from "react-native";
import React, { Component } from 'react';

//const {width} =Dimensions.get('window');

function HorizontalScroll  () {
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
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: {  } } },
        ])}
      >
        <View
          style={{
            backgroundColor: "#87CEEB",
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
            Screen 1
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#F433FF",
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
            Screen 2
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#9E7BFF",
            flex: 1,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            height: 180,
            width: 350,
            marginHorizontal: 10,
            borderRadius: 12,
            left: 4,
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
            Screen 3
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#6C2DC7",
            flex: 1,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            height: 180,
            width: 350,
            marginHorizontal: 10,
            borderRadius: 12,
            left: 5,
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
            Screen 4
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FF4500",
            flex: 1,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            height: 180,
            width: 350,
            marginHorizontal: 10,
            borderRadius: 12,
            left: 1,
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
            Screen 5
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

  export default HorizontalScroll;