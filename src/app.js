import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Row from './row'
import Column from './column'

Vue.component('g-icon',Icon);
Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Column);

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