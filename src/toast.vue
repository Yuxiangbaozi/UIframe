<template>
	<div class="toast" ref="toast" :class="classPosition">
		<div class="message">
			<div v-html="$slots.default[0]" v-if="enableHtml"></div>
			<slot v-else></slot>
		</div>
		<div class="line" ref="line"></div>
		<span class="close" v-if="closeButton" @click="onclickClose()">{{closeButton.text}}</span>
	</div>
</template>

<script>
	export default {
		name: "g-toast",
		props: {
			autoClose: {
				type: Boolean,
				default: true,
			},
			autoCloseDelay: {
				type: Number,
				default: 5,
			},
			closeButton: {
				type: Object,
				default: ()=> {
					return {
						test: '关闭', callback: undefined
					}
				}
			},
			enableHtml: {
				type: Boolean,
				default: false,
			},
			position: {
				type: String,
				default: 'top',
				validate(value){
					return ['top','bottom','middle'].indexOf(value) >= 0
				}
			}
		},
		mounted() {
			this.execAutoClose()
			this.updateStyle()
		},
		computed: {
			classPosition(){
				return {
					[`position-${this.position}`]: true
				}
			}
		},
		methods: {
			execAutoClose(){
				if (this.autoClose === true) {
					setTimeout(()=>{
						this.close()
					}, this.autoCloseDelay * 1000)
				}
			},
			updateStyle(){
				this.$nextTick(()=> {
					this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
				})
			},
			close(){
				this.$el.remove()
				this.$destroy()
			},
			onclickClose(){
				this.close()
				if (this.closeButton && typeof this.closeButton.callback === 'function') {
					this.closeButton.callback(this)
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	$animation-time: 0.3s;
	@keyframes middle-fade-in {
		0% {opacity: 0;}
		100% {opacity: 1;}
	}
	@keyframes top-fade-in {
		0% {transform: translateX(-50%) translateY(-100%);}
		100% {transform: translateX(-50%) translateY(0);}
	}
	@keyframes bottom-fade-in {
		0% {transform: translateX(-50%) translateY(100%);}
		100% {transform: translateX(-50%) translateY(0);}
	}
	.toast{
		color: white;
		display: flex;
		align-items: center;
		position: fixed;
		left: 50%;
		font-size: 14px;
		line-height: 1.8;
		min-height: 40px;
		background: rgba(0,0,0,0.75);
		border-radius: 8px;
		box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
		padding: 0 16px;
		& .message{
			padding: 8px 0;
		}
		& .close{
			padding-left: 16px;
			flex-shrink: 0;
			cursor: pointer;
		}
		& .line{
			margin-left: 16px;
			height: 100%;
			border: 1px solid #bbb;
		}
		&.position-top{
			top: 0;
			transform: translateX(-50%);
			animation: top-fade-in $animation-time linear;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
		&.position-bottom{
			bottom: 0;
			transform: translateX(-50%);
			animation: bottom-fade-in $animation-time linear;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
		&.position-middle{
			top: 50%;
			transform: translateX(-50%) translateY(-50%);
			animation: middle-fade-in $animation-time linear;

		}
	}
</style>