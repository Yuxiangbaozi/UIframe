<template>
	<div class="tab-item">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-tab-item",
		props: {
			disable: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped lang="scss">
	.tab-item{

	}
</style>