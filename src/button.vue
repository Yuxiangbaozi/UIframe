<template>
	<button class="g-button" :class="{[`icon-${iconposition}`]: true}">
		<div class="view">
			<svg v-if="icon" class="icon" aria-hidden="true">
				<use :xlink:href=`#i-${icon}`></use>
			</svg>
			<slot></slot>
		</div>
	</button>
</template>

<script>
	export default {
		props:{
			icon:{},
			iconposition:{
				type: String,
				default: 'left',
				validate(value){
					return !(value !== 'left' && value !== 'right');
				},
			},
		}
	}
</script>

<style lang="scss" scoped>
	.g-button {
		font-size: var(--font-size);
		height: var(--button-height);
		padding: 0 0.85em;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-bg);
		&:hover {border-color: var(--border-color-hover);}
		&:active {background: var(--button-active-bg);}
		&:focus {outline: none;}
		&{>.view{
			display: inline-flex;
			justify-content: center;
			align-items: center;
			flex-direction: row;
			>.icon{margin-right: 0.3em; margin-left: 0}
			}
		}
		&.icon-right{>.view{
			flex-direction: row-reverse;
			>.icon{margin-right: 0; margin-left: 0.3em;}
			}
		}
	}
</style>