import { Icon, View, Text, Button, ScrollView} from 'nuke';
import {createElement, Component, render} from 'rax';

import GoodCard from './goodCard/goodCard'

class Selling extends Component{
  constructor(props) {
    super(props);
    this.state = {
      checkedList: []
    }
  }

  onSelect(index) {
    this.props.onSelect('selling', index)
  }

  windowDisplayHandle() {
    this.props.windowDisplay()
  }

  soldOutHandle() {
    this.props.soldOut('selling');
  }

  sellingList() {
    let data = this.props.listNum
    let list = new Array(data).fill(1)
    let jsx = list.map((item, index) => {
      return(
        <View>
          {   this.props.checkedList[index]
            ? <GoodCard onSelect={this.onSelect.bind(this, index)} checked={this.props.checkedList[index].checked}></GoodCard>
            : <GoodCard onSelect={this.onSelect.bind(this, index)} checked={false}></GoodCard>
          }
          <Button.Group style={styles.buttonWrapper}>
              <Button type="normal" onPress={this.windowDisplayHandle.bind(this)}>{this.props.displayStatus?'橱窗推荐':'取消橱窗'}</Button>
              <Button type="normal" onPress={this.soldOutHandle.bind(this)}>下架</Button>
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
      <ScrollView style={styles.wrapper}>
        {this.sellingList()}
      </ScrollView>
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
  borderBottomStyle: 'solid'
}
}

export default Selling;
