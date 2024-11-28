import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen.js';
import AboutScreen from './src/screens/AboutScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import { Ionicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

/*
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);  // Cambia el estado a "autenticado" después de iniciar sesión
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isAuthenticated ? (
          <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
        
      ) : (
        <LoginScreen onLogin={handleLogin}/>  
        )}
        </NavigationContainer>
    </NativeBaseProvider>
  );
}
*/
