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

new Vue({
	el: '#app',
	data: {
		loading1: false,
		message : '陈',
	},
	methods: {
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
});