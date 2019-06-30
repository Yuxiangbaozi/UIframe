<template>
	<div class="collapse">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-collapse",
		
	}
</script>

<style scoped lang="scss">
	$border-color: #ddd;
	$border-radius: 5px;
	.collapse{
		display: block;
		border: 1px solid $border-color;
		border-radius: $border-radius;
		
	}
</style>