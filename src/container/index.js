import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import About from './About/';
import Home from './Home/';
import News from './News/';
// import Splash from './Splash/';

const TabContainer = TabNavigator(  // TabNavigator类似底部标签栏，用来区分模块
  {
    // MainContainer: { screen: MainContainer },
    Home: { screen: Home },
    News: { screen: News },
    About: { screen: About }
  },
  {
    lazy: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#3e9ce9",
      inactiveTintColor: "#666666",
      showIcon: true,
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const App = StackNavigator({   // 顶部导航条，用来跳转页面和传递参数
    // 对应界面名称
    // Splash: { screen: Splash },
    Home: {
      screen: TabContainer,   // 对应界面名称
      navigationOptions: {
        // header: null,   // 可以设置一些导航的属性
        // headerTitle: "首页",
        // headerLeft: null
      }
    }
  },{
    headerMode: "screen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#3e9ce9"
      },
      headerTitleStyle: {
        color: "#fff",
        fontSize: 15
      },
      headerTintColor: "#fff"
    }
  }
);

export default App;
