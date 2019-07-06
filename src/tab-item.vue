<template>
	<div class="tab-item" @click="XXX" :class="classes" :data-name="name">
		<slot></slot>
	</div>
</template>

<script>
	
	export default {
		name: "g-tab-item",
		inject: ['akafjc'],
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
			if (this.akafjc) {
				this.akafjc.$on('update:selected', (name) => {
					this.active = name === this.name;
				})
			}
		},
		methods: {
			XXX(){
				if (this.disable) {return}
				if (this.akafjc) {
					this.akafjc.$emit('update:selected',this.name,this)
					this.$emit('click',this)
				}
			}
		},
		computed: {
			classes(){
				return {
					active: this.active,
					disable: this.disable,
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
		&.disable{
			color: #bbb;
			cursor: not-allowed;
		}
	}
</style>