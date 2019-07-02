<template>
	<button class="g-button" :class="{[`icon-${iPosition}`]: true ,disable}" 
	@click="$emit('click')">
		<div class="view">
			<g-icon v-if="icon && !loading" :icon="icon"></g-icon>
			<g-icon class="loading" v-if="loading" icon="loading"></g-icon>
			<slot></slot>
		</div>
	</button>
</template>

<script>
	import Icon from './icon'
	export default {
		name: "g-button",
		props:{
			icon: {},
			loading: {
				type: Boolean,
				default: false,
			},
			iPosition: {
				type: String,
				default: 'left',
				validator :function(value){
					return !(value !== 'left' && value !== 'right');
				}
			},
			disable: {
				type: Boolean,
				default: false
			},
		},
		components: {
			'g-icon' : Icon,
		},
	}
</script>

<style lang="scss" scoped>
	$button-height: 32px;
	$font-size: 14px;
	$button-bg: white;
	$button-active-bg: #eee;
	$border-radius: 5px;
	$color: #333;
	$border-color: #999;
	$border-color-hover: #222;
	.g-button {
		@keyframes spin {
			0%{transform: rotate(0deg)}
			100%{transform: rotate(360deg)}
		}
		font-size: $font-size;
		height: $button-height;
		padding: 0 0.85em;
		border-radius: $border-radius;
		border: 1px solid $border-color;
		background: $button-bg;
		vertical-align: middle;
		&.disable {cursor: not-allowed; background: $button-active-bg; color: $border-color}
		&:hover {border-color: $border-color-hover;}
		&:active {background: $button-active-bg;}
		&:focus {outline: none;}
		&{>.view{
			display: inline-flex;
			justify-content: center;
			align-items: center;
			flex-direction: row;
			>.g-icon{margin-right: 0.3em; margin-left: 0}
			>.loading{margin-right: 0.3em; margin-left: 0; animation: 1.5s spin infinite linear;}
			}
		}
		&.icon-right{>.view{
			flex-direction: row-reverse;
			>.g-icon{margin-right: 0; margin-left: 0.3em;}
			}
		}
	}
</style>