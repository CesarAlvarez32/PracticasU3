import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Home Screen</Text>
        <Button title="Details" onPress={() => navigation.navigate('About')}></Button>
      </View>
    );
  }
export default HomeScreen;