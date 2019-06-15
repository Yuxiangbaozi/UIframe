<template>
	<div class="row" :style="rowStyle" :class="rowClass">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "row",
		props: {
			gutter : [String,Number],
			align : {
				type: String,
				validate(value){
					return ['left','right','center'].includes(value)
				}
			}
		},
		computed: {
			rowStyle(){
				return {
					marginLeft: -this.gutter/2 + 'px',
					marginRight: -this.gutter/2 + 'px'
				}
			},
			rowClass(){
				return [
					this.align &&`align-${this.align}`
				]
			}
		},
		mounted() {
			this.$children.forEach((child)=>{
				child.gutter = this.gutter
			})
		}
	}
</script>

<style scoped lang="scss">
	.row{
		display: flex;
		&.align-left{
			justify-content: flex-start;
		}
		&.align-right{
			justify-content: flex-end;
		}
		&.align-center{
			justify-content: center;
		}
	}
</style>