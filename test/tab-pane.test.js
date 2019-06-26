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
describe('TabPane', () => {

	it('存在.', () => {
		expect(TabPane).to.be.ok
	})

	it('接受 name 属性', ()=>  {
		const Constructor = Vue.extend(TabPane)
		const tab = new Constructor({
			data(){
				return{
					active: true
				}
			},
			propsData: {
				name: 'aaa',
			}
		}).$mount()
		console.log(tab.$el.outerHTML);
		expect(tab.$el.getAttribute('data-name')).to.eq('aaa')
	});

})