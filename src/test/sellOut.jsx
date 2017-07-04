import { Icon, View, Text, Button} from 'nuke';
import {createElement, Component, render} from 'rax';

import GoodCard from './goodCard/goodCard'

class SellOut extends Component{

  render() {
    return (
      <View style={styles.wrapper}>
        <GoodCard Checkbox></GoodCard>
        <View style={styles.buttonWrapper}>
          <Button type="normal">修改库存</Button>
        </View>
        <GoodCard Checkbox></GoodCard>
        <View style={styles.buttonWrapper}>
          <Button type="normal">修改库存</Button>
        </View>
        <GoodCard Checkbox></GoodCard>
        <View style={styles.buttonWrapper}>
            <Button type="normal">修改库存</Button>
        </View>
      </View>
    );
  }
}

const styles = {
buttonWrapper: {
  padding: 30,
  marginBottom: 20,
  backgroundColor: '#f9f9f9',
  borderBottomWidth: 1,
  borderBottomColor: '#999999',
  borderBottomStyle: 'solid',
  justifyContent: 'flex-end',
  flexDirection: 'row'
}
}

export default SellOut;
