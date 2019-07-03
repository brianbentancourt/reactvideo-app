/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>header</Text>
        <Text>buscador</Text>
        <Text>categorias</Text>
        <Text>sugerencias</Text>
        <Text>footer</Text>
      </Home>
    )
  }
}


