import * as React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterComponent from './features/CounterComponent';

function HomeScreen() {
  const openChildApp = () => {
    Linking.openURL('mychat://mychat');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, color: '#000' }}>Parent Home Screen</Text>
      <CounterComponent />
      <TouchableOpacity
        onPress={openChildApp}
        style={{
          height: 40,
          borderColor: '#ddd',
          backgroundColor: 'blue',
          borderRadius: 30,
          borderWidth: 0.5,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#fff' }}>Open Child App</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Parent Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
