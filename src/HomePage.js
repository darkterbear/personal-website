import React, { Component } from 'react'
import { BottomBar, CodePane } from './Components'

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
			nameText: '|'
		}
	}

	async componentDidMount() {
		//this.renderText()

		this.revealName()
	}

	revealName = async () => {
		await sleep(500)
		this.setState({ nameText: '' })
		await sleep(500)
		this.setState({ nameText: '|' })
		await sleep(100)

		var actual = 'terrance li'
		for (var i = 0; i < actual.length; i++) {
			this.setState({
				nameText: replaceAt(this.state.nameText, i, actual.charAt(i) + '|')
			})
			await sleep(50)
		}

		this.setState({ nameText: 'terrance li\u00A0' })
		setInterval(() => {
			if (this.state.nameText.charAt(this.state.nameText.length - 1) === '|') {
				this.setState({ nameText: 'terrance li\u00A0' })
			} else {
				this.setState({ nameText: 'terrance li|' })
			}
		}, 500)
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
