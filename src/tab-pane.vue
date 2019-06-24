<template>
	<div class="tab-pane" @click="YYY" :class="classes" v-if="active">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-tab-pane",
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
			YYY(){
				this.eventBus.$emit('update:selected',this.name,this)
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
	.tab-pane{
		&.active{
			color: red;
		}
	}
</style>