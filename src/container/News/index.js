import React from "react";
import { StyleSheet, Image, Text, Linking, View, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class News extends React.Component {
  static navigationOptions = {
    title: '新闻',//在导航中显示的标题内容
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" size={25} color={tintColor} />
    ),
    headerRight: (
      <Icon.Button
        name="md-home"
        title="11"
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
        <Text style={styles.title}>Welcome to News page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  title: {
    textAlign: "center",
    color: "#ccc",
    fontSize: 28,
    marginTop: 100
  }
});

export default News;
