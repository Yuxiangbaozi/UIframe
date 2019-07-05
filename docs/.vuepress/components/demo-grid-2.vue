<template>
	<div>
		<h4>预览</h4>
		<g-row class="8X3" gutter="10">
			<g-col span="8">
				<div class="demoCol">8</div>
			</g-col>
			<g-col span="8">
				<div class="demoCol">8</div>
			</g-col>
			<g-col span="8">
				<div class="demoCol">8</div>
			</g-col>
		</g-row>
		
		<g-row class="6X4" gutter="10">
			<g-col span="6">
				<div class="demoCol">6</div>
			</g-col>
			<g-col span="6">
				<div class="demoCol">6</div>
			</g-col>
			<g-col span="6">
				<div class="demoCol">6</div>
			</g-col>
			<g-col span="6">
				<div class="demoCol">6</div>
			</g-col>
		</g-row>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>

<script>
	import Row from '../../../src/row'
	import Column from '../../../src/column'
	export default {
		name: "demo-grid-2",
		components: {
			'g-row': Row,
			'g-col': Column,
		},
		data(){
			return {
				content: `
* {
  box-sizing: border-box;
}

<g-row class="8X3" gutter="10">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>

<g-row class="6X4" gutter="10">
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>`.trim()
			}
		}
	}
</script>

<style scoped lang="scss">
	* {box-sizing: border-box;}
</style>