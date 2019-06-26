<template>
	<div class="tab-pane" @click="YYY" :class="classes" :data-name="name" v-if="active">
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
			if (this.eventBus) {
				this.eventBus.$on('update:selected', (name) => {
					this.active = name === this.name;
				})
			}
		},
		methods: {
			YYY(){
				if (this.eventBus) {
					this.eventBus.$emit('update:selected',this.name,this)
					this.$emit('click',this)
				}
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
		padding: 1em;
		&.active{
			color: blue;
		}
	}
</style>