<template>
	<transition name="slide">
		<div class="sider" v-if="visible">
			<slot></slot>
			<button @click="visible=false">X</button>
		</div>
	</transition>
</template>

<script>
	export default {
		name: "g-sider",
		data(){
			return {
				visible: true
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.sider{
		position: relative;
		>button{
			position: absolute;
			right: 0;
			top: 0;
		}
	}
	.slide-enter-active, .slide-leave-active {
		transition: transform .5s;
	}
	.slide-enter, .slide-leave-to {
		transform: translateX(-100%);
	}
</style>