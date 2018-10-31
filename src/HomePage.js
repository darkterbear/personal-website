import React, { Component } from 'react'
import { BottomBar, CodePane, Logo } from './Components'

const sleep = ms => {
	return new Promise(resolve => setTimeout(resolve, ms))
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
		// handle blinking cursor
		setInterval(() => {
			const current = this.state.nameText

			if (current.charAt(current.length - 1) == '|') {
				this.setState({
					nameText: current.substring(0, current.length - 1) + '\u00a0'
				})
			} else {
				this.setState({
					nameText: current.substring(0, current.length - 1) + '|'
				})
			}
		}, 500)

		this.revealName()
	}

	revealName = async () => {
		await sleep(500)

		var actual = 'terrance li'
		for (var i = 0; i < actual.length; i++) {
			this.setState({
				nameText:
					this.state.nameText.slice(0, i) +
					actual.charAt(i) +
					this.state.nameText.slice(i)
			})
			await sleep(Math.random() * 100 + 50)
		}
	}

	render() {
		return (
			<div className="content">
				<Logo />
				<div className="center">
					<h1>{this.state.nameText}</h1>
				</div>
				<BottomBar />
			</div>
		)
	}
}
