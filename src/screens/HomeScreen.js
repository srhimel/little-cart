import { View, Dimensions, StyleSheet, Image, Platform, NativeModules, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Text from '../components/text/text';
import { spaces } from '../theme/spaces';

import Button from '../components/Button';
const { StatusBarManager } = NativeModules;

const { width, height } = Dimensions.get('window')

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Cart')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} />
        <View style={styles.headerBello} />
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/images/Icon.png')} />
        <Text preset='h1' style={{ marginTop: 20 }}>
          Non-Contact
        </Text>
        <Text preset='h1'>
          Deliveries
        </Text>
        <Text style={{ marginTop: 20 }}>
          When placing an order, select the option
        </Text>
        <Text>
          “Contactless delivery” and the courier will leave
        </Text>
        <Text style={{ marginBottom: 20 }}>
          your order at the door.
        </Text >
        <Pressable onPress={handlePress} style={{ width: '100%' }}>
          <Button style={{ marginTop: 20 }}>Order Now </Button>
        </Pressable>
        <Button style={{ backgroundColor: 'transparent', borderWidth: 0, color: colors.textSecondary }}>DISMISS </Button>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    height: (height / 3) + (Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0),
    backgroundColor: colors.purple,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },
  headerBello: {
    height: 40,
    width: '100%',
    backgroundColor: colors.lite,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 'auto'
  },
  content: {
    height: ((height / 3) * 2) - (Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0),
    backgroundColor: colors.lite,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: spaces[5]
  },
})

export default HomeScreen