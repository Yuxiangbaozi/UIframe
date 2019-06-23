<template>
	<div class="tab-header">
		<slot></slot>
		<slot name="actions"></slot>
	</div>
</template>

<script>
	export default {
		name: "g-tab-head"
	}
</script>

<style scoped lang="scss">
	.tab-header{

	}
</style>