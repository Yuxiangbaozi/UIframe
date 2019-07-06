<template>
	<div>
		<h4>预览</h4>
		<g-tab :selected="selected">
			<g-tab-head>
				<g-tab-item name="1">1</g-tab-item>
				<g-tab-item name="2">2</g-tab-item>
			</g-tab-head>
			<g-tab-body>
				<g-tab-pane name="1">content 1</g-tab-pane>
				<g-tab-pane name="2">content 2</g-tab-pane>
			</g-tab-body>
		</g-tab>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>

<script>
	import Tab from '../../../src/tab'
	import TabHead from '../../../src/tab-head'
	import TabBody from '../../../src/tab-body'
	import TabItem from '../../../src/tab-item'
	import TabPane from '../../../src/tab-pane'
	export default {
		name: "demo-tab",
		components: {
			'g-tab': Tab,
			'g-tab-head': TabHead,
			'g-tab-body': TabBody,
			'g-tab-item': TabItem,
			'g-tab-pane': TabPane,
		},
		data(){
			return {
				selected: '1',
				content: `
<g-tab :selected="selected">
  <g-tab-head>
    <g-tab-item name="1">1</g-tab-item>
    <g-tab-item name="2">2</g-tab-item>
  </g-tab-head>
  <g-tab-body>
    <g-tab-pane name="1">content 1</g-tab-pane>
    <g-tab-pane name="2">content 2</g-tab-pane>
  </g-tab-body>
</g-tab>`.trim()
			}
		}
	}
</script>
