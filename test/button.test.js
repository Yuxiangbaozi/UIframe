import chai from "chai";

const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {

	it('存在.', () => {
		expect(Button).to.be.ok
	})

	it('可以设置icon.', () => {
		const Constructor = Vue.extend(Button)
		const bt = new Constructor({
			propsData: {
				icon: 'shezhi'
			}
		}).$mount()

		const useElement = bt.$el.querySelector('use')
		expect(useElement.getAttribute('xlink:href')).to.equal('#i-shezhi')
		bt.$destroy()
	})

	it('可以设置loading.', () => {
		const Constructor = Vue.extend(Button)
		const bt = new Constructor({
			propsData: {
				icon: 'shezhi',
				loading: true
			}
		}).$mount()

		let useElement = bt.$el.querySelector('use')
		let href = useElement.getAttribute('xlink:href')
		expect(href).to.eq('#i-loading')
		bt.$destroy()

	})

	it('icon 默认的 在前面', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Button)
		const bt = new Constructor({
			propsData: {
				icon: 'shezhi',
			}
		}).$mount(div)

		let useSvg = bt.$el.querySelector('.view')
		let flexDirection = window.getComputedStyle(useSvg).flexDirection
		expect(flexDirection).to.eq('row')
		bt.$el.remove()
		bt.$destroy()
	})

	it('设置 iconPosition 可以改变 位置', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Button)
		const bt = new Constructor({
			propsData: {
				icon: 'shezhi',
				iconposition: 'right'
			}
		}).$mount(div)

		let useSvg = bt.$el.querySelector('.view')
		let flexDirection = window.getComputedStyle(useSvg).flexDirection
		expect(flexDirection).to.eq('row-reverse')
		bt.$el.remove()
		bt.$destroy()
	})

	it('点击 button 触发 click 事件', () => {
		const Constructor = Vue.extend(Button)
		const vm = new Constructor({
			propsData: {
				icon: 'shezhi',
			}
		}).$mount()

		const callback = sinon.fake()
		vm.$on('click', callback)
		vm.$el.click()
		expect(callback).to.have.been.called
	})
})