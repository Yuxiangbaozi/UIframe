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
			},
			disable: {
				type: Boolean,
				default: false
			}
		},
		created() {
			this.eventBus.$on('update:selected',(name)=> {
				this.active = name === this.name;
			})
		},
		methods: {
			XXX(){
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
	$font-color: blue;
	.tab-item{
		flex-shrink: 0;
		padding: 0 1.5em;
		cursor: pointer;
		display: flex;
		align-items: center;
		height: 100%;
		&.active{
			color: $font-color;
			font-weight: bold;
		}
	}
</style>