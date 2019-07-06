<template>
	<div class="popover" ref="popover">
		<div class="wrapper" v-if="active" ref="contentWrapper"
		     :class="{[`position-${position}`]: true}">
			<slot name="pcontent" :close="close"></slot>
		</div>
		<div ref="tiger">
			<slot></slot>
		</div>
	</div>
</template>

<script>
  import Button from './button'
	export default {
		name: "g-popover",
		data() {
			return {
				active: false,
				clock: null,
			}
		},
		components: {
			'g-button': Button
		},
		mounted(){
			if (this.trigger === 'click') {
				this.$refs.popover.addEventListener('click',this.xxx)
			}else {
				this.$refs.popover.addEventListener('mouseenter',()=> {
					this.show()
					if (this.clock !== null) {
						clearTimeout(this.clock)
					}
				})
				this.$refs.popover.addEventListener('mouseleave',()=> {
					this.clock = setTimeout(()=> {
						this.close()
					},100)
				})
			}
		},
		destroyed(){
			if (this.trigger === 'click') {
				this.$refs.popover.removeEventListener('click',this.xxx)
			}else {
				this.$refs.popover.removeEventListener('mouseenter',this.show)
				this.$refs.popover.removeEventListener('mouseleave',this.close)
			}
		},
		props: {
			position: {
				type: String,
				default: 'top',
				validate(value) {
					return ['top','bottom','left','right'].indexOf(value) >= 0
				}
			},
			trigger: {
				type: String,
				default: 'click',
				validate(value) {
					return ['click','hover'].indexOf(value) >= 0
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
				if (this.$refs.contentWrapper &&
					this.$refs.contentWrapper=== cl.target ||
					this.$refs.contentWrapper.contains(cl.target)) {
					return;
				}else {
					this.close()
				}
			},
			eventB(){
				if (this.clock !== null) {
					clearTimeout(this.clock)
				}
			},
			eventC(){
				this.clock = setTimeout(()=> {
					this.close()
				},100)
			},
			positionContent() {
				const {contentWrapper,tiger} = this.$refs
				document.body.appendChild(contentWrapper)
				const {height: height2} = contentWrapper.getBoundingClientRect()
				const {left,top,bottom,right,height} = tiger.getBoundingClientRect()
				let select = {
					top: {top: top + window.scrollY, left: left + window.scrollX,},
					bottom: {top: bottom + window.scrollY, left: left + window.scrollX,},
					left: {top: top + window.scrollY + (height - height2)/2, left: left + window.scrollX,},
					right: {top: top + window.scrollY + (height - height2)/2, left: right + window.scrollX,}}
				
				contentWrapper.style.top = select[this.position].top + 'px'
				contentWrapper.style.left = select[this.position].left + 'px'
			},
			listenDocument(){
				document.addEventListener('click', this.eventA)
			},
			listenPopover(){
				if (this.trigger === 'hover') {
					if (this.$refs.contentWrapper) {
						this.$refs.contentWrapper.addEventListener('mouseenter', this.eventB)
					}
					this.$refs.contentWrapper.addEventListener('mouseleave', this.eventC)
				}
			},
			show(){
				this.active = true
				this.$nextTick(() => {
					this.positionContent()
					this.listenPopover()
					this.listenDocument()
				})
			},
			close(){
				this.active = false
				document.removeEventListener('click', this.eventA)
				if (this.trigger === 'hover') {
					this.$refs.contentWrapper.removeEventListener('mouseenter', this.eventB)
					this.$refs.contentWrapper.removeEventListener('mouseleave', this.eventC)
				}
			},
			xxx(cl) {
				if (this.$refs.tiger.contains(cl.target)) {
					if (this.active === true) {
						this.close()
					} else {
						this.show()
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
				border-bottom: none;
				border-top-color: #000;
				top: 100%;
				left: 10%;
			}
			&::after{
				border-bottom: none;
				border-top-color: #ffffff;
				top: calc(100% - 1px);
				left: 10%;
			}
		}
		&.position-bottom{
			filter: drop-shadow(0 -1px 1px rgba(0,0,0,0.5));
			margin-top: 0.5em;
			&::before{
				border-top: none;
				border-bottom-color: #000;
				bottom: 100%;
				left: 10%;
			}
			&::after{
				border-top: none;
				border-bottom-color: #ffffff;
				bottom: calc(100% - 1px);
				left: 10%;
			}
		}
		&.position-left{
			transform: translateX(-100%);
			margin-left: -0.5em;
			&::before{
				border-right: none;
				border-left-color: #000;
				transform: translateY(-50%);
				left: 100%;
				top: 50%;
			}
			&::after{
				border-right: none;
				border-left-color: #ffffff;
				transform: translateY(-50%);
				left: calc(100% - 1px);
				top: 50%;
			}
		}
		&.position-right{
			margin-left: 0.5em;
			&::before{
				border-left: none;
				border-right-color: #000;
				transform: translateY(-50%);
				right: 100%;
				top: 50%;
			}
			&::after{
				border-left: none;
				border-right-color: #ffffff;
				transform: translateY(-50%);
				right: calc(100% - 1px);
				top: 50%;
			}
		}
		
	}
</style>