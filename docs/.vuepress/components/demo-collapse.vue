<template>
	<div>
		<h4>预览</h4>
		<g-collapse :selected="['1','2']" >
			<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
			<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
			<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
		</g-collapse>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>

<script>
	import 'vue'
	import Collapse from '../../../src/collapse'
	import CollapseItem from '../../../src/collapse-item'
	export default {
		name: "demo-collapse",
		components: {
			'g-collapse': Collapse,
			'g-collapse-item': CollapseItem,
			
		},
		data(){
			return {
				content: `
<g-collapse :selected="[1,2]">
  <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>`
			}
		}
	}
</script>

