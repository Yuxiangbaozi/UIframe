<template>
	<div class="tab-head">
		<slot></slot>
		<div class="line" ref="line"></div>
		<div class="action-wrapper">
			<slot name="action"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "g-tab-head",
		inject: ['akafjc'],
		mounted() {
			if (this.akafjc) {
				this.akafjc.$on('update:selected',(name, vm)=> {
					let {width,left} = vm.$el.getBoundingClientRect()
					let app = document.body.querySelector('#app')
					let left1 = app.offsetLeft
					this.$refs.line.style.width = `${width}px`
					this.$refs.line.style.transform = `translateX(${left-left1}px)`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	$height: 40px;
	$border-color: blue;
	.tab-head{
		display: flex;
		justify-content: flex-start;
		height: $height;
		position: relative;
		border-bottom: 1px solid #bbb;
		& .action-wrapper{
			margin-left: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 1em;
		}
		& .line{
			position: absolute;
			bottom: 0;
			border-bottom: 1px solid $border-color;
			transition: all 0.3s;
		}
	}
</style>