<template>
	<div>
		<g-collapse selected="['1','2']" >
			<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
			<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
			<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
		</g-collapse>
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
				selected: {
					type:String,
					default: '1'
				},
				content: `
<g-collapse :selected.sync="selectTab">
  <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>`
			}
		}
	}
</script>

