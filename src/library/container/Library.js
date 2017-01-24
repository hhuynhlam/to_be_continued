import iTunes from 'react-native-itunes';
import { connect } from 'react-redux';

import { setLibrary } from '../action';
import Library from '../component/Library';

export function mapStateToProps(state) {
  return { library: state.library.toJS() };
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      iTunes.getTracks().then((tracks) => {
        dispatch(setLibrary(tracks));
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
