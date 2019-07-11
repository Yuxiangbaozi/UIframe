<template>
	<div class="collapseItem">
		<div class="title" @click="toggle">
			{{title}}
		</div>
		<div class="content" v-if="show">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "g-collapse-item",
		data(){
			return {
				show: false,
			}
		},
		props: {
			title: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			}
		},
		inject: ['akafjc'],
		mounted() {
			this.akafjc.$on('update:selected', (names) => {
				if (names.indexOf(this.name) >= 0) {
					this.show = true
				} else {
					this.show = false
				}
			})
		},
		methods: {
			toggle(){
				if (this.show === false){
					let arr = this.name.split('')
					this.akafjc.$emit('update:addSelected',arr)
				} else {
					this.akafjc.$emit('update:removeSelected',this.name)
				}
			},
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