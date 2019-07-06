<template>
	<div class="wrapper">
		<div class="layout" :class="layClass" v-if="xxx">
			<slot></slot>
			<g-button class="open" icon="right" @click="clickButton" v-show="yyy"></g-button>
		</div>
		<div class="layout" :class="layClass" v-else>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Button from './button'
	import Header from './header'
	import Content from './content'
	import Footer from './footer'
	import Sider from './sider'
	export default {
		name: "g-layout",
		data(){
			return {
				layClass: {
					hasSider: false,
				},
				xxx: false,
				yyy: false,
				eventhub: new Vue(),
			}
		},
		provide(){
			return {
				eventhub: this.eventhub
			}
		},
		methods: {
			clickButton(){
				this.yyy = false
				this.eventhub.$emit('update:send', this.yyy)
			}
		},
		mounted() {
			this.$children.forEach((child)=>{
				if (child.$options.name === 'g-sider') {
					this.layClass.hasSider = true
					if (child.$options.name === 'g-layout') {
						this.xxx = false
					}else {
						this.xxx = true
					}
				}
			})
			this.eventhub.$emit('update:send',this.yyy)
			this.eventhub.$on('update:change',(value)=> {
				if (value === false){
					setTimeout(()=> {
						this.yyy = true
					},500)
				}
			})
		},
		components: {
			'g-button': Button,
			'g-header': Header,
			'g-content': Content,
			'g-footer': Footer,
			'g-sider': Sider,
		},
		
	}
</script>

<style scoped lang="scss">
	.g-button{
		padding: 0;
		width: 12px;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.wrapper{
		display: flex;
		flex-grow: 1;
	}
	.layout{
		display:flex;
		flex-direction: column;
		flex-grow: 1;
		border: 1px solid #888;
		&.hasSider{
			display: flex;
			flex-grow: 1;
			flex-direction: row;
		}
		& .open{
			position: absolute;
			left: 0;
			bottom: 50%;
			transform: translateY(36px);
		}
	}
</style>