<template>
	<div class="wrapper" :class="{'error':error}">
		<input :value="value" :disabled="disabled" :readonly="readonly"  type="text">
		<template v-if="error" >
			<g-icon icon="error"></g-icon>
			<span>{{error}}</span>
		</template>
	</div>
</template>

<script>
	import Icon from './icon'
	export default {
		name: "input",
		components: {
			'g-icon': Icon
		},
		props: {
			value: {
				type: String,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			readonly: {
				type: Boolean,
				default: false,
			},
			error: {
				type: String,
			}
		}
	}
</script>

<style scoped lang="scss">
	.g-icon {width: 1em; height: 1em; vertical-align: -0.15em; fill: currentColor; overflow: hidden;}
	$height: 32px;
	$border-color: #999;
	$border-color-hover: #666;
	$border-color-focus: rgba(0,0,0,0.5);
	$border-radius: 3px;
	$font-size: 14px;
	$error-color: #f1453d;
	$error-color-focus: rgba(241,69,61,0.5);
	.wrapper{
		font-size: $font-size;
		margin-bottom: 10px;
		display: inline-block;
		&>input:hover{
			border-color: $border-color-hover;
		}
		&>input:focus{
			box-shadow: inset 0 1px 3px $border-color-focus;
			outline: none;
		}
		>input {
			font-size: inherit;
			height: $height;
			border: 1px solid $border-color;
			border-radius: $border-radius;
			padding: 0 8px;
		}
		&>input[disabled],&>input[readonly]{
			border-color: #333;
			color: #888;
			cursor: not-allowed;
		}
		&.error{
			.g-icon{
			fill: $error-color;
			}
			>input{
				border-color: $error-color
			}
			>input:focus{
				border-color: $error-color;
			}
			>input:focus {
				box-shadow: inset 0 1px 3px $error-color-focus;
				outline: none;
			}
			span{
				color: $error-color;
			}
		}
	}
</style>