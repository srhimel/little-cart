import { Text as RNText, StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './textPreset'

const Text = ({ children, preset = 'base', style }) => {

  const textStyle = StyleSheet.compose(presets[preset], style)
  return (
    <RNText style={textStyle}>{children}</RNText>
  )
}



export default Text