import { StyleSheet } from 'aphrodite/no-important';
import { Color } from 'utils/dist/models/general';
import { hexToRgba } from 'utils/dist/utils';

export default StyleSheet.create({
  backdrop: {
    position: 'fixed',
    zIndex: 190,
    width: '100%',
    height: '100%',
    backgroundColor: hexToRgba(Color.BLACK, 50),
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: Color.WHITE,
    maxWidth: '90%',
    maxHeight: '90%',
    minWidth: 500,
    minHeight: 150,
    padding: '15px 30px 20px 30px',
    borderRadius: 10,
    overflow: 'auto'
  },
  headerContainer: {
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: Color.BLACK,
    fontWeight: 'bold'
  },
  headerBtn: {
    color: Color.GRAY,
    fontSize: 18
  },
  bodyContainer: {
    marginBottom: 15,
    maxHeight: 500,
    overflow: 'auto'
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  invertedFooterContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start'
  },
  btn: {
    border: 0,
    fontSize: 15,
    padding: '8px 25px',
    borderRadius: 20,
    marginLeft: 15,
    transition: 'alll .25s'
  },
  open: {},
  disabled: {
    opacity: 0.3
  }
});
