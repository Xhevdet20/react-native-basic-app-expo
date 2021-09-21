import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Content1 from '../screens/Content1';
import Content2 from '../screens/Content2';
import Content3 from '../screens/Content3';
import Home from '../screens/Home';
import User from '../screens/User';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Content1" component={Content1} />
      <Stack.Screen name="Content2" component={Content2} />
      <Stack.Screen name="Content3" component={Content3} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

export default MyStack;