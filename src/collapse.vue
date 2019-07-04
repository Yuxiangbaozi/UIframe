<template>
	<div class="collapse">
		<slot></slot>
	</div>
</template>

<script>
	import Vue from 'vue'
	import CollapseItem from './collapse-item'
	export default {
		name: "g-collapse",
		data(){
			return{
				akafjc: new Vue(),
			}
		},
		components: {
			'g-collapse-item': CollapseItem
		},
		props: {
			single: {
				type: Boolean,
				default: false
			},
			selected: {
				type: Array || String
			}
		},
		provide(){
			return {
				akafjc: this.akafjc
			}
		},
		mounted() {
			this.akafjc.$emit('update:selected',this.selected)
			
			this.akafjc.$on('update:addSelected',(value)=> {
				let selectedCopy = JSON.parse(JSON.stringify(this.selected))
				if (this.single) {
					selectedCopy = [value]
				} else {
					selectedCopy.push(value)
				}
				this.akafjc.$emit('update:selected',selectedCopy)
				this.$emit('update:selected',selectedCopy)
			})
			
			this.akafjc.$on('update:removeSelected',(value)=> {
				let selectedCopy = JSON.parse(JSON.stringify(this.selected))
				let index = selectedCopy.indexOf(value)
				selectedCopy.splice(index, 1)
				this.akafjc.$emit('update:selected',selectedCopy)
				this.$emit('update:selected',selectedCopy)
			})
			
		}
	}
</script>

<style scoped lang="scss">
	$border-color: #ddd;
	$border-radius: 5px;
	.collapse{
		display: block;
		border: 1px solid $border-color;
		border-radius: $border-radius;
		
	}
</style>