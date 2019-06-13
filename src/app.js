import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'

Vue.component('g-icon',Icon);
Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);

new Vue({
	el: '#app',
	data: {
		loading1: false,
	},
	methods: {
		inputChange: function (xxx) {
			console.log(xxx.target.value)
		},
		inputFocus: function (xxx) {
			console.log(xxx.target.value)
		},
		inputInput: function (xxx) {
			console.log(xxx.target.value)
		},
		inputBlur: function (xxx) {
			console.log(xxx.target.value)
		}
	}
});