import { StyleSheet } from 'react-native'
import { spaces } from '../theme/spaces'
import { colors } from '../theme/colors'

import Text from '../components/text/text'

const Button = ({ children, style }) => <Text preset='button' style={[styles.button, { ...style }]}>
  {children}
</Text>

const styles = StyleSheet.create({

  button: {
    paddingVertical: spaces[3],
    borderRadius: spaces[2],
    backgroundColor: colors.green,
    borderColor: colors.green,
    borderWidth: 1,
    color: colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: .45,
    width: '100%',
  }
})

export default Button