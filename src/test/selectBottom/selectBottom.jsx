import { View, Button} from 'nuke';
import {createElement, Component, render} from 'rax';

class SelectBottom extends Component{
  constructor(props) {
      super(props);
  }

  batchSellOut = () => {
    this.props.batchSellOut()
  }

  batchSell = () => {
    this.props.batchSell()
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {(this.props.tabStatus === 'tab1')
          ?   <View style={styles.buttonWrapper}>
                <Button onPress={this.batchSellOut} rect style={styles.button} type="normal">批量下架</Button>
                <Button rect style={styles.button} type="normal">橱窗推荐</Button>
                <Button rect style={styles.button} type="normal">取消推荐</Button>
            </View>
          :   <View style={styles.buttonWrapper}>
                <Button onPress={this.batchSell} block rect style={styles.button} type="normal">批量上架</Button>
            </View>}
      </View>
    );
  }
}

const styles = {
  buttonWrapper: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  button:{
    flex:1,
    height: 80,
    borderTopWidth: 0
  }
}

export default SelectBottom;
