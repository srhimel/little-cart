import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from './src/screens/HomeScreen';
import AddToCart from './src/screens/AddToCart';

import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'SFBold': require('./assets/fonts/SFPRODISPLAYBOLD.otf'),
    'SFMedium': require('./assets/fonts/SFPRODISPLAYMEDIUM.otf'),
    'SFRegular': require('./assets/fonts/SFPRODISPLAYREGULAR.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cart" component={AddToCart} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
