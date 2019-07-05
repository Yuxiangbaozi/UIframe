<template>
	<div>
		<h4>预览</h4>
		<g-tabs :selected="selected">
			<g-tabs-head>
				<g-tabs-item name="1">1</g-tabs-item>
				<g-tabs-item name="2">2</g-tabs-item>
			</g-tabs-head>
			<g-tabs-body>
				<g-tabs-pane name="1">content 1</g-tabs-pane>
				<g-tabs-pane name="2">content 2</g-tabs-pane>
			</g-tabs-body>
		</g-tabs>
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
<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">1</g-tabs-item>
    <g-tabs-item name="2">2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">content 1</g-tabs-pane>
    <g-tabs-pane name="2">content 2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>`.trim()
			}
		}
	}
</script>
