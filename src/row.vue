<template>
	<div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "row",
		props: {
			gutter : [String,Number]
		},
		mounted() {
			this.$children.forEach((xxxx)=>{
				xxxx.gutter = this.gutter
			})
		}
	}
</script>

<style scoped lang="scss">
	.row{
		display: flex;
	}
</style>