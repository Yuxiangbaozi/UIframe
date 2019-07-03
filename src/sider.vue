<template>
	<transition name="slide">
		<div class="sider" v-show="visible">
			<slot></slot>
			<g-button class="close" icon="left" @click="onClick"></g-button>
		</div>
	</transition>
</template>

<script>
	import Button from './button'
	export default {
		name: "g-sider",
		inject: ['eventBus'],
		data(){
			return {
				visible: true
			}
		},
		components: {
			'g-button': Button,
		},
		methods: {
			onClick(){
				this.visible = false
				this.eventBus.$emit('update:change',this.visible)
			}
		},
		mounted() {
			this.eventBus.$on('update:send',(value)=> {
				if (value === false){
					this.visible = true
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	.g-button{
		padding: 0;
		width: 12px;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.sider{
		position: relative;
		& .close{
			position: absolute;
			right: -12px;
			buttom: 50%;
			transform: translateY(36px);
		}
	}
	.slide-enter-active, .slide-leave-active {
		transition: transform .5s;
	}
	.slide-enter, .slide-leave-to {
		transform: translateX(-100%);
	}
	
</style>