<template>
	<div class="toast" ref="toast">
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
			}
		},
		mounted() {
			this.execAutoClose()
			this.updateStyle()
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
	.toast{
		color: white;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		font-size: 14px;
		line-height: 1.8;
		min-height: 40px;
		background: rgba(0,0,0,0.75);
		border-radius: 4px;
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
	}
</style>