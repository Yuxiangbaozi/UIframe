<template>
	<div class="popover" @click="xxx" ref="popover">
		<div class="wrapper" v-if="active" ref="contentWrapper"
		     :class="{[`position-${position}`]: true}">
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
		props: {
			position: {
				type: String,
				default: 'top',
				validate(value) {
					return ['top','bottom','left','right'].indexOf(value) >=0
				}
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
				let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
				let {left,top,bottom,right,height} = this.$refs.tiger.getBoundingClientRect()
				if (this.position === 'top') {
					this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
					this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
				}else if (this.position === 'bottom') {
					this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
					this.$refs.contentWrapper.style.top = bottom + window.scrollY + 'px'
				}else if (this.position === 'left') {
					this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
					this.$refs.contentWrapper.style.top = top + window.scrollY + (height - height2)/2 + 'px'
				}else if (this.position === 'right') {
					this.$refs.contentWrapper.style.left = right + window.scrollX + 'px'
					this.$refs.contentWrapper.style.top = top + window.scrollY + (height - height2)/2 + 'px'
				}
				
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
	*{box-sizing: border-box}
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
		position: absolute;
		&::before{
			content: '';
			display: block;
			border: 8px solid transparent;
			position: absolute;
		}
		&::after{
			content: '';
			display: block;
			border: 8px solid transparent;
			position: absolute;
		}
		&.position-top{
			transform: translateY(-100%);
			margin-top: -0.5em;
			&::before{
				border-top-color: #000;
				top: 100%;
				left: 10%;
			}
			&::after{
				border-top-color: #ffffff;
				top: calc(100% - 1px);
				left: 10%;
			}
		}
		&.position-bottom{
			filter: drop-shadow(0 -1px 1px rgba(0,0,0,0.5));
			margin-top: 0.5em;
			&::before{
				border-bottom-color: #000;
				bottom: 100%;
				left: 10%;
			}
			&::after{
				border-bottom-color: #ffffff;
				bottom: calc(100% - 1px);
				left: 10%;
			}
		}
		&.position-left{
			transform: translateX(-100%);
			margin-left: -0.5em;
			&::before{
				border-left-color: #000;
				transform: translateY(-50%);
				left: 100%;
				top: 50%;
			}
			&::after{
				border-left-color: #ffffff;
				transform: translateY(-50%);
				left: calc(100% - 1px);
				top: 50%;
			}
		}
		&.position-right{
			margin-left: 0.5em;
			&::before{
				border-right-color: #000;
				transform: translateY(-50%);
				right: 100%;
				top: 50%;
			}
			&::after{
				border-right-color: #ffffff;
				transform: translateY(-50%);
				right: calc(100% - 1px);
				top: 50%;
			}
		}
		
	}
</style>