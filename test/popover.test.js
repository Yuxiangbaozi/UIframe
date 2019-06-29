import chai from "chai";
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import Popover from '../src/popover'

const expect = chai.expect;

chai.use(sinonChai);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

	it('存在.', () => {
		expect(Popover).to.be.ok
	})

	it('可以设置position.', (done) => {
		Vue.component('g-popover',Popover);
		const div1 = document.createElement('div')
		document.body.appendChild(div1)
		div1.innerHTML = `
		<g-popover position="top" ref="popover">
      <template slot="pcontent">
        <div>popover内容</div>
			</template>
			<button class="bbb">点我</button>
		</g-popover>
		`
		const vm = new Vue({
			el: div1,
		})
		
		
		vm.$el.querySelector('.bbb').click()
		vm.$nextTick(() => {
			const {contentWrapper} = vm.$refs.popover.$refs
			expect(contentWrapper.classList.contains('position-top')).to.eq(true);
			done()
		})
	})
})