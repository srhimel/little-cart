import { colors } from "../../theme/colors"

const heading = {
  fontFamily: 'SFBold',
  color: colors.textPrimary
}

export const presets = {
  'base': {
    fontFamily: 'SFRegular',
    fontSize: 17,
    color: colors.textSecondary
  },
  'h1': {
    ...heading,
    fontSize: 34
  },
  'h2': {
    ...heading,
    fontSize: 32
  },
  'h3': {
    ...heading,
    fontSize: 30
  },
  'h4': {
    ...heading,
    fontSize: 22
  },
  'button': {
    fontFamily: 'SFMedium',
    fontSize: 18
  }

}