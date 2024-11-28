import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function AboutScreen({navigation}) {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>AboutScreen</Text>
        <Button title="Details" onPress={() => navigation.navigate('Home')}></Button>
      </View>
    );
  }
export default AboutScreen;