<template>
	<div>
		<h4>预览</h4>
		<g-input></g-input>
		<g-input value="1"></g-input>
		<g-input value="22" disabled></g-input>
		<g-input value="333" readonly></g-input>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>

<script>
	import Input from '../../../src/input'
	export default {
		name: "demo-input-1",
		components: {
			'g-input': Input
		},
		data(){
			return {
				content: `
<g-input></g-input>
<g-input value="1"></g-input>
<g-input value="22" disabled></g-input>
<g-input value="333" readonly></g-input>`.trim()
			}
		}
	}
</script>

<style scoped lang="scss">

</style>