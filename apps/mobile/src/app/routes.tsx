import * as React from 'react';
import { View, Text, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterComponent from './features/CounterComponent';
import { link } from 'fs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, color: '#000' }}>Child Home Screen</Text>
      <CounterComponent />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['mychat://', 'mychat://mychat', 'https://myapp.com'],

  // Custom function to get the URL which was used to open the app
  async getInitialURL() {
    // First, you would need to get the initial URL from your third-party integration
    // The exact usage depend on the third-party SDK you use
    // For example, to get the initial URL for Firebase Dynamic Links:
    // const { isAvailable } = utils().playServicesAvailability;

    // if (isAvailable) {
    //   const initialLink = await dynamicLinks().getInitialLink();

    //   if (initialLink) {
    //     return initialLink.url;
    //   }
    // }

    // As a fallback, you may want to do the default deep link handling
    const url = await Linking.getInitialURL();

    return url;
  },

  // Custom function to subscribe to incoming links
  subscribe(listener) {
    // Listen to incoming links from Firebase Dynamic Links
    // const unsubscribeFirebase = dynamicLinks().onLink(({ url }) => {
    //   listener(url);
    // });

    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
      listener(url);
    });

    return () => {
      // Clean up the event listeners
      // unsubscribeFirebase();
      linkingSubscription.remove();
    };
  },

  config: {
    // Deep link configuration
    screens: {
      Chat: 'feed/:sort',
      Profile: 'user',
    },
  },
};

function Routes() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Child Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
