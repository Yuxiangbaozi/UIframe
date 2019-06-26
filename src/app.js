import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Row from './row'
import Column from './column'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import Plugin from './plugin'
import Tab from './tab'
import TabBody from './tab-body'
import TabHead from './tab-head'
import TabItem from './tab-item'
import TabPane from './tab-pane'

Vue.component('g-icon',Icon);
Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Column);
Vue.component('g-layout',Layout);
Vue.component('g-header',Header);
Vue.component('g-content',Content);
Vue.component('g-footer',Footer);
Vue.component('g-sider',Sider);
Vue.component('g-toast',Toast);
Vue.use(Plugin)
Vue.component('g-tab',Tab);
Vue.component('g-tab-body',TabBody);
Vue.component('g-tab-head',TabHead);
Vue.component('g-tab-item',TabItem);
Vue.component('g-tab-pane',TabPane);

new Vue({
	el: '#app',
	data: {
		selectTab: 'finance'
	},
	methods: {
		showToast(){
			this.$toast('<strong>我是 Toast</strong>',{
				position: 'bottom',
				enableHtml : true,
				closeButton: {
					text: '知道了',
					callback() {
						console.log('用户知道了');
					}
				},
			})
		},
		inputChange: function (xxx) {
			console.log(xxx)
		},
		inputFocus: function (xxx) {
			console.log(xxx)
		},
		inputInput: function (xxx) {
			console.log(xxx)
		},
		inputBlur: function (xxx) {
			console.log(xxx)
		}
	}
})