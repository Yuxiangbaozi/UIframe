<template>
	<div class="layout" :class="layClass">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-layout",
		data(){
			return {
				layClass: {
					hasSider: false,
				}
			}
		},
		mounted() {
			this.$children.forEach((child)=>{
				if (child.$options.name === 'g-sider') {
					this.layClass.hasSider = true
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	.layout{
		display:flex;
		flex-direction: column;
		flex-grow: 1;
		border: 1px solid darkred;
		&.hasSider{
			dispaly:flex;
			flex-direction: row;
		}
	}
</style>