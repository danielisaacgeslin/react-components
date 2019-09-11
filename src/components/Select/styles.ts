import { StyleSheet } from 'aphrodite/no-important';
import { Color } from 'utils/dist/models/general';
import { hexToRgba } from 'utils/dist/utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    color: Color.BLACK
  },
  selectedContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    border: `1px solid ${hexToRgba(Color.GRAY, 50)}`,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  optionListContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    margin: '0 -15px',
    backgroundColor: Color.WHITE
  },
  optionContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    cursor: 'pointer',
    transition: 'all 0.1s',
    ':hover': {
      backgroundColor: hexToRgba(Color.BLACK, 7)
    }
  },
  active: {
    backgroundColor: hexToRgba(Color.BLACK, 11)
  }
});
