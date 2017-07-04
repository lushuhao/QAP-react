import { Text, View, ScrollView} from 'nuke';
import {createElement, Component, render} from 'rax';

import TabbarTop from './test/tabbar/tabbar'
import TabbarBottom from './test/tabbarBottom/tabbarBottom'
import SelectBottom from './test/selectBottom/selectBottom'
import SelectTop from './test/selectTop/selectTop'

class Index extends Component{
  constructor() {
    super()
    this.state = {
      sell: 3, // 出售中
      display: 3,  // 橱窗中
      ware:2,   // 仓库中
      sellOut:2,   // 已售完
      displayStatus: 0, // 0 橱窗推荐， 1 取消橱窗
      onSelect: false, // 点击Checkbox => true: 底部导航隐藏，显示批量按钮 false:显示导航，隐藏批量
      onSelectTotal: 0,   // 点击checkbox总数
      tabStatus: 'tab1',
      checkedList: [],    // 选中Checkbox的index数组
      checkedIndex: '',    // 选择Checkbox的index
      allSelect: false,  // 全选true, 初始false
      allNotSelect: false,  // 全不选true, 初始false
      allSelectStatus: true  // 右上角按钮，true'全选'， false'全不选'
    }
      this.checkedList = [];
  }

  // 下架
  soldOut = () => {
    let sellNum = this.state.sell
    let wareNum = this.state.ware
    sellNum--;wareNum++
    this.setState({
      sell: sellNum,
      ware: wareNum
    })
  }

  // 上架
  putaway = () => {
    let sellNum = this.state.sell
    let wareNum = this.state.ware
    sellNum++;wareNum--
    this.setState({
      sell: sellNum,
      ware: wareNum
    })
  }

  // 橱窗推荐
  windowDisplay = () => {
    let displayNum = this.state.display
    let displayStatus = this.state.displayStatus
    displayStatus ? displayNum++ : displayNum--;
    displayStatus = !displayStatus
    this.setState({
      display: displayNum,
      displayStatus: displayStatus
    })
  }

  onSelect = (tabStatus, index) => {
    let onSelect = this.state.onSelect
    let onSelectTotal = this.state.onSelectTotal
    // this.checkedList = this.state.checkedList
    onSelect = true
    if (this.checkedList[index]) {
      if (this.checkedList[index].checked) {
        this.checkedList[index].checked = false
        onSelectTotal--
      } else {
        this.checkedList[index].checked = true
        onSelectTotal++
      }
    } else {
      this.checkedList[index] = {
        checked: true
      }
      onSelectTotal++
    }
    this.setState({
        onSelect: onSelect,
        tabStatus: tabStatus,
        checkedList: this.checkedList,
        onSelectTotal: onSelectTotal
    })
  }

  cancel = () => {
    this.setState({
      onSelect: false,
      checked: false
    })
  }
  // let checkedList = [];   // 全选|全不选点击之前，以父组件的props
  // if (this.props.allSelect) {
  //   checkedList = new Array(data).fill({checked: true})
  // } else if (this.props.allNotSelect) {
  //   checkedList = new Array(data).fill({checked: false})
  // } else {
  //   checkedList = this.props.checkedList
  // }
  // console.log(checkedList);

  allSelect = () => {
    let allSelect = this.state.allSelect
    let allNotSelect = this.state.allNotSelect
    let allSelectStatus = this.state.allSelectStatus
    let onSelectTotal = this.state.onSelectTotal
    let tabStatus = this.state.tabStatus
    let checkedList = this.checkedList
    let checkedListNum;
    if (tabStatus === 'tab1') {
      checkedListNum = this.state.sell
    } else {
      checkedListNum = this.state.ware
    }
    if (allSelectStatus) {
      allSelect=true;
      allNotSelect=false;
      onSelectTotal=checkedListNum
      checkedList = new Array(checkedListNum).fill({checked: true})
    } else {
      allSelect=false;
      allNotSelect=true
      onSelectTotal=0
      checkedList = new Array(checkedListNum).fill({checked: false})
    }
    allSelectStatus = !allSelectStatus;
    this.setState({
      allSelect: allSelect,
      allNotSelect: allNotSelect,
      allSelectStatus: allSelectStatus,
      checkedList: checkedList,
      onSelectTotal: onSelectTotal
    })
  }

  // 批量上架
  batchSell = () => {
    let onSelectTotal = this.state.onSelectTotal
    let sellNum = this.state.sell
    let wareNum = this.state.ware
    sellNum = sellNum + onSelectTotal;
    wareNum = sellNum - onSelectTotal;
    this.checkedList = []
    this.setState({
      sell: sellNum,
      ware: wareNum,
      checkedList: this.checkedList,
      onSelectTotal: 0
    })
  }

  // 批量上架
  batchSellOut = () => {
    let onSelectTotal = this.state.onSelectTotal
    let sellNum = this.state.sell
    let wareNum = this.state.ware
    sellNum = sellNum - onSelectTotal;
    wareNum = sellNum + onSelectTotal;
    this.checkedList = []
    this.setState({
      sell: sellNum,
      ware: wareNum,
      checkedList: this.checkedList,
      onSelectTotal: 0
    })
  }

  render() {
    return (
      <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
        <TabbarTop
          sell={this.state.sell}
          display={this.state.display}
          ware={this.state.ware}
          sellOut={this.state.sellOut}
          displayStatus={this.state.displayStatus}
          soldOut={this.soldOut}
          putaway={this.putaway}
          windowDisplay={this.windowDisplay}
          onSelect={this.onSelect} checkedList={this.state.checkedList} allSelect={this.state.allSelect} allNotSelect={this.state.allNotSelect}></TabbarTop>
        {this.state.onSelect?<SelectBottom tabStatus={this.state.tabStatus} batchSellOut={this.batchSellOut} batchSell={this.batchSell}></SelectBottom>:<TabbarBottom></TabbarBottom>}
        {this.state.onSelect?<SelectTop cancel={this.cancel} allSelect={this.allSelect} allSelectStatus={this.state.allSelectStatus} tabStatus={this.state.tabStatus}
        onSelectTotal={this.state.onSelectTotal}></SelectTop>:''}

      </View>
    );
  }
}

render(<Index />)
