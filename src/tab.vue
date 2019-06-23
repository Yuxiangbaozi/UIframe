<template>
	<div class="tab">
		<slot></slot>
	</div>
</template>

<script>
	import Vue from 'vue'
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
		data(){
			return {
				eventBus: new Vue()
			}
		},
		provide(){
			return {
				eventBus: this.eventBus
			}
		},
		mounted() {
			this.eventBus.$emit('update:selected',this.selectTab)
		}
	}
</script>

<style scoped lang="scss">
	.tab{

	}
</style>