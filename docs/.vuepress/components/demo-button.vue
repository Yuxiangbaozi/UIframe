<template>
	<div>
		<h4>预览</h4>
		<g-button>默认</g-button>
		<g-button icon="shezhi">设置</g-button>
		<g-button :loading="true">读取中</g-button>
		<g-button i-position="right" icon="xiazai">下载</g-button>
		<g-button disable>默认</g-button>
		<g-button-group>
			<g-button icon="left">上一页</g-button>
			<g-button icon="right">下一页</g-button>
		</g-button-group>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>

<script>
	import Button from '../../../src/button'
	import ButtonGroup from '../../../src/buttonGroup'
	export default {
		name: "demo-button",
		components: {
			'g-button': Button,
			'g-button-group': ButtonGroup,
		},
		data(){
			return {
				content: `
<g-button>默认</g-button>
<g-button icon="shezhi">设置</g-button>
<g-button :loading="true">读取中</g-button>
<g-button i-position="right" icon="xiazai">下载</g-button>
<g-button disable>默认</g-button>
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button icon="right">下一页</g-button>
</g-button-group>`.trim()
			}
		}
	}
</script>
