import chai from "chai";
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import Column from '../src/column'

const expect = chai.expect;

chai.use(sinonChai);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Column', () => {

	it('存在.', () => {
		expect(Column).to.be.ok
	})

	it('测试 props 属性', ()=>{
		let div
		let col
		const Constructor = Vue.extend(Column)

		beforeEach(()=>{
			div = document.createElement('div')
			document.body.appendChild(div)
		})

		it('接收 span 属性', () => {
			col = new Constructor({
				propsData: {
					span: 12
				}
			}).$mount(div)

			expect(col.$el.classList.contains('col-12')).to.equal(true)
			div.remove()
			col.$destroy()
		})

		it('接收 offset 属性', () => {
			col = new Constructor({
				propsData: {
					offset: 12
				}
			}).$mount(div)

			expect(col.$el.classList.contains('offset-12')).to.equal(true)
			div.remove()
			col.$destroy()
		})

		it('接收 pad 属性', () => {
			col = new Constructor({
				propsData: {
					pad: {span: 12, offset: 3}
				}
			}).$mount(div)

			expect(col.$el.classList.contains('col-pad-12')).to.equal(true)
			expect(col.$el.classList.contains('offset-pad-3')).to.equal(true)
			div.remove()
			col.$destroy()
		})

		it('接收 narrowPc 属性', () => {
			col = new Constructor({
				propsData: {
					narrowPc: {span: 12, offset: 3}
				}
			}).$mount(div)

			expect(col.$el.classList.contains('col-narrow-pc-12')).to.equal(true)
			expect(col.$el.classList.contains('offset-narrow-pc-3')).to.equal(true)
			div.remove()
			col.$destroy()
		})

		it('接收 pc 属性', () => {
			col = new Constructor({
				propsData: {
					pc: {span: 12, offset: 3}
				}
			}).$mount(div)

			expect(col.$el.classList.contains('col-pc-12')).to.equal(true)
			expect(col.$el.classList.contains('offset-pc-3')).to.equal(true)
			div.remove()
			col.$destroy()
		})

		it('接收 widePc 属性', () => {
			col = new Constructor({
				propsData: {
					widePc: {span: 12, offset: 3}
				}
			}).$mount(div)

			expect(col.$el.classList.contains('col-wide-pc-12')).to.equal(true)
			expect(col.$el.classList.contains('offset-wide-pc-3')).to.equal(true)
			div.remove()
			col.$destroy()
		})
	})
})