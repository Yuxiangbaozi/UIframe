import chai from "chai";
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import Vue from 'vue'
import Input from '../src/input'

const expect = chai.expect;

chai.use(sinonChai);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

	it('Input存在.', () => {
		expect(Input).to.be.ok
	})

	describe('props', ()=>{
		const Constructor = Vue.extend(Input)
		let ip
		afterEach(function(){
			ip.$destroy()
		})

		it('接收 value', () => {
			ip = new Constructor({
				propsData: {
					value: '王八'
				}
			}).$mount()

			const inputElement = ip.$el.querySelector('input')
			expect(inputElement.value).to.equal('王八')
		})

		it('接收 disabled', () => {
			ip = new Constructor({
				propsData: {
					disabled: true
				}
			}).$mount()

			const inputElement = ip.$el.querySelector('input')
			expect(inputElement.disabled).to.equal(true)
		})

		it('接收 readonly', () => {
			ip = new Constructor({
				propsData: {
					readonly: true
				}
			}).$mount()

			const inputElement = ip.$el.querySelector('input')
			expect(inputElement.readOnly).to.equal(true)
		})

		it('接收 error', () => {
			ip = new Constructor({
				propsData: {
					error: '王八'
				}
			}).$mount()

			const useElement = ip.$el.querySelector('use')
			expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
			const errorMessage = ip.$el.querySelector('span')
			expect(errorMessage.innerText).to.equal('王八')
		})
	})

	describe('事件', ()=>{
		const Constructor = Vue.extend(Input)
		let ip
		afterEach(function(){
			ip.$destroy()
		})
		it('支持 change/input/focus/blur 事件', ()=>{
			['change','input','focus','blur'].forEach((events)=>{
				ip = new Constructor({}).$mount()
				const callback = sinon.fake();
				ip.$on(events,callback)
				let event = new Event(events)
				let inputElement = ip.$el.querySelector('input')
				inputElement.dispatchEvent(event)
				expect(callback).to.have.been.calledWith(event)
			})
		})
	})
})