<template>
	<div>
		<h4>预览</h4>
		<g-popover>
			<g-button>上方弹出</g-button>
			<template slot="pcontent">
				弹出内容
			</template>
		</g-popover>
		<g-popover position="bottom">
			<g-button>下方弹出</g-button>
			<template slot="pcontent">
				弹出内容
			</template>
		</g-popover>
		<g-popover position="left">
			<g-button>左边弹出</g-button>
			<template slot="pcontent">
				弹出内容
			</template>
		</g-popover>
		<g-popover position="right">
			<g-button>右边弹出</g-button>
			<template slot="pcontent">
				弹出内容
			</template>
		</g-popover>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>

<script>
	import Button from '../../../src/button'
	import Popover from '../../../src/popover'
	export default {
		name: "demo-popover-1",
		components: {
			'g-popover': Popover,
			'g-button': Button
		},
		data(){
			return {
				content: `
<g-popover>
  <g-button>上方弹出</g-button>
  <template slot="pcontent">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom">
  <g-button>下方弹出</g-button>
  <template slot="pcontent">
    弹出内容
  </template>
</g-popover>
<g-popover position="left">
  <g-button>左边弹出</g-button>
  <template slot="pcontent">
    弹出内容
  </template>
</g-popover>
<g-popover position="right">
  <g-button>右边弹出</g-button>
  <template slot="pcontent">
    弹出内容
  </template>
</g-popover>`.trim()
			}
		}
	}
</script>
