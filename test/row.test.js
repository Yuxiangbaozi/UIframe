import chai from "chai";
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import Row from '../src/row'
import Column from '../src/column'

const expect = chai.expect;

chai.use(sinonChai);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

	it('存在.', () => {
		expect(Row).to.be.ok
	})

	it('接收 gutter 属性', (done) => {
		Vue.component('g-row',Row);
		Vue.component('g-col',Column);
		const div1 = document.createElement('div')
		document.body.appendChild(div1)
		div1.innerHTML = `
			<g-row gutter="20">
				<g-col span="12"></g-col>
				<g-col span="12"></g-col>
			</g-row>
		`
		const vm = new Vue({
			el: div1,
		})

		setTimeout(()=>{
			const row = vm.$el.querySelector('.row')
			expect(getComputedStyle(row).marginLeft).to.eq('-10px')
			expect(getComputedStyle(row).marginRight).to.eq('-10px')
			const cols = vm.$el.querySelectorAll('.col')
			expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
			expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
			done()
			div1.remove()
			vm.$destroy()
		})
	})

	it('接收 align 属性', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Row)
		const row = new Constructor({
			propsData: {
				align: 'center'
			}
		}).$mount(div)

		const element = row.$el
		expect(getComputedStyle(element).justifyContent).to.equal('center')
		div.remove()
		row.$destroy()
	})
})