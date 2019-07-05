<template>
	<div>
		<h4>预览</h4>
		<g-input v-model="value"></g-input>
		<div>
			value: {{value}}
		</div>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>

<script>
	import Input from '../../../src/input'
	export default {
		name: "demo-input-2",
		components: {
			'g-input': Input
		},
		data(){
			return {
				value: '1',
				content: `
data:{
  value: '1'
}

<g-input v-model="value"></g-input>
<div>
  value: {{value}}
</div>`.trim()
			}
		}
	}
</script>

<style scoped lang="scss">

</style>