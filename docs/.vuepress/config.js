module.exports = {
	base: '/UIframe/',
	title: 'UI Frame',
	description: '一个好用的UI框架',
	themeConfig: {
		sidebar: 'auto',
		nav: [
			{ text: '主页', link: '/' },
			{ text: '安装', link: '/install/' },
			{ text: '交流', link: 'https://google.com' },
		],
		sidebar: [
			{
				title: '入门',
				children: ['/install/','/get-started/'],
			},
			{
				title: '组件',
				children: [
					'/components/button.md',
					'/components/collapse.md',
					'/components/grid.md',
					'/components/input.md',
					'/components/layout.md',
					'/components/popover.md',
					'/components/tab.md',
					'/components/toast.md',
				]
			},
		]
	}
}