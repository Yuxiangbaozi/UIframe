<template>
	<button class="g-button" :class="{[`icon-${iPosition}`]: true}" @click="$emit('click')">
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
		name: "button",
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
			}
		},
		components: {
			'g-icon' : Icon,
		},
	}
</script>

<style lang="scss" scoped>
	.g-button {
		@keyframes spin {
			0%{transform: rotate(0deg)}
			100%{transform: rotate(360deg)}
		}
		font-size: var(--font-size);
		height: var(--button-height);
		padding: 0 0.85em;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-bg);
		vertical-align: top;
		&:hover {border-color: var(--border-color-hover);}
		&:active {background: var(--button-active-bg);}
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