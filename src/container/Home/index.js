import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  Button,
  Linking,
  View,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Home extends React.Component {
  static navigationOptions = {
    title: "首页",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" size={25} color={tintColor} />
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

  onForward() {
    this.props.navigation("About", { name: "Jane" });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.title}
          onPress={() => {
            console.log(11111)
            this.onForward()
            // this.props.navigation.navigate("About", { user: "Lucy" })
          }
          }
        >
          Yo man, Welcome to React Native!
        </Text>
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

export default Home;
