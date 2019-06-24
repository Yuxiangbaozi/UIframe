<template>
	<div class="tab-header">
		<slot></slot>
		<div class="line" ref="line"></div>
		<div class="action-wrapper">
			<slot name="action"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "g-tab-head",
		inject: ['eventBus'],
		created() {
			this.eventBus.$on('update:selected',(name,vm)=> {
				console.log(name);
				console.log(vm);
			})
		}
	}
</script>

<style scoped lang="scss">
	$height: 40px;
	$border-color: blue;
	.tab-header{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: $height;
		position: relative;
		& .action-wrapper{
			margin-left: auto;
		}
		& .line{
			position: absolute;
			bottom: 0;
			border-bottom: 1px solid $border-color;
			width: 100%;
		}
	}
</style>