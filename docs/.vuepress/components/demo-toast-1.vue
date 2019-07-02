<template>
	<div>
		<h4>预览</h4>
		<g-button @click="$toast('我是Toast')">上方弹出</g-button>
		<g-button @click="$toast('我是Toast',{position: 'middle'})">中间弹出</g-button>
		<g-button @click="$toast('我是Toast',{position: 'bottom'})">下面弹出</g-button>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Plugin from '../../../src/plugin'
	import Button from '../../../src/button'
	Vue.use(Plugin)
	export default {
		name: "demo-toast",
		components: {
			'g-button': Button,
		},
		data(){
			return{
				content: `
<style>
  .toast {
    z-index: 30;
  }
</style>

<g-button @click="$toast('我是Toast')">上方弹出</g-button>
<g-button @click="$toast('我是Toast',{position: 'middle'})">中间弹出</g-button>
<g-button @click="$toast('我是Toast',{position: 'bottom'})">下面弹出</g-button>`.trim()
			}
		}
	}
</script>
