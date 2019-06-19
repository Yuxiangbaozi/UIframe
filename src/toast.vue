<template>
	<div class="toast">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-toast"
	}
</script>

<style scoped lang="scss">
	.toast{
		color: white;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		font-size: 14px;
		line-height: 1.8;
		height: 40px;
		background: rgba(0,0,0,0.75);
		border-radius: 4px;
		box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
		padding: 0 16px;
	}
</style>