<template>
	<div class="popover" @click.stop="xxx">
		<div class="wrapper" v-if="active" @click.stop ref="contentWrapper">
			<slot name="pcontent"></slot>
		</div>
		<div ref="tiger">
			<slot></slot>
		</div>
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
						document.body.appendChild(this.$refs.contentWrapper)
						let{left,top} = this.$refs.tiger.getBoundingClientRect()
						this.$refs.contentWrapper.style.left = left + window.scrollX +'px'
						this.$refs.contentWrapper.style.top = top + window.scrollY +'px'
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
		left: 100px;
		top: 50px;
	}
	.wrapper{
		border: 1px solid red;
		position: absolute;
		transform: translateY(-100%);
	}
</style>