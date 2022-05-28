import { Text, View, StyleSheet, Animated, useWindowDimensions } from 'react-native'
import React, { } from 'react'

const Pagination = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.paginate}>
      {
        data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View key={i} style={[styles.dot, { opacity: opacity }]} />
          )
        })
      }
    </View>
  )
}
const styles = StyleSheet.create({
  paginate: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 55,
    left: '50%',
    transform: [{ translateX: -25 }]
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginHorizontal: 3
  }
})

export default Pagination