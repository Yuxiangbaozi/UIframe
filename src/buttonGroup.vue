<template>
	<div class="g-button-group">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-button-group",
		mounted() {
			for (let node of this.$el.children) {
				let name = node.nodeName.toLowerCase()
				if (name !== 'button'){
					console.warn(`g-button-group的子节点不能为${name},请改成g-button`)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.g-button-group{
	display: inline-flex;
	vertical-align: top;
	>.g-button{
		border-radius: 0;
		margin-left: -1px;
		&:first-child{
			border-radius: 5px 0 0 5px;
		}
		&:last-child{
			border-radius: 0 5px 5px 0;
		}
		&:hover{
			border-color: red;
			z-index: 1;
		}
	}
}
</style>