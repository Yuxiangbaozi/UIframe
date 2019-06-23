import chai from "chai";
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import Vue from 'vue'
import Toast from '../src/toast'

const expect = chai.expect;

chai.use(sinonChai);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

	it('存在.', () => {
		expect(Toast).to.be.ok
	})

	describe('props', () => {
		it('自动关闭', (done) => {
			let div = document.createElement('div')
			document.body.appendChild(div)
			const Constructor = Vue.extend(Toast)
			const to = new Constructor({
				propsData: {
					autoClose: 1,
				}
			}).$mount(div)

			setTimeout(() => {
				expect(document.body.contains(to.$el)).to.eq(false)
				done()
			},1500)
		})

		it('接收closeButton并关闭toast', (done) => {
			const callback = sinon.fake();
			const Constructor = Vue.extend(Toast)
			const to = new Constructor({
				propsData: {
					closeButton: {
						text: '泥奏凯',
						callback: callback,
					}
				}
			}).$mount()

			let closeBottom = to.$el.querySelector('.close')
			expect(closeBottom.textContent.trim()).to.eq('泥奏凯')
			setTimeout(()=> {
				closeBottom.click()
				expect(callback).to.have.been.called
				done()
				to.$destroy()
			},500)
		})

		it('开启enableHtml', () => {
			const Constructor = Vue.extend(Toast)
			const to = new Constructor({
				propsData: {
					enableHtml: true
				}
			})
			to.$slots.default = [`<strong id="test">hi</strong>`]
			to.$mount()

			let strong = to.$el.querySelector('#test')
			expect(strong).to.exist
			to.$destroy()
		})

		it('设置toast位置', () => {
			const Constructor = Vue.extend(Toast)
			const to = new Constructor({
				propsData: {
					position: 'top'
				}
			})
			to.$mount()

			let top = to.$el.classList.contains('position-top')
			expect(top).to.eq(true)
			to.$destroy()
		})
	})

})