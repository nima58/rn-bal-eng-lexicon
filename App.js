import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Details from './components/Details';
import Lexicon from './components/Lexicon';
import PageHeader from './components/PageHeader';
import Translation from './components/Translation';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PageHeader />
        <View style={styles.content}>
          <Text style={styles.text}> بلۆچی مئے وتی شهدێن زُبان اِنت۔</Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Go to Lexicon "
            onPress={() => this.props.navigation.navigate('LexiconScreen')}
          />
        </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: App,
  LexiconScreen: Lexicon,
  TranslationScreen: Translation,
  DetailsScreen: Details
}, {
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);
export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'red'
  },
  content:{
    flex: 5
  },
  footer: {
    flex:2,
    height: 30,
    borderColor: 'blue',
    paddingBottom: 10
  }
});
