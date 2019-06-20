<template>
	
</template>

<script>
	import Toast from './toast'

	let currentToast

	export default {
		name: "g-plugin",
		install (Vue, options) {
			Vue.prototype.$toast = function (message,toastOptions) {
				if (currentToast) {
					currentToast.close()
				}
				currentToast = createToast({Vue,message,propsData: toastOptions})
			}
		}
	}

	function createToast({Vue,message,propsData,onClose}){
		let Constructor = Vue.extend(Toast)
		let toast = new Constructor({propsData})
		toast.$slots.default = [message]
		toast.$mount()
		document.body.appendChild(toast.$el)
		return toast
	}
</script>

<style scoped>

</style>