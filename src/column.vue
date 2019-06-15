<template>
	<div class="col" :class="colClasses" :style="colStyle">
		<div style="border: 1px solid blue; height: 100px;">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "column",
		props: {
			span: [Number,String],
			offset: [Number,String],
		},
		data(){
			return {
				gutter: 0,
			}
		},
		computed: {
			colClasses(){
				return [
					`col-${this.span}`,
					this.offset &&`offset-${this.offset}`
				]
			},
			colStyle(){
				return {
					paddingLeft: this.gutter/2 + 'px',
					paddingRight: this.gutter/2 + 'px'
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.col{
		width: 50%;
		height: 100px;
		$class-prefix: col-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}

		$class-prefix: offset-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n / 24) * 100%;
			}
		}
	}
</style>