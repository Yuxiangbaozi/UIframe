<template>
	<div class="popover" @click.stop="xxx">
		<div class="content-wrapper" v-if="active" @click.stop>
			<slot name="content"></slot>
		</div>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-popover",
		data(){
			return {
				active: false
			}
		},
		methods: {
			xxx(){
				this.active = !this.active
				if(this.active === true){
					this.$nextTick(()=> {
						let x = ()=> {
							this.active = false
							document.removeEventListener('click',x)
						}
						document.addEventListener('click',x)
					})
				}else {return}
			}
		},
	}
</script>

<style scoped lang="scss">
	.popover{
		display: inline-block;
		vertical-align: top;
		position: relative;
		.content-wrapper{
			position: absolute;
			bottom: 100%;
			left: 0;
		}
	}
</style>