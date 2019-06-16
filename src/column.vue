<template>
	<div class="col" :class="colClasses" :style="colStyle">
		<div style="border: 1px solid blue; height: 100px;">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	let validator = ((value)=> {
		let keys = Object.keys(value)
		let valid = true
		keys.forEach((key)=>{
			if(!['span','offset'].includes(key)){
				valid = false
			}
		})
		return valid
	})
	export default {
		name: "column",
		props: {
			span: [Number,String],
			offset: [Number,String],
			pad: {type: Object, validator: validator,},
			narrowPc: {type: Object, validator: validator,},
			pc: {type: Object, validator: validator,},
			widePc: {type: Object, validator: validator,},
		},
		data(){
			return {
				gutter: 0,
			}
		},
		computed: {
			colClasses(){
				let {span,offset,pad,narrowPc,pc,widePc} = this
				return [
					`col-${span}`,
					offset ? [`offset-${offset}`] : [],
					...(pad ? [`col-pad-${pad.span}`] : []),
					...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
					...(pc ? [`col-pc-${pc.span}`] : []),
					...(widePc ? [`col-wide-pc-${widePc.span}`] : []),
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

		@media (min-width: 577px) and (max-width: 768px) {
			$class-prefix: col-pad-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n / 24) * 100%;
				}
			}

			$class-prefix: offset-pad-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n / 24) * 100%;
				}
			}
		}

		@media (min-width: 769px) and (max-width: 992px) {
			$class-prefix: col-narrow-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n / 24) * 100%;
				}
			}

			$class-prefix: offset-narrow-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n / 24) * 100%;
				}
			}
		}

		@media (min-width: 993px) and (max-width: 1200px) {
			$class-prefix: col-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n / 24) * 100%;
				}
			}

			$class-prefix: offset-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n / 24) * 100%;
				}
			}
		}

		@media (min-width: 1201px) {
			$class-prefix: col-wide-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n / 24) * 100%;
				}
			}

			$class-prefix: offset-wide-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n / 24) * 100%;
				}
			}
		}
	}
</style>