import { Tabbar ,Icon, View, Text} from 'nuke';
import {createElement, Component, render} from 'rax';
import QN from 'QAP-SDK'

class Demo extends Component{

  constructor() {
       super();

       QN.navigator.push({
         url: 'qap:///shopList.js',
         title: '商品管理'
       })
   }

  render() {
    return (
      <View>test</View>
    );
  }
}

render(<Demo />)
