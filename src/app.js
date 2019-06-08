import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'

Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)

new Vue({
	el: '#app',
	data: {
		loading1: false,
	},
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'

const expect = chai.expect
chai.use(spies)


{
	const Constructor = Vue.extend(Button)
	const bt = new Constructor({
		propsData: {
			icon: "shezhi"
		}
	}).$mount()
	let useElement = bt.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-shezhi')
	bt.$el.remove()
	bt.$destroy()
}

{
	const Constructor = Vue.extend(Button)
	const bt = new Constructor({
		propsData: {
			icon: "shezhi",
			loading: true,
		}
	}).$mount()
	let useElement = bt.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-loading')
	bt.$el.remove()
	bt.$destroy()
}

{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const bt = new Constructor({
		propsData: {
			icon: 'shezhi',
			iconposition: 'right',
		}
	}).$mount(div)
	let useSvg = bt.$el.querySelector('.view')
	let flexDirection = window.getComputedStyle(useSvg).flexDirection
	expect(flexDirection).to.eq('row-reverse')
	bt.$el.remove()
	bt.$destroy()
}

{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const bt = new Constructor({
		propsData: {
			icon: 'shezhi',
		}
	}).$mount(div)
	let view = bt.$el.querySelector('.view')
	let flexDirection = window.getComputedStyle(view).flexDirection
	expect(flexDirection).to.eq('row')
	bt.$el.remove()
	bt.$destroy()
}

{
	const Constructor = Vue.extend(Button)
	const bt = new Constructor({
		propsData: {
			icon: 'shezhi',
		}
	}).$mount()
	let spy = chai.spy(function(){})
	bt.$on('click',spy)
	let button = bt.$el
	button.click()
	expect(spy).to.have.been.called
}