<template>
	<div>
		<h4>预览</h4>
		<g-layout style="color: white; margin-bottom:50px;">
			<g-header style="height: 50px; background:lightskyblue;">
				header
			</g-header>
			<g-content style="height: 100px; background:deepskyblue;">
				content
			</g-content>
			<g-footer style="height: 50px; background:lightskyblue;">
				footer
			</g-footer>
		</g-layout>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>

<script>
	import Layout from '../../../src/layout'
	import Header from '../../../src/header'
	import Content from '../../../src/content'
	import Footer from '../../../src/footer'
	export default {
		name: "demo-layout-1",
		components: {
			'g-layout': Layout,
			'g-header': Header,
			'g-content': Content,
			'g-footer': Footer,
		},
		data(){
			return {
				content: `
<g-layout style="color: white; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-content style="height: 100px; background:deepskyblue;">
    content
  </g-content>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>`.trim()
			}
		},
	}
</script>

