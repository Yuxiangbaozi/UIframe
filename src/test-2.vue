<template>
	<div class="collapse-item" v-if="show">
		meum
	</div>
</template>

<script>
	export default {
		name: "g-test-2",
		data(){
			return{
				show: {
					type: Boolean,
					default: false
				},
			}
		},
		inject: ['eventBus'],
		mounted(){
			this.eventBus.$on('update:change', (value)=> {
				if(value === true){
					this.show = true
				}else{
					this.show = false
				}
			})
		}
	}
</script>

<style scoped lang="scss">

</style>