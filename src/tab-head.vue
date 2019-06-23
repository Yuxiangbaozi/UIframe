<template>
	<div class="tab-header">
		<slot></slot>
		<div class="action-wrapper">
			<slot name="action"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "g-tab-head",
		inject: ['eventBus'],
	}
</script>

<style scoped lang="scss">
	$height: 40px;
	.tab-header{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid red;
		height: $height;
		& .action-wrapper{
			margin-left: auto;
		}
	}
</style>