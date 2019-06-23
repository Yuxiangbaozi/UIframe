<template>
	<div class="tab-item" @click="XXX" :class="classes">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-tab-item",
		inject: ['eventBus'],
		data(){
			return {
				active: false
			}
		},
		props: {
			name: {
				type: String|Number,
				require: true,
			}
		},
		created() {
			this.eventBus.$on('update:selected',(name)=> {
				this.active = name === this.name;
			})
		},
		methods: {
			XXX(){
				this.eventBus.$emit('update:selected',this.name)
			}
		},
		computed: {
			classes(){
				return {
					active: this.active
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.tab-item{
		flex-shrink: 0;
		padding: 0 2em;
		&.active{
			color: red;
		}
	}
</style>