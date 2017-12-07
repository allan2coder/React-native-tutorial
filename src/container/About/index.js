import React from "react";
import { StyleSheet, Image, Text, Linking, View } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

const SHOW_API = 'http://www.renliwo.com/';
const aboutLogo = require('../../img/logo.png');

class About extends React.Component {
  static navigationOptions = {
    title: "关于", //在导航中显示的标题内容
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-information-circle" size={25} color={tintColor} />
    ),
    headerRight: (
      <Icon.Button
        name="logo-github"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
        onPress={() => Linking.openURL('https://github.com/allan2coder/React-native-tutorial')}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.center}>
            <Image style={styles.logo} source={aboutLogo} />
            <Text style={styles.version}>v1.0.0</Text>
            <Text style={styles.subtitle}>普惠人力</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.disclaimerContent}>
              <Text style={[styles.disclaimer, { color: '#999999' }]}>
                Created by Wowoo
              </Text>
              <Text style={[styles.disclaimer, { color: '#3e9ce9' }]} onPress={()=> Linking.openURL(SHOW_API)}>{SHOW_API}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 110,
    height: 110,
    marginTop: 50
  },
  version: {
    fontSize: 16,
    textAlign: 'center',
    color: '#aaaaaa',
    marginTop: 5
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#313131',
    marginTop: 10
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#4e4e4e'
  },
  disclaimerContent: {
    flexDirection: 'column'
  },
  disclaimer: {
    fontSize: 14,
    textAlign: 'center'
  },
  bottomContainer: {
    alignItems: 'center'
  }
});

export default About;
