import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import buttonGroup from './buttonGroup'

Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
Vue.component('g-button-group',buttonGroup)

new Vue({
	el: '#app',
	data: {
		loading1: false,
	},
})