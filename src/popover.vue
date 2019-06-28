<template>
	<div class="popover" @click="xxx" ref="popover">
		<div class="wrapper" v-if="active" ref="contentWrapper">
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
		data() {
			return {
				active: false
			}
		},
		methods: {
			eventA(cl){
				if (this.$refs.popover &&
					this.$refs.popover === cl.target ||
					this.$refs.popover.contains(cl.target)) {
					return;
				}
				if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(cl.target)) {
					return;
				}else {
					this.close()
				}
			},
			positionContent() {
				document.body.appendChild(this.$refs.contentWrapper)
				let {left, top} = this.$refs.tiger.getBoundingClientRect()
				this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
				this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
			},
			listenDocument() {
				document.addEventListener('click', this.eventA)
			},
			open(){
				this.active = true
				this.$nextTick(() => {
					this.positionContent()
					this.listenDocument()
				})
			},
			close(){
				this.active = false
				console.log('结束监听');
				document.removeEventListener('click', this.eventA)
			},
			xxx(cl) {
				if (this.$refs.tiger.contains(cl.target)) {
					if (this.active === true) {
						this.close()
					} else {
						this.open()
					}
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	$border-color: #333;
	$border-radius: 4px;
	.popover {
		display: inline-block;
		vertical-align: top;
		position: relative;
		left: 100px;
		top: 50px;
	}
	
	.wrapper {
		max-width: 20em;
		padding: 0.5em 1em;
		word-break: break-all;
		border: 1px solid $border-color;
		border-radius: $border-radius;
		/*box-shadow: 0 1px 1px rgba(0,0,0,0.5);*/
		filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
		background-color: white;
		margin-top: -10px;
		position: absolute;
		transform: translateY(-100%);
		&::before{
			content: '';
			display: block;
			border: 10px solid transparent;
			border-top-color: #000;
			position: absolute;
			top: 100%;
			left: 10%;
		}
		&::after{
			content: '';
			display: block;
			border: 10px solid transparent;
			border-top-color: #ffffff;
			position: absolute;
			top: calc(100% - 1px);
			left: 10%;
		}
	}
</style>