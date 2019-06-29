import chai from "chai";
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import Vue from 'vue'
import Tab from '../src/tab'
import tabHead from '../src/tab-head'
import tabBody from '../src/tab-body'
import TabItem from '../src/tab-item'
import TabPane from '../src/tab-pane'

Vue.component('g-tab',Tab)
Vue.component('g-tab-head',tabHead);
Vue.component('g-tab-body',tabBody);
Vue.component('g-tab-item',TabItem);
Vue.component('g-tab-pane',TabPane);

const expect = chai.expect;

chai.use(sinonChai);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tab', () => {

	it('存在.', () => {
		expect(Tab).to.be.ok
	})

	it('接受 selected 属性', () => {
		const div1 = document.createElement('div')
		document.body.appendChild(div1)
		div1.innerHTML = `
			<g-tab selected="finance">
        <g-tab-head>
            <g-tab-item name="girl">美女</g-tab-item>
            <g-tab-item name="finance">财经</g-tab-item>
            <g-tab-item name="sport">体育</g-tab-item>
        </g-tab-head>
        <g-tab-body>
            <g-tab-pane name="girl">美女相关</g-tab-pane>
            <g-tab-pane name="finance">财经相关</g-tab-pane>
            <g-tab-pane name="sport">体育相关</g-tab-pane>
        </g-tab-body>
    </g-tab>
		`
		const tab = new Vue({
			el: div1,
		})

		tab.$nextTick(()=> {
			let x = tab.$el.querySelector(`.tab-item[data-name="finance"]`)
			expect(x.classList.contains('active')).to.equal(true)
		})
	})
})
