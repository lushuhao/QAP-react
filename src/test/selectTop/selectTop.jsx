import { View, Button, Text} from 'nuke';
import {createElement, Component, render} from 'rax';

class SelectTop extends Component{
  constructor(props) {
      super(props);
  }

  tabStatusTitle() {
    if (this.props.tabStatus === 'tab1'){
      return <Text>“出售中”</Text>
    } else {
      return <Text>“仓库中”</Text>
    }
  }

  tabListNum() {
    return <Text>{this.props.onSelectTotal}项</Text>
  }

  cancelHandle = () => {
    this.props.cancel()
  }

  allSelect = () => {
    this.props.allSelect()
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.buttonWrapper}>
          <Button onPress={this.cancelHandle} rect style={styles.button} type="normal">取消</Button>
          <View style={styles.title}>已选择{this.tabStatusTitle()}{this.tabListNum()}</View>
          <Button onPress={this.allSelect} rect style={styles.button} type="normal">{this.props.allSelectStatus?'全选':'全不选'}</Button>
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    position: 'fixed',top: 0,left:0,backgroundColor: '#f5f5f5', height: 100, width: 750
  },
  buttonWrapper: {
    flex:1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
  },
  title:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  button:{
    width: 100,
  }
}

export default SelectTop;
