import { StyleSheet } from 'aphrodite/no-important';
import { Color } from 'utils/dist/models/general';
import { hexToRgba } from 'utils/dist/utils';

import icon from '../../assets/images/check.svg';

export default StyleSheet.create({
  block: {
    appearance: 'none',
    position: 'relative',
    outline: 0,
    cursor: 'pointer',
    width: 18,
    height: 18,
    display: 'inline-block',

    ':before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: 18,
      height: 18,
      border: `1px solid ${hexToRgba(Color.GRAY, 70)}`
    },
    ':after': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: 18,
      height: 18,
      border: `1px solid transparent`
    },
    ':checked': {
      ':before': {
        backgroundColor: Color.BLACK,
        border: `1px solid ${Color.BLACK}`
      },
      ':after': {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${icon})`
      }
    },
    ':disabled': {
      opacity: 0.45
    }
  },
  checkboxType: {
    ':before': {
      borderRadius: 4
    },
    ':after': {
      borderRadius: 4
    }
  },
  radioType: {
    ':before': {
      borderRadius: '100%'
    },
    ':after': {
      borderRadius: '100%'
    }
  }
});
