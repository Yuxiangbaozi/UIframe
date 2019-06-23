<template>
	<div class="tab">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-tabs",
		props: {
			selectTab: {
				type: String,
				default: 'sport'
			},
			direction: {
				type: String,
				default: 'row',
				validate(value){
					return ['row','column'].indexOf(value) >= 0
				}
			}
		},
		created() {
			this.$emit('update:selected')
		}
	}
</script>

<style scoped lang="scss">
	.tab{

	}
</style>