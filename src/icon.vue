<template>
	<svg class="g-icon" aria-hidden="true">
		<use v-bind:xlink:href="`#i-${icon}`"></use>
	</svg>
</template>

<script>
	import './svg'
	export default {
		name: "g-icon",
		props: ['icon'],
	}
</script>

<style lang="scss" scoped>
	.g-icon {width: 1em; height: 1em; vertical-align: -0.15em; fill: currentColor; overflow: hidden;}
</style>