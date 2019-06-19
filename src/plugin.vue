<template>
	
</template>

<script>
	import Toast from './toast'
	export default {
		name: "g-plugin",
		install (Vue, options) {
			Vue.prototype.$toast = function (message,toastOptions) {
				let Constructor = Vue.extend(Toast)
				let toast = new Constructor({
					propsData: toastOptions
				})
				toast.$slots.default = [message]
				toast.$mount()
				document.body.appendChild(toast.$el)
			}
		}
	}
</script>

<style scoped>

</style>