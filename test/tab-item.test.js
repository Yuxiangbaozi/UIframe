import chai from "chai";
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import Vue from 'vue'
import Tab from '../src/tab'
import tabHead from '../src/tab-head'
import tabBody from '../src/tab-body'
import TabItem from '../src/tab-item'
import TabPane from '../src/tab-pane'

Vue.component('g-tab-head',tabHead);
Vue.component('g-tab-body',tabBody);
Vue.component('g-tab-item',TabItem);
Vue.component('g-tab-pane',TabPane);

const expect = chai.expect;

chai.use(sinonChai);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabItem', () => {

	it('存在.', () => {
		expect(TabItem).to.be.ok
	})

	it('接受 name 属性', ()=>  {
		const Constructor = Vue.extend(TabItem)
		const tab = new Constructor({
			propsData: {
				name: 'XXX',
			}
		}).$mount()

		expect(tab.$el.getAttribute('data-name')).to.eq('XXX')
	});

	it('接受 disable 属性', ()=>  {
		const Constructor = Vue.extend(TabItem)
		const tab = new Constructor({
			propsData: {
				name: 'aaa',
				disable: true,
			}
		}).$mount()

		expect(tab.$el.classList.contains('disable')).to.eq(true)

		const callback = sinon.fake();
		tab.$on('click', callback)
		tab.$el.click()
		expect(callback).to.have.not.been.called
	});
})
