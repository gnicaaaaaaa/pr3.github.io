let tab = function () {
	let tabNav = document.querySelectorAll('.tabs-nav__item'),
		tabcontent = document.querySelectorAll('.tab'),
		tabName;
	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});
	function selectTabNav() {
		tabNav.forEach (item => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}
	function selectTabContent(tabName) {
	    tabcontent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
		})
	}
};

tab();