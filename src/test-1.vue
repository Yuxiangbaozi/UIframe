<template>
	<div class="collapse">
		<button @click="onClick">点我</button>
		<slot></slot>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		name: "g-test-1",
		data(){
			return{
				active: {
					type: Boolean,
					default: false
				},
				eventBus: new Vue(),
			}
		},
		provide(){
			return {
				eventBus: this.eventBus
			}
		},
		methods: {
			onClick(){
				this.active = !this.active
				this.eventBus.$emit('update:change',this.active)
			}
		}
	}
</script>

<style scoped lang="scss">

</style>