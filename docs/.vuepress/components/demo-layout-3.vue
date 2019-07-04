<template>
	<div>
		<h4>预览</h4>
		<g-layout style="color: white; overflow: hidden; margin-bottom:50px;">
			<g-sider style=" background:cornflowerblue; width:100px; color: black;">
				sider
			</g-sider>
			<g-layout>
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
	import Sider from  '../../../src/sider'
	import Button from '../../../src/button'
	export default {
		name: "demo-layout-3",
		components: {
			'g-layout': Layout,
			'g-header': Header,
			'g-content': Content,
			'g-footer': Footer,
			'g-sider': Sider,
			'g-button': Button
		},
		data(){
			return {
				content: `
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-layout>
    <g-sider style="height: 100px; background:cornflowerblue; width:100px; color: black;">
      sider
    </g-sider>
  </g-layout>
  <g-content style="height: 100px; background:deepskyblue;">
    content
  </g-content>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>`.trim()
			}
		}
	}
</script>
