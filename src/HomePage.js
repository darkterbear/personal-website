import React, { Component } from 'react'
import { BottomBar } from './Components'

const homeText =
	'var terrance = new Developer({\n\u00A0\u00A0age: 17.99992,\n\u00A0\u00A0email: \u2018tyli@uw.edu\u2019,\n\u00A0\u00A0location: \u2018Seattle\u2019\n})\n\nterrance.addGitHub()\nterrance.addLinkedIn()\n\nterrance.resume = new Resume(\n\u00A0\u00A0terrance.experience,\n\u00A0\u00A0terrance.honors,\n\u00A0\u00A0terrance.projects\n)'

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export default class HomePage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: ''
		}
	}

	async componentDidMount() {
		await sleep(1000)
		for (var i = 0; i < homeText.length; i++) {
			await sleep(Math.random() * 40 + 30)
			this.setState({ text: this.state.text + homeText.charAt(i) })
		}
	}

	render() {
		return (
			<div className="content">
				<div className="center">
					<h1>terrance li</h1>
					<p className="code">{this.state.text}</p>
				</div>
				<BottomBar />
			</div>
		)
	}
}
