import { Icon, View, Text, Button} from 'nuke';
import {createElement, Component, render} from 'rax';

import GoodCard from './goodCard/goodCard'

class WareHouse extends Component{
  constructor(props) {
      super(props);
  }

  onSelect(index) {
    this.props.onSelect('wareHouse', index)
  }

  putawayHandle() {
    this.props.putaway('wareHouse')
  }

  wareList() {
    let data = this.props.listNum
    let list = new Array(data).fill(1)
    let jsx = list.map((item, index) => {
      return(
        <View>
          { this.props.checkedList[index]
            ? <GoodCard onSelect={this.onSelect.bind(this, index)} checked={this.props.checkedList[index].checked}></GoodCard>
            : <GoodCard onSelect={this.onSelect.bind(this, index)} checked={false}></GoodCard>
          }
          <Button.Group style={styles.buttonWrapper}>
              <Button onPress={this.putawayHandle.bind(this)} type="normal">上架</Button>
              <Button type="normal">复制链接</Button>
              <Button type="normal">更多功能</Button>
          </Button.Group>
        </View>
      )
    });
    return jsx;
  }



  render() {
    return (
      <View style={styles.wrapper}>
        {this.wareList()}
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
}
}

export default WareHouse;
