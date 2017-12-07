import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

// import Main from '../pages/MainPage/Main';

// import * as readCreators from '../actions/read';

class MainContainer extends React.Component {
  static navigationOptions = {
    title: '首页',//在导航中显示的标题内容
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" size={25} color={tintColor} />
    )
  };

  render() {
    return <Main {...this.props} />;
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
