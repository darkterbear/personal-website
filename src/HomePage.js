import React, { Component } from 'react'
import { BottomBar, CodePane } from './Components'

const homeText =
	'var terrance = new Developer({\n\u00A0\u00A0age: 17.99992,\n\u00A0\u00A0email: \u2018tyli@uw.edu\u2019,\n\u00A0\u00A0location: \u2018Seattle\u2019\n})\n\nterrance.addGitHub()\nterrance.addLinkedIn()\n\nterrance.resume = new Resume(\n\u00A0\u00A0terrance.experience,\n\u00A0\u00A0terrance.honors,\n\u00A0\u00A0terrance.projects\n)'

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
const replaceAt = (s, index, replacement) => {
	return s.substr(0, index) + replacement + s.substr(index + replacement.length)
}

const hat = length => {
	var text = ''
	var possible = 'abcdef0123456789'

	for (var i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length))

	return text
}

export default class HomePage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: '',
			nameText: hat(8) + ' ' + hat(2)
		}
	}

	async componentDidMount() {
		//this.renderText()

		this.revealName()
	}

	renderText = async () => {
		await sleep(2000)
		for (var i = 0; i < homeText.length; i++) {
			await sleep(Math.random() * 40 + 30)
			this.setState({ text: this.state.text + homeText.charAt(i) })
		}
	}

	handlePageChange = pageName => {
		console.log(pageName)
	}

	revealName = async () => {
		await sleep(1000)

		const actual = 'terrance li'
		for (var i = 0; i < 11; i++) {
			this.setState({
				nameText: replaceAt(this.state.nameText, i, actual.charAt(i))
			})
			await sleep(50)
		}
	}

	render() {
		return (
			<div className="content">
				<div className="center">
					<h1>{this.state.nameText}</h1>
					<CodePane handlePageChange={this.handlePageChange} />
				</div>
				<BottomBar />
			</div>
		)
	}
}
