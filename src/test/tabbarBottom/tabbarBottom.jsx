import { Tabbar ,Icon, View, Text} from 'nuke';
import {createElement, Component, render} from 'rax';

const iconsMap = {
    tab1:{
        icon:'//q.aiyongbao.com/trade/web/images/qap_img/mobile/sy.png',
        activeIcon: '//q.aiyongbao.com/item/web/images/qap_img/mobile/sy_1.png',
        name:'首页'
    },
    tab2:{
        icon:'//q.aiyongbao.com/item/web/images/qap_img/mobile/sp.png',
        activeIcon: 'https://q.aiyongbao.com/item/web/images/qap_img/mobile/sp_1.png',
        name:'商品管理'
    },
    tab3:{
        icon:'//q.aiyongbao.com/trade/web/images/qap_img/mobile/wd.png',
        activeIcon: '//q.aiyongbao.com/item/web/images/qap_img/mobile/wd_1.png',
        name:'我的'
    }
}

class TabbarBottom extends Component{

  renderItemWithIcon = (key, isActive) =>{
        let activeColor = {color: '#1b6ae8'}
         return (
        <View>
         <Icon src={isActive?iconsMap[key].activeIcon:iconsMap[key].icon}/>
         <Text style={[{color:'#333333',fontSize:'28rem',marginTop:'5rem',textAlign:'center'},isActive?activeColor:'']}>{iconsMap[key].name}</Text>
       </View>);
     }

  render() {
    return (
      <View style={styles.wrapper}>
        <Tabbar activeKey='tab2'>
             <Tabbar.Item
                 tabKey="tab1"
                 render={this.renderItemWithIcon.bind(this,'tab1')}>
             </Tabbar.Item>
             <Tabbar.Item
                 tabKey="tab2"
                 render={this.renderItemWithIcon.bind(this,'tab2')}>
             </Tabbar.Item>
             <Tabbar.Item
                 tabKey="tab3"
                 render={this.renderItemWithIcon.bind(this,'tab3')}>
             </Tabbar.Item>
         </Tabbar>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#ffffff'
  },
}

export default TabbarBottom;
