<template>
	<div class="collapseItem">
		<div class="title" @click="open = !open">
			{{title}}
		</div>
		<div class="content" v-if="open">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "g-collapse-item",
		props: {
			title: {
				type: String,
				required: true,
			}
		},
		data(){
			return {
				open: false,
			}
		}
	}
</script>

<style scoped lang="scss">
	$border-color: #ddd;
	$border-radius: 5px;
	.collapseItem{
		& .title{
			border: 1px solid $border-color;
			margin: -1px;
			min-height: 32px;
			display: flex;
			align-items: center;
			padding: 0 16px;
			cursor: pointer;
		}
		&:first-child{
			& .title{
				border-top-left-radius: $border-radius;
				border-top-right-radius: $border-radius;
			}
		}
		&:last-child{
			& .title:last-child{
				border-bottom-left-radius: $border-radius;
				border-bottom-right-radius: $border-radius;
			}
		}
		& .content{
			padding: 8px 16px;
		}
	}
</style>