import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Read_story from './screens/ReadStoryScreen';
import Write_story from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read_story: {screen: Read_story},
  Write_story: {screen: Write_story},
}, {
  defaultNavigationOptions: ({navigation})=> ({
    tabBarIcon: ({})=> {
      const routeName = navigation.state.routeName
      if(routeName === 'Read_story'){
        return(
          <Image style = {{width : 40, height : 40}}
              source = {require ('./assets/read.png')}
          />
        )
      }
      else if(routeName === 'Write_story'){
          <Image style = {{width : 40, height : 40}}
          source = {require ('./assets/write.png')}/>
      }
    }
  })
});


const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});