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
		inject: ['eventBus'],
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
		data(){
			return {
				show: false,
			}
		},
		mounted() {
			this.eventBus && this.eventBus.$on('update:selected', (name) => {
				if (name !== this.name) {
					this.close()
				} else {
					this.open()
				}
			})
		},
		methods: {
			toggle(){
				if (this.show === false){
					this.eventBus && this.eventBus.$emit('update:selected',this.name)
				} else {
					this.show = false
				}
			},
			close(){
				this.show = false
			},
			open(){
				this.show = true
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