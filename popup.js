import { accounts } from './accounts.js'
const rootDiv = document.getElementById('root')

;(function addAccountDetailsToDom() {
	let content = ''
	accounts.forEach((account) => {
		content += `<button class="account-btn" data-authuser="${account.authuser}">${account.displayName}</button>`
	})
	rootDiv.innerHTML = content
	accountSwitchFunctionality()
})()

function accountSwitchFunctionality() {
	const accountButtons = document.querySelectorAll('.account-btn')

	accountButtons.forEach((accountButton) => {
		accountButton.addEventListener('click', switchAccount)
	})

	function switchAccount(e) {
		const code =
			`let url=new URL(window.location.href);url.search = '?authuser=` +
			`${e.target.dataset.authuser}';` +
			`window.location.href = url.href`
		chrome.tabs.executeScript({
			code
		})
	}
}
