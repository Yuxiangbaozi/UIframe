<template>
	<div class="col" :class="colClasses" :style="colStyle">
		<div class="wrapper">
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
		name: "g-column",
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
		methods: {
			aa(obj,str = ''){
				let arr = []
				if (!obj) {return []}
				if (obj.span) {
					arr.push(`col-${str}${obj.span}`)
				}
				if (obj.offset) {
					arr.push(`offset-${str}${obj.offset}`)
				}
				return arr
			}
		},
		computed: {
			colClasses(){
				let {span,offset,pad,narrowPc,pc,widePc} = this
				let aa = this.aa
				return [
					...aa({span, offset}),
					...aa(pad, 'pad-'),
					...aa(narrowPc, 'narrow-pc-'),
					...aa(pc, 'pc-'),
					...aa(widePc, 'wide-pc-'),
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
	*{box-sizing: border-box}
	.wrapper{
		border: 1px solid #ccc; 
		height: 100px; 
		background-color: #eee
	}
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

		@media (min-width: 577px) {
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

		@media (min-width: 769px) {
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

		@media (min-width: 993px) {
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