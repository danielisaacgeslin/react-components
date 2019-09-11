import { StyleSheet } from 'aphrodite/no-important';
import { Color } from 'utils/dist/models/general';
import { hexToRgba } from 'utils/dist/utils';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    boxShadow: `0 1px 5px 0 ${hexToRgba(Color.BLACK, 20)}`,
    backgroundColor: Color.WHITE,
    zIndex: 200,
    borderRadius: 3,
    padding: '10px 15px',
    opacity: 0,
    color: Color.GRAY,
    fontSize: 15
  },
  open: {
    opacity: 1
  },
  small: {
    borderRadius: 100,
    padding: '7px 10px'
  }
});
