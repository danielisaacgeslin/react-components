import { StyleSheet } from 'aphrodite/no-important';
import { Color } from 'utils/dist/models/general';
import { hexToRgba } from 'utils/dist/utils';

export default StyleSheet.create({
  container: {
    display: 'inline-block',
    fontSize: 12
  },
  dropdownContainer: {
    position: 'relative'
  },
  dropdownBody: {
    position: 'absolute',
    left: 0,
    top: 5,
    minWidth: '100%',
    boxSizing: 'border-box',
    background: Color.WHITE,
    padding: 12,
    boxShadow: '0 1px 5px 0 ' + hexToRgba(Color.GRAY, 25),
    zIndex: 300
  },
  box: {
    border: '1px solid ' + hexToRgba(Color.GRAY, 25),
    borderRadius: 5
  },
  clear: {
    appearance: 'none',
    padding: '10px 0 0',
    border: 0,
    fontSize: 14,
    fontWeigh: 300,
    background: 'transparent',
    color: Color.GRAY,
    cursor: 'pointer'
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: 10
  },
  optionLabel: {
    display: 'inline-block',
    marginLeft: 7,
    textTransform: 'initial',
    whiteSpace: 'nowrap'
  },
  chip: {
    cursor: 'pointer',
    paddingLeft: 7
  },
  button: {
    appearance: 'none',
    padding: '0 7px',
    lineHeight: '32px',
    color: Color.GRAY,
    backgroundColor: Color.WHITE
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  caret: {
    marginLeft: 10
  },
  caretRotate: {
    transform: 'rotate(180deg)'
  }
});
