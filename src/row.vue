<template>
	<div class="row" :style="rowStyle" :class="rowClass">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "g-row",
		props: {
			gutter : [String,Number],
			align : {
				type: String,
				validator(value){
					return ['left','right','center'].indexOf(value) >= 0
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
	*{box-sizing: border-box}
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