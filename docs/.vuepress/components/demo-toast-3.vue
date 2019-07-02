<template>
	<div>
		<h4>预览</h4>
		<g-button @click="onClick">上方弹出</g-button>
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
		name: "demo-toast-3",
		components: {
			'g-button': Button,
		},
		methods: {
			onClick () {
				this.$toast('<h3>我是Toast</h3>', {
					enableHtml: true,
				})
			}
		},
		data(){
			return{
				content: `
<style>
  .toast {
    z-index: 30;
  }
</style>

<g-button @click="onClick">上方弹出</g-button>

methods: {
  tonClick () {
    this.$toast('<h3>我是Toast</h3>', {
      enableHtml: true,
    })
  }
}`.trim()
			}
		},
	}
</script>