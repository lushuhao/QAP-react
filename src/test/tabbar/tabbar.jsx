import { Tabbar ,Icon, View, Text} from 'nuke';
import {createElement, Component, render} from 'rax';

import Selling from '../selling'
import SellOut from '../SellOut'
import WareHouse from '../WareHouse'

class TabbarTop extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'tab1',
    }
  }

  onSelect = (activeStatus, index) => {
    if (activeStatus === 'wareHouse') {
      this.setState({
        activeKey: 'tab3'
      })
    } else if (activeStatus === 'selling') {
      this.setState({
        activeKey: 'tab1'
      })
    }
    this.props.onSelect(this.state.activeKey, index)
  }

  soldOut = () => {
    this.props.soldOut()
    this.setState({
      activeKey: 'tab1'
    })
  }

  putaway = () => {
    this.setState({
      activeKey: 'tab3'
    })
    this.props.putaway()
  }

  windowDisplay = () => {
    this.setState({
      activeKey: 'tab1'
    })
    this.props.windowDisplay()
  }

  renderItem = (Name,num,isActive, key) =>{
         return (<View style={styles.itemWrapper}>
             <Text style={[styles.itemText, isActive ? styles.activeText:{}]}>{Name}</Text>
             <Text style={[styles.numText, isActive ? styles.activeNum:{}]}>{num} </Text>
         </View>);
     }

  render() {
    return (
      <View style={styles.wrapper}>
        <Tabbar navTop={true} navStyle={{active: styles.activeBorder, inactive: styles.inactiveBorder, height: 100}} activeKey={this.state.activeKey}>
             <Tabbar.Item
                 tabKey="tab1"
                 render={this.renderItem.bind(this,'出售中',this.props.sell)}>
                 <Selling
                   allSelect={this.props.allSelect}
                   allNotSelect={this.props.allNotSelect}
                   checkedList={this.props.checkedList}
                   listNum={this.props.sell}
                   onSelect={this.onSelect}
                   soldOut={this.soldOut}
                   windowDisplay={this.windowDisplay}
                   displayStatus={this.props.displayStatus}
                   ></Selling>
             </Tabbar.Item>
             <Tabbar.Item
                 tabKey="tab2"
                 render={this.renderItem.bind(this,'橱窗中',this.props.display)}>
                 <Text>44</Text>
             </Tabbar.Item>
             <Tabbar.Item
                 tabKey="tab3"
                 render={this.renderItem.bind(this,'仓库中',this.props.ware)}>
                 <WareHouse
                   allSelect={this.props.allSelect}
                   allNotSelect={this.props.allNotSelect}
                   checkedList={this.props.checkedList}
                   listNum={this.props.ware}
                   onSelect={this.onSelect} putaway={this.putaway}></WareHouse>
             </Tabbar.Item>
             <Tabbar.Item
                 tabKey="tab4"
                 render={this.renderItem.bind(this,'已售完',this.props.sellOut)}>
                 <SellOut></SellOut>
             </Tabbar.Item>
         </Tabbar>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1
  },
  itemWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  activeBorder:{
    borderBottomWidth: 2,
    borderBottomColor: '#1b6ae8',
  },
  itemText: {
    fontSize: 28
  },
  activeText: {
    color: '#1b6ae8'
  },
  numText: {
    paddingLeft: 10,
    fontSize:24
  },
  activeNum: {
    color: '#1b6ae8'
  }
}

export default TabbarTop;
