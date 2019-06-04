<template>
	<div class="g-button-group">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-button-group"
	}
</script>

<style lang="scss" scoped>
.g-button-group{
	display: inline-flex;
	vertical-align: top;
	>.g-button{
		border-radius: 0;
		&:first-child{
			border-radius: 5px 0 0 5px;
		}
		&:last-child{
			border-radius: 0 5px 5px 0;
		}
	}
}
</style>