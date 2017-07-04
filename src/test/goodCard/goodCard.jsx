import { Icon, View, Text, Image, Checkbox} from 'nuke';
import {createElement, Component, render} from 'rax';

class GoodCard extends Component{
  constructor(props) {
    super(props);
  }

  onSelect = () => {
    this.props.onSelect()
  }

  render() {
    return (
      <View style={[styles.wrapper, {padding:20}]}>
        <Image style={styles.img} src='http://img.alicdn.com/tfs/TB1xCFCPVXXXXchXXXXXXXXXXXX-160-160.gif' />
        <View style={{flex:1}}>
          <Text style={{fontSize:28}}>日本原单荷叶领长袖娃娃雪纺衬衫外贸 日系小清新甜美百搭衬衣衬衣</Text>
          <View style={styles.oneline}>
            <Text style={styles.info}>编码:567890AB</Text>
            <Text style={styles.info}>库存:56789</Text>
          </View>
          <View style={styles.oneline}>
            <Text style={{color: 'red', fontSize:24}}>￥6666.00</Text>
            <Text style={styles.info}>剩6天23小时59分钟下架</Text>
          </View>
        </View>
        {
          this.props.Checkbox?'':
          <Checkbox checked={this.props.checked} onChange={this.onSelect} size="small" ></Checkbox>
        }
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  img: {
    width: 130,
    height: 130,
    marginRight: 10
  },
  oneline:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  info: {
    fontSize: 24,
    color: '#999999'
  }
}

export default GoodCard;
