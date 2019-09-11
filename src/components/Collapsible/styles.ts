import { StyleSheet } from 'aphrodite/no-important';
import { STYLE } from '../../constants';

export default StyleSheet.create({
  bodyContainer: {
    display: 'flex',
    overflow: 'hidden',
    flexWrap: 'wrap',
    transition: 'all 0.3s',
    flex: 0
  },
  bodyContainerOpen: {
    flex: 1
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  title: {
    textTransform: 'capitalize',
    fontSize: STYLE.FONT.SIZE.P
  },
  icon: {
    cursor: 'pointer'
  }
});
